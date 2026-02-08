import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src="/xhoja-logo.png" alt="Xhoja Music Agency" className="h-8 w-8 object-contain brightness-0 invert" />
              <h4 className="font-serif text-lg font-medium">Xhoja Music Agency</h4>
            </div>
            <p className="text-gray-300 text-sm mb-4">Nurturing musical talent and delivering exceptional live experiences since day one.</p>
            <a href="https://instagram.com/xhojamusicagency" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gold hover:text-white transition-colors">
              <Instagram size={20} />
              <span>@xhojamusicagency</span>
            </a>
          </div>

          {/* Middle Column */}
          <div className="md:text-center">
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/events" className="hover:text-gold transition-colors">Event Bookings</Link></li>
              <li><Link to="/lessons" className="hover:text-gold transition-colors">Music Lessons</Link></li>
              <li><Link to="/team" className="hover:text-gold transition-colors">Meet The Team</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:text-right">
            <h4 className="font-serif text-lg font-medium mb-4">Contact Info</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong>Phone:</strong> (857) 498-8487</p>
              <p><strong>Email:</strong> xhojamusicagency@gmail.com</p>
              <p><strong>Location:</strong> Boston, Massachusetts</p>
              <p className="mt-4"><strong>Hours:</strong> Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p>Sat: 10:00 AM - 4:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2026 Xhoja Music Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
