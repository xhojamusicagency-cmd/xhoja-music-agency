import { Link } from 'react-router-dom';
import { Music, Calendar, Users, Star, Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cream py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <p className="font-serif italic text-xl text-dark/70 tracking-[1.6px]">Customized Music Lessons & Event Bookings</p>
          <div className="mt-2 mb-4">
            <h1 className="font-serif text-[60px] font-light leading-[60px] tracking-[1.5px]">Xhoja Music Agency</h1>
          </div>
          <a
            href="https://instagram.com/xhojamusicagency"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-dark hover:text-dark/80 transition-colors bg-gold/5 border border-gold/30 rounded-full px-6 py-2.5"
          >
            <Instagram size={20} />
            <span>@xhojamusicagency</span>
          </a>
          <div className="flex justify-center mt-5 mb-5">
            <img
              src="/xhoja-logo.png"
              alt="Xhoja Music Agency"
              className="w-72 h-72 md:w-96 md:h-96 object-contain"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/events"
              className="px-8 py-3 bg-dark text-cream-light text-sm font-medium tracking-[0.7px] hover:bg-gray-800 transition-colors"
            >
              BOOK AN EVENT
            </Link>
            <Link
              to="/lessons"
              className="px-8 py-3 border-2 border-dark text-dark text-sm font-medium tracking-[0.7px] hover:bg-dark hover:text-white transition-colors"
            >
              START LESSONS
            </Link>
          </div>
        </div>
      </section>

      {/* Get To Know Us Section */}
      <section className="bg-white py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">OUR MUSIC JOURNEY BEGINS</p>
              <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-4">Get To Know Us</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Founded by Alexander Xhoja, a Berklee College of Music full-scholarship pianist and accomplished performer, Xhoja Music Agency is dedicated to nurturing musical talent and delivering exceptional live experiences.
              </p>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Alexander maintains an active online presence featuring professional recordings, live performance videos, an artist website, and engaging social media channels, showcasing his artistry and commitment to excellence.
              </p>
              <p className="text-gray-500 mb-6 leading-relaxed">
                We provide personalized music instruction tailored to each student's goals and book talented musicians for weddings, parties, corporate events, and other special occasions. Xhoja Music Agency is committed to connecting artists with opportunities and creating unforgettable events that truly matter.
              </p>
              <Link
                to="/team"
                className="inline-block px-8 py-3 border border-dark text-dark font-normal hover:bg-dark hover:text-white transition-colors"
              >
                MEET THE TEAM
              </Link>
            </div>
            <div>
              <img
                src="/alexander-xhoja.jpg"
                alt="Alexander Xhoja"
                className="shadow-lg w-full h-auto"
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
                src="/dj-performance.jpg"
                alt="Xhoja Music Agency DJ performing at a live event"
                className="shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">LIVE ENTERTAINMENT</p>
              <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-4 text-cream-light">From Jazz to DJ Sets</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you need an elegant jazz quartet for a corporate gala, a solo pianist for a wedding ceremony, or a DJ to keep the dance floor alive — Xhoja Music Agency delivers exceptional live entertainment tailored to your event.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our roster includes classically trained musicians, seasoned jazz performers, and professional DJs — all vetted and managed to ensure a flawless experience every time.
              </p>
              <Link
                to="/events"
                className="inline-block px-8 py-3 bg-gold text-white font-normal hover:bg-gold/90 transition-colors"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Setting the Stage Section */}
      <section className="bg-cream-mid py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">ELEGANT OCCASIONS</p>
              <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-4">Setting the Stage</h2>
              <div className="w-16 h-1 bg-gold mb-6"></div>
              <p className="text-gray-500 mb-6 leading-relaxed">
                From intimate rehearsal dinners to grand ballroom receptions, we bring the music that sets the perfect tone for your special day. Our musicians arrive early, set up professionally, and create an atmosphere your guests will remember.
              </p>
              <p className="text-gray-500 mb-8 leading-relaxed">
                Every detail matters — and we treat your event with the care and professionalism it deserves, ensuring a seamless musical experience from start to finish.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 border border-dark text-dark font-normal hover:bg-dark hover:text-white transition-colors"
              >
                PLAN YOUR EVENT
              </Link>
            </div>
            <div>
              <img
                src="/wedding-piano-setup.jpg"
                alt="Piano setup at an elegant wedding venue"
                className="shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">WHAT WE OFFER</p>
            <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-6">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 text-center border border-border">
              <Music size={40} className="mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-xl font-medium mb-3">Personalized Lessons</h3>
              <p className="text-gray-500 text-sm">Tailored music instruction for all skill levels, from beginners to advanced musicians.</p>
            </div>
            <div className="bg-white p-8 text-center border border-border">
              <Calendar size={40} className="mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-xl font-medium mb-3">Event Bookings</h3>
              <p className="text-gray-500 text-sm">Book talented musicians for weddings, parties, corporate events, and special occasions.</p>
            </div>
            <div className="bg-white p-8 text-center border border-border">
              <Users size={40} className="mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-xl font-medium mb-3">Expert Musicians</h3>
              <p className="text-gray-500 text-sm">Work with trained professionals from top music institutions including Berklee College of Music.</p>
            </div>
            <div className="bg-white p-8 text-center border border-border">
              <Star size={40} className="mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-xl font-medium mb-3">Exceptional Experiences</h3>
              <p className="text-gray-500 text-sm">Creating unforgettable musical moments that truly matter to you and your guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-cream-mid py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">TESTIMONIALS</p>
            <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px]">What People Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white border border-border p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed flex-1">
                "Thanks for an amazing performance for our wedding. Casandra and I totally loved it for our Henna ceremony. He was phenomenal and we'd be working with him again soon. Catch him before he gets famous — totally a rockstar."
              </p>
              <div>
                <p className="font-medium text-dark">Adhunik Anubhav</p>
                <p className="text-gold text-xs font-medium uppercase tracking-[2.4px] mt-1">WEDDING CEREMONY</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white border border-border p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed flex-1">
                "I recently booked a studio session with Xhoja Music Agency and had an amazing experience. In less than two weeks, the agency arranged everything — the studio, sound engineer and a talented string quartet. Everyone arrived on time and the studio was set up quickly and professionally. I highly recommend Xhoja Music Agency to any artist looking for a smooth and professional recording experience."
              </p>
              <div>
                <p className="font-medium text-dark">Petr Moguto</p>
                <p className="text-gold text-xs font-medium uppercase tracking-[2.4px] mt-1">STUDIO SESSION</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white border border-border p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
              <p className="text-gray-500 mb-6 leading-relaxed flex-1">
                "I hired Alex to play piano at our home for a family holiday. I cannot say enough about his exquisite music, enthusiasm, energy and kindness. Alex became part of our family for the evening. He also wrote an original song to honor my dad's memory because he sensed that we were all thinking of my dad on this special occasion. Alex has immense talent and can play any genre of music. You are a magnificent musician and a very special person."
              </p>
              <div>
                <p className="font-medium text-dark">Marjory Gundersheim</p>
                <p className="text-gold text-xs font-medium uppercase tracking-[2.4px] mt-1">PRIVATE HOLIDAY EVENT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-cream-mid py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">GET IN TOUCH</p>
          <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-12">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-border p-8 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                <Phone size={24} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Phone</h3>
              <a href="tel:+18574988487" className="text-gray-500 hover:text-gold transition-colors">(857) 498-8487</a>
            </div>
            <div className="bg-white border border-border p-8 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                <Mail size={24} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Email</h3>
              <a href="mailto:xhojamusicagency@gmail.com" className="text-gray-500 hover:text-gold transition-colors text-sm">xhojamusicagency@gmail.com</a>
            </div>
            <div className="bg-white border border-border p-8 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-gold" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-2">Location</h3>
              <p className="text-gray-500">Boston, Massachusetts</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-medium leading-[40px] tracking-[0.9px] mb-4">Ready to Create Musical Magic?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to learn an instrument, book musicians for your event, or collaborate with talented artists, we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gold text-white font-normal hover:bg-gold/90 transition-colors"
            >
              GET IN TOUCH
            </Link>
            <Link
              to="/events"
              className="px-8 py-3 border border-white text-white font-normal hover:bg-white hover:text-dark transition-colors"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
