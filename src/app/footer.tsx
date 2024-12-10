import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#3B2A1A] text-[#E6D5C3] py-8 border-t-4 border-[#8B4513]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4A76A] font-serif">Sacred Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center hover:text-[#D4A76A] transition-colors">
                <i className="fas fa-drum mr-2"></i>
                <a href="tel:+1234567890">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center hover:text-[#D4A76A] transition-colors">
                <i className="fas fa-feather mr-2"></i>
                <a href="mailto:contact@example.com">contact@example.com</a>
              </li>
              <li className="flex items-center hover:text-[#D4A76A] transition-colors">
                <i className="fas fa-campground mr-2"></i>
                <div>
                  <p>Tribal Grounds</p>
                  <p>Sacred Valley, Land 12345</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4A76A] font-serif">Warrior Paths</h3>
            <ul className="space-y-2">
              <li className="hover:text-[#D4A76A] transition-colors">
                <Link href="/about">Our Tribe</Link>
              </li>
              <li className="hover:text-[#D4A76A] transition-colors">
                <Link href="/services">Sacred Services</Link>
              </li>
              <li className="hover:text-[#D4A76A] transition-colors">
                <Link href="/contact">Send Message</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#D4A76A] font-serif">Join Our Tribe</h3>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#D4A76A] transition-colors"
              >
                <i className="fas fa-crow text-2xl"></i>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#D4A76A] transition-colors"
              >
                <i className="fas fa-shield-alt text-2xl"></i>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#D4A76A] transition-colors"
              >
                <i className="fas fa-peace text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-[#8B4513]">
          <p className="text-[#D4A76A]">
            © {new Date().getFullYear()} Warrior Tribe. All rights preserved by the Ancient Spirits.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

