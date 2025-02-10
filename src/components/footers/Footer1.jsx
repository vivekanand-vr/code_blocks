import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" aria-label="Facebook" className="text-white hover:text-gray-300">
            <Facebook />
          </a>
          <a href="#" aria-label="Twitter" className="text-white hover:text-gray-300">
            <Twitter />
          </a>
          <a href="#" aria-label="Instagram" className="text-white hover:text-gray-300">
            <Instagram />
          </a>
          <a href="#" aria-label="YouTube" className="text-white hover:text-gray-300">
            <Youtube />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-white hover:text-gray-300">
            <Linkedin />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          Copyright 2025 © Your Company Name. All Rights Reserved.
        </p>
        <p className="text-xs text-gray-500 mt-2">
          The content and images used on this site are copyright protected and copyright vests with the respective owners. Unauthorized use is prohibited and punishable by law.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
