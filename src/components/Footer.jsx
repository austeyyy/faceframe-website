"use client";

import Image from "next/image";

const Footer = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="text-center border-t border-gray-400">
      <div className="py-10 text-left md:text-center">
        <a href="/">
        <div className="relative aspect-[819/304] w-full max-w-[190px] ms-8 mb-8 mt-4 md:mb-10 md:mx-auto">
          <Image
            src="/images/faceframe_logo2.png"
            alt="Footer Logo"
            fill
            className="object-contain"
          />
        </div>

        </a>

        <ul className="flex flex-col md:flex-row justify-start md:justify-center my-8">
          <li className="footer-item">
            <button
              onClick={() => scrollToSection("features-section")}
              className="footer-nav-link cursor-pointer"
            >
              Features
            </button>
          </li>
          <li className="footer-item">
            <button
              onClick={() => scrollToSection("about-section")}
              className="footer-nav-link cursor-pointer"
            >
              About
            </button>
          </li>
          <li className="footer-item">
            <button
              onClick={() => scrollToSection("how-it-works-section")}
              className="footer-nav-link cursor-pointer"
            >
              How It Works
            </button>
          </li>
          <li className="footer-item">
            <button
              onClick={() => scrollToSection("contact-section")}
              className="footer-nav-link cursor-pointer"
            >
              Contact
            </button>
          </li>
        </ul>

        <hr className="border-[0.5px] border-gray-400 mb-8 w-[80%] mx-auto" />

        <div className="text-[14px] md:text-base text-gray-600 text-center">
          Copyright &copy; FaceFrame. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
