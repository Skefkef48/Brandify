import Link from "next/link"
import Image from "next/image"

interface HeaderProps {
  onNavigate: {
    about: () => void;
    services: () => void;
    team: () => void;
    projects: () => void;
    pricing: () => void;
    contact: () => void;
  }
}

export function Header({ onNavigate }: HeaderProps) {
  const navLinkStyle = {
    color: '#D1DAEA',
    fontFamily: '"Azeret Mono"',
    fontSize: '16px',
    fontStyle: 'light',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '0.9px',
    cursor: 'pointer',
  };

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-sm border-b border-white/10" style={{ background: 'rgba(18, 18, 18, 0.5)' }}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src="/images/logo.png" alt="Brandify" width={190} height={190} />
        </div>
        <nav className="hidden md:flex gap-6">
          <button 
            onClick={onNavigate.about} 
            style={navLinkStyle} 
            className="hover:text-white"
          >
            About
          </button>
          <button 
            onClick={onNavigate.services} 
            style={navLinkStyle} 
            className="hover:text-white"
          >
            Services
          </button>
          <button 
            onClick={onNavigate.team} 
            style={navLinkStyle} 
            className="hover:text-white"
          >
            Our Team
          </button>
          <button 
            onClick={onNavigate.projects} 
            style={navLinkStyle} 
            className="hover:text-white"
          >
            Projects
          </button>
          <button 
            onClick={onNavigate.pricing} 
            style={navLinkStyle} 
            className="hover:text-white"
          >
            Prices
          </button>
          <button 
            onClick={onNavigate.contact} 
            style={navLinkStyle} 
            className="hover:text-white"
          >
            Contact Us
          </button>
        </nav>
      </div>
    </header>
  )
}

