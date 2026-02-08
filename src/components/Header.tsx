import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'HOME', href: '/' },
    { label: 'EVENT BOOKINGS', href: '/events' },
    { label: 'LESSONS', href: '/lessons' },
    { label: 'MEET THE TEAM', href: '/team' },
    { label: 'CONTACT', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream shadow-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/xhoja-logo.png" alt="Xhoja Music Agency" className="h-12 w-12 object-contain" />
          <span className="font-serif text-xl font-bold hidden sm:inline">Xhoja Music Agency</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium uppercase tracking-[2.1px] transition-colors ${
                location.pathname === link.href
                  ? 'text-gold'
                  : 'text-dark/80 hover:text-gold'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cream border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`block py-2 text-sm font-medium uppercase tracking-[2.1px] transition-colors ${
                  location.pathname === link.href
                    ? 'text-gold'
                    : 'text-dark/80 hover:text-gold'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
