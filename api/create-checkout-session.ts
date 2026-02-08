import type { VercelRequest, VercelResponse } from '@vercel/node';

const LESSON_PACKAGES: Record<string, { name: string; price: number; description: string }> = {
  trial: {
    name: 'Trial Lesson — 1 x 30min',
    price: 5000, // $50.00 in cents
    description: '1 introductory 30-minute lesson',
  },
  'half-hour': {
    name: 'Half-Hour Package — 4 x 30min',
    price: 20000, // $200.00 in cents
    description: '4 half-hour lesson sessions',
  },
  'full-hour': {
    name: 'Full-Hour Package — 4 x 60min',
    price: 36000, // $360.00 in cents
    description: '4 full-length 60-minute sessions',
  },
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { packageId, instrument, firstName, lastName, email, phone } = req.body;

  // Validate package
  const pkg = LESSON_PACKAGES[packageId];
  if (!pkg) {
    return res.status(400).json({ error: 'Invalid lesson package' });
  }

  if (!instrument || !firstName || !lastName || !email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const MERCHANT_ID = process.env.CLOVER_MERCHANT_ID;
  const API_KEY = process.env.CLOVER_API_KEY;

  if (!MERCHANT_ID || !API_KEY) {
    return res.status(500).json({ error: 'Payment configuration error' });
  }

  const lineItemName = `${instrument} — ${pkg.name}`;
  const siteUrl = process.env.SITE_URL || 'https://xhoja-music-agency.vercel.app';

  try {
    const response = await fetch(
      'https://www.clover.com/invoicingcheckoutservice/v1/checkouts',
      {
        method: 'POST',
        headers: {
          'X-Clover-Merchant-Id': MERCHANT_ID,
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          customer: {
            email,
            firstName,
            lastName,
            ...(phone ? { phoneNumber: phone } : {}),
          },
          shoppingCart: {
            lineItems: [
              {
                name: lineItemName,
                unitQty: 1,
                price: pkg.price,
              },
            ],
          },
          redirectUrls: {
            success: `${siteUrl}/payment-success`,
            failure: `${siteUrl}/payment-failed`,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Clover API error:', response.status, errorText);
      return res.status(502).json({ error: 'Payment provider error', details: errorText });
    }

    const data = await response.json();
    return res.status(200).json({ checkoutUrl: data.href });
  } catch (error) {
    console.error('Checkout session error:', error);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
