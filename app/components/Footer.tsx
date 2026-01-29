import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="py-6 md:py-20 bg-[#2f4a93] text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://linkedin.com/in/tony-elizabeth" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
          <a href="https://twitter.com/tony_elizabeth" target="_blank" rel="noopener noreferrer"><FaTwitter size={24} /></a>
          <a href="https://instagram.com/tony_elizabeth" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
          <a href="https://facebook.com/tony.elizabeth" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
        </div>
        <p>&copy; 2026 Yemisi Samuel. All rights reserved.</p>
      </div>
    </footer>
  );
}