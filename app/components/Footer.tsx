import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 md:py-20 bg-[#2f4a93] text-white text-center">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={24} />
          </Link>
          <Link
            href="https://instagram.com/officaloluwayemisi?utm_source=qr&igsh=MWs3dWdpNWhrdng5MA=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </Link>
          <Link
            href="https://web.facebook.com/profile.php?id=61550842841504"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </Link>
        </div>
        <p>&copy; 2026 Yemisi Samuel. All rights reserved.</p>
      </div>
    </footer>
  );
}
