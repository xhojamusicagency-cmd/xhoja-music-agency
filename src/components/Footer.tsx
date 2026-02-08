import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src="/xhoja-logo.png" alt="Xhoja Music Agency" className="h-10 w-10 object-contain brightness-0 invert" />
              <span className="font-serif text-xl font-medium">Xhoja Music Agency</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Nurturing musical talent and delivering exceptional live experiences since day one.</p>
            <a href="https://instagram.com/xhojamusicagency" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-gray-400 hover:text-gold transition-colors text-sm">
              <Instagram size={18} />
              <span>@xhojamusicagency</span>
            </a>
          </div>

          {/* Quick Links Column */}
          <div className="md:pl-12">
            <h4 className="font-serif text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/events" className="hover:text-gold transition-colors">Event Bookings</Link></li>
              <li><Link to="/lessons" className="hover:text-gold transition-colors">Music Lessons</Link></li>
              <li><Link to="/team" className="hover:text-gold transition-colors">Meet The Team</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>(857) 498-8487</li>
              <li>xhojamusicagency@gmail.com</li>
              <li>Boston, Massachusetts</li>
              <li className="pt-2">
                <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                <p className="mt-1">Sat: 10:00 AM - 4:00 PM</p>
                <p className="mt-1">Sun: Closed</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 pt-8 text-center text-sm text-gray-500">
          <p>&copy; 2026 Xhoja Music Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
