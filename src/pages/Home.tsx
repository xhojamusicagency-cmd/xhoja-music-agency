import { Link } from 'react-router-dom';
import { Music, Calendar, Users, Star, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold italic text-lg mb-4">Customized Music Lessons & Event Bookings</p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">Xhoja Music Agency</h1>
          <p className="text-gray-600 uppercase tracking-widest text-sm mb-8">WHERE MUSIC COMES TO LIFE</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/events"
              className="px-8 py-3 bg-dark text-white font-medium hover:bg-gray-800 transition-colors"
            >
              BOOK AN EVENT
            </Link>
            <Link
              to="/lessons"
              className="px-8 py-3 border-2 border-dark text-dark font-medium hover:bg-dark hover:text-white transition-colors"
            >
              START LESSONS
            </Link>
          </div>
          <a
            href="https://instagram.com/xhojamusicagency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors"
          >
            <Instagram size={20} />
            <span>@xhojamusicagency</span>
          </a>
        </div>
      </section>

      {/* Get to Know Us Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">OUR MUSIC JOURNEY BEGINS</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Get to Know Us</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded by Alexander Xhoja, a Berklee College of Music full-scholarship pianist and accomplished performer, Xhoja Music Agency is dedicated to nurturing musical talent and delivering exceptional live experiences.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Alexander maintains an active online presence featuring professional recordings, live performance videos, an artist website, and engaging social media channels, showcasing his artistry and commitment to excellence.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We provide personalized music instruction tailored to each student's goals and book talented musicians for weddings, parties, corporate events, and other special occasions. Xhoja Music Agency is committed to connecting artists with opportunities and creating unforgettable events that truly matter.
              </p>
              <Link
                to="/team"
                className="inline-block px-8 py-3 border-2 border-dark text-dark font-medium hover:bg-dark hover:text-white transition-colors"
              >
                MEET THE TEAM
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=600"
                alt="Pianist performing"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* From Jazz to DJ Sets Section */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?w=600"
                alt="DJ performing"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">LIVE ENTERTAINMENT</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">From Jazz to DJ Sets</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you're looking for live jazz ensembles, classical piano performances, or high-energy DJ sets, our talented musicians can bring the perfect sound to your event. We specialize in creating the ideal atmosphere for every occasion, from intimate gatherings to large celebrations.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our diverse roster of performers can adapt to any genre, style, or venue requirement. Every performance is tailored to match your vision and create an unforgettable musical experience for your guests.
              </p>
              <Link
                to="/events"
                className="inline-block px-8 py-3 bg-gold text-dark font-medium hover:bg-gold/90 transition-colors"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Setting the Stage Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">ELEGANT OCCASIONS</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Setting the Stage</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From intimate weddings to grand galas, our musicians know how to set the perfect mood for your special event. We understand that every moment matters, and our goal is to provide the musical backdrop that transforms your vision into reality.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                With experience performing at luxury venues throughout Boston and New England, our team brings professionalism, artistry, and an unwavering commitment to excellence to every engagement.
              </p>
              <Link
                to="/events"
                className="inline-block px-8 py-3 border-2 border-dark text-dark font-medium hover:bg-dark hover:text-white transition-colors"
              >
                PLAN YOUR EVENT
              </Link>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?w=600"
                alt="Wedding with piano"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">WHAT WE OFFER</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-cream rounded-lg p-8 text-center border border-gray-200">
              <Music size={40} className="mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-xl font-bold mb-3">Personalized Lessons</h3>
              <p className="text-gray-700 text-sm">Tailored music instruction for all skill levels, from beginners to advanced musicians.</p>
            </div>
            <div className="bg-cream rounded-lg p-8 text-center border border-gray-200">
              <Calendar size={40} className="mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-xl font-bold mb-3">Event Bookings</h3>
              <p className="text-gray-700 text-sm">Book talented musicians for weddings, parties, corporate events, and special occasions.</p>
            </div>
            <div className="bg-cream rounded-lg p-8 text-center border border-gray-200">
              <Users size={40} className="mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-xl font-bold mb-3">Expert Musicians</h3>
              <p className="text-gray-700 text-sm">Work with trained professionals from top music institutions including Berklee College of Music.</p>
            </div>
            <div className="bg-cream rounded-lg p-8 text-center border border-gray-200">
              <Star size={40} className="mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-xl font-bold mb-3">Exceptional Experiences</h3>
              <p className="text-gray-700 text-sm">Creating unforgettable musical moments that truly matter to you and your guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">TESTIMONIALS</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">What People Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "Thanks for an amazing performance for our wedding. Casandra and I totally loved it for our Henna ceremony. He was phenomenal and we'd be working with him again soon. Catch him before he gets famous — totally a rockstar."
              </p>
              <p className="font-semibold text-gray-800">Adhunik Anubhav</p>
              <p className="text-gold text-sm font-medium">WEDDING CEREMONY</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "I recently booked a studio session with Xhoja Music Agency and had an amazing experience. In less than two weeks, the agency arranged everything — the studio, sound engineer and a talented string quartet. Everyone arrived on time and the studio was set up quickly and professionally. I highly recommend Xhoja Music Agency to any artist looking for a smooth and professional recording experience."
              </p>
              <p className="font-semibold text-gray-800">Petr Moguto</p>
              <p className="text-gold text-sm font-medium">STUDIO SESSION</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                "I hired Alex to play piano at our home for a family holiday. I cannot say enough about his exquisite music, enthusiasm, energy and kindness. Alex became part of our family for the evening. He also wrote an original song to honor my dad's memory because he sensed that we were all thinking of my dad on this special occasion. Alex has immense talent and can play any genre of music. You are a magnificent musician and a very special person."
              </p>
              <p className="font-semibold text-gray-800">Marjory Gundersheim</p>
              <p className="text-gold text-sm font-medium">PRIVATE HOLIDAY EVENT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-widest text-sm font-medium mb-2">GET IN TOUCH</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-serif text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+18574988487" className="text-gold hover:text-gold/80 transition-colors">(857) 498-8487</a>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-2">Email</h3>
              <a href="mailto:xhojamusicagency@gmail.com" className="text-gold hover:text-gold/80 transition-colors">xhojamusicagency@gmail.com</a>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-700">Boston, Massachusetts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Ready to Create Musical Magic?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to learn an instrument, book musicians for your event, or collaborate with talented artists, we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gold text-dark font-medium hover:bg-gold/90 transition-colors"
            >
              GET IN TOUCH
            </Link>
            <Link
              to="/events"
              className="px-8 py-3 border-2 border-white text-white font-medium hover:bg-white hover:text-dark transition-colors"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
