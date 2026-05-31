import { Link } from 'react-router-dom';
import { Music, Calendar, Users, Star, Phone, Mail, MapPin } from 'lucide-react';
import usePageTitle from '../hooks/usePageTitle';
import ReviewsCarousel from '../components/ReviewsCarousel';

export default function Home() {
  usePageTitle(
    undefined,
    'XMA (Xhoja Music Agency) — Boston\'s premier music agency. Hire live musicians for weddings, corporate events, and private parties — from jazz trios to string quartets to DJs. Founded by Berklee pianist Alexander Xhoja.'
  );
  return (
    <div>
      {/* Hero Section — Cinematic Video. Capped on mobile so content stays within reach on short viewports. */}
      <section className="relative h-[88vh] min-h-[560px] max-h-[820px] sm:h-screen sm:max-h-none flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-piano-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-piano.mp4" type="video/mp4" />
        </video>

        {/* Layered overlay: dark gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/50 to-dark/80" />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-[4px] text-xs mb-6 opacity-90">
            Boston · Los Angeles
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl md:text-[90px] font-light leading-[1.0] tracking-[1px] mb-6">
            Xhoja Music<br />Agency
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <p className="text-white/75 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed font-light">
            World-class musicians for your most unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/ensembles"
              className="px-10 py-4 bg-gold text-dark font-normal tracking-[2px] uppercase text-sm hover:bg-gold/90 transition-colors duration-300"
            >
              Book an Event
            </Link>
            <Link
              to="/lessons"
              className="px-10 py-4 border border-white/50 text-white font-normal tracking-[2px] uppercase text-sm hover:bg-white/10 hover:border-white transition-colors duration-300"
            >
              Music Lessons
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
          <span className="text-[10px] uppercase tracking-[3px]">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* Two Coasts Section — bi-coastal positioning.
          Typography-driven (no imagery) by design: the LA presence is new and
          "by appointment," so we lean on refined editorial layout rather than
          forced photography. Equal-weight columns with a gold vertical divider
          on desktop create a clean visual split. */}
      <section className="bg-cream py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-14 md:mb-20">
            <p className="text-gold uppercase tracking-[4px] text-[11px] mb-3 font-medium">
              Two Coasts · One Standard
            </p>
            <div className="w-12 h-px bg-gold mx-auto mb-5"></div>
            <h2 className="font-serif text-[32px] sm:text-[42px] md:text-[52px] font-light leading-[1.1] tracking-[0.5px] text-dark mb-5">
              From Boston to Los Angeles.
            </h2>
            <p className="font-serif italic text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-[1.7]">
              A vetted roster, curated taste, and a single point of contact — wherever your event takes us.
            </p>
          </div>

          {/* Two columns: BOSTON | LOS ANGELES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-0 max-w-5xl mx-auto">
            {/* BOSTON */}
            <div className="text-center md:text-left md:border-r md:border-gold/25 md:pr-12 lg:pr-16">
              <div className="text-gold font-serif italic text-3xl mb-3">01</div>
              <div className="w-10 h-px bg-gold mb-5 mx-auto md:mx-0"></div>
              <p className="text-[11px] tracking-[4px] uppercase text-dark/60 mb-3 font-medium">Headquarters</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-light leading-[1.05] tracking-[0.5px] text-dark mb-5">
                Boston
              </h3>
              <p className="font-serif italic text-[15px] md:text-[16px] text-gray-600 leading-[1.75] mb-7 md:max-w-md">
                New England's curated music agency. A vetted roster of 200+ contractors, trusted by the region's leading planners, hotels, and venues.
              </p>
              <Link
                to="/ensembles"
                className="inline-flex items-center gap-3 text-[10px] tracking-[3.5px] uppercase text-dark border-b border-gold pb-1.5 font-medium hover:text-gold transition-colors"
              >
                Explore Boston Bookings
                <span>→</span>
              </Link>
            </div>

            {/* LOS ANGELES */}
            <div className="text-center md:text-left md:pl-12 lg:pl-16">
              <div className="text-gold font-serif italic text-3xl mb-3">02</div>
              <div className="w-10 h-px bg-gold mb-5 mx-auto md:mx-0"></div>
              <p className="text-[11px] tracking-[4px] uppercase text-dark/60 mb-3 font-medium">By Appointment</p>
              <h3 className="font-serif text-[28px] md:text-[36px] font-light leading-[1.05] tracking-[0.5px] text-dark mb-5">
                Los Angeles
              </h3>
              <p className="font-serif italic text-[15px] md:text-[16px] text-gray-600 leading-[1.75] mb-7 md:max-w-md">
                A curated West Coast roster led by founder Alexander Xhoja — refined live music for Los Angeles's most discerning events. Booked by appointment.
              </p>
              <Link
                to="/los-angeles"
                className="inline-flex items-center gap-3 text-[10px] tracking-[3.5px] uppercase text-dark border-b border-gold pb-1.5 font-medium hover:text-gold transition-colors"
              >
                Explore Los Angeles
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Get To Know Us Section - Alexander's Bio */}
      <section id="alexanders-bio" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">OUR MUSIC JOURNEY BEGINS</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px] mb-4">Get To Know Us</h2>
              <h3 className="sr-only">Alexander's Bio</h3>
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
                src="/alexander-xhoja-recital.jpg"
                alt="Alexander Xhoja"
                className="shadow-xl w-full h-auto aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel />

      {/* From Jazz to DJ Sets Section - Video Background */}
      <section id="live-entertainment" className="relative overflow-hidden" style={{ minHeight: '85vh' }}>
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-105"
        >
          <source src="/dj-video.mp4" type="video/mp4" />
        </video>
        {/* Luxury Gradient Overlay */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.8) 100%)' }}></div>
        {/* Top Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center" style={{ minHeight: '85vh' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gold uppercase tracking-[4px] text-xs sm:text-sm mb-4 font-light">LIVE ENTERTAINMENT</p>
            <div className="w-12 h-[1px] bg-gold/60 mx-auto mb-6"></div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl font-light leading-[1.05] tracking-[2px] mb-6 text-white">From Jazz To DJ Sets</h2>
            <div className="w-20 h-[1px] bg-gold mx-auto mb-8"></div>
            <p className="text-white/80 mb-4 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base font-light tracking-wide">
              Whether you need an elegant jazz quartet for a corporate gala, a solo pianist for a wedding ceremony, or a DJ to keep the dance floor alive — Xhoja Music Agency delivers exceptional live entertainment tailored to your event.
            </p>
            <p className="text-white/70 mb-10 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base font-light tracking-wide">
              Our roster includes classically trained musicians, seasoned jazz performers, and professional DJs — all vetted and managed to ensure a flawless experience every time.
            </p>
            <Link
              to="/events"
              className="inline-block px-12 py-4 border border-gold text-gold text-xs sm:text-sm font-light tracking-[3px] uppercase hover:bg-gold hover:text-white transition-all duration-500"
            >
              REQUEST A QUOTE
            </Link>
          </div>
        </div>
        {/* Bottom Gold Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
      </section>

      {/* Setting the Stage Section */}
      <section className="bg-cream-mid py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">ELEGANT OCCASIONS</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px] mb-4">Setting The Stage</h2>
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
      <section id="services" className="bg-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">WHAT WE OFFER</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px] mb-6">Our Services</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="bg-white p-5 sm:p-8 text-center border border-border">
              <Music size={40} className="mx-auto mb-4 text-gold" />
              <h3 className="font-serif text-base sm:text-xl font-medium mb-2 sm:mb-3">Personalized Lessons</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Tailored music instruction for all skill levels, from beginners to advanced musicians.</p>
            </div>
            <div className="bg-white p-5 sm:p-8 text-center border border-border">
              <Calendar size={40} className="mx-auto mb-3 sm:mb-4 text-gold" />
              <h3 className="font-serif text-base sm:text-xl font-medium mb-2 sm:mb-3">Event Bookings</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Book talented musicians for weddings, parties, corporate events, and special occasions.</p>
            </div>
            <div className="bg-white p-5 sm:p-8 text-center border border-border">
              <Users size={40} className="mx-auto mb-3 sm:mb-4 text-gold" />
              <h3 className="font-serif text-base sm:text-xl font-medium mb-2 sm:mb-3">Expert Musicians</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Work with trained professionals from top music institutions including Berklee College of Music.</p>
            </div>
            <div className="bg-white p-5 sm:p-8 text-center border border-border">
              <Star size={40} className="mx-auto mb-3 sm:mb-4 text-gold" />
              <h3 className="font-serif text-base sm:text-xl font-medium mb-2 sm:mb-3">Exceptional Experiences</h3>
              <p className="text-gray-500 text-xs sm:text-sm">Creating unforgettable musical moments that truly matter to you and your guests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold uppercase tracking-[2.4px] text-xs mb-2">GET IN TOUCH</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px] mb-8 sm:mb-12">Contact Us</h2>
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
          <h2 className="font-serif text-3xl sm:text-4xl font-medium leading-[1.1] tracking-[0.9px] mb-4">Ready To Create Musical Magic?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to learn an instrument, book musicians for your event, or collaborate with talented artists, we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-gold text-dark font-normal hover:bg-gold/90 transition-colors"
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
