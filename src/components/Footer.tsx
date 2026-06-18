import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/xhoja-logo.png" alt="Xhoja Music Agency" className="h-10 w-10 object-contain brightness-0 invert" />
              <span className="font-serif text-xl font-medium">Xhoja Music Agency</span>
            </div>
            <p className="text-[10px] tracking-[3px] uppercase text-gold/80 mb-3">Boston · Los Angeles</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              <span className="text-gold font-medium">XMA = Xhoja Music Agency.</span> Live music for events in Greater Boston and Los Angeles — weddings, hotels, private celebrations, and select corporate events.
            </p>
            <a href="https://instagram.com/xhojamusicagency" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors text-sm">
              <Instagram size={18} />
              <span>@xhojamusicagency</span>
            </a>
          </div>

          {/* Music By Event Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Music By Event</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/wedding-music-boston" className="hover:text-gold transition-colors">Wedding Music</Link></li>
              <li><Link to="/for-wedding-planners" className="hover:text-gold transition-colors">For Wedding Planners</Link></li>
              <li><Link to="/private-event-music-boston" className="hover:text-gold transition-colors">Private Events</Link></li>
              <li><Link to="/hotel-music-boston" className="hover:text-gold transition-colors">Hotel Music</Link></li>
              <li><Link to="/church-music-boston" className="hover:text-gold transition-colors">Church Music</Link></li>
              <li><Link to="/senior-living-music" className="hover:text-gold transition-colors">Senior Living</Link></li>
              <li><Link to="/bnai-mitzvah-music-boston" className="hover:text-gold transition-colors">B'nai Mitzvah</Link></li>
              <li><Link to="/funeral-music-services" className="hover:text-gold transition-colors">Funeral Services</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/ensembles" className="hover:text-gold transition-colors">Event Bookings</Link></li>
              <li><Link to="/los-angeles" className="hover:text-gold transition-colors">Los Angeles</Link></li>
              <li><Link to="/team" className="hover:text-gold transition-colors">Meet The Team</Link></li>
              <li><Link to="/faq" className="hover:text-gold transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="tel:+18574988487" className="hover:text-gold transition-colors">(857) 498-8487</a></li>
              <li><a href="mailto:xhojamusicagency@gmail.com" className="hover:text-gold transition-colors">xhojamusicagency@gmail.com</a></li>
              <li className="pt-1">
                <p className="text-[10px] tracking-[2px] uppercase text-gold/80 mb-1.5">Locations</p>
                <p>Boston, Massachusetts</p>
                <p className="mt-0.5">Los Angeles, California</p>
              </li>
              <li className="pt-2">
                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                <p className="mt-1">Sat: 10:00 AM - 4:00 PM</p>
                <p className="mt-1">Sun: Closed</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Xhoja Music Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
