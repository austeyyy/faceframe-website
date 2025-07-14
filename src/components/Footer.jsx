import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className='text-center border-t border-gray-400'>
      <div className="py-10 text-left md:text-center">
        <Link href="/">
          <Image
              src="/images/favi.png"
              alt="Footer Logo"
              height={66}
              width={64}
              className="mx-auto hidden md:block"
            />
            <Image
              src="/images/faceframe_logo2.png"
              alt="Footer Logo"
              height={225}
              width={225}
              className=" ps-8 md:hidden"
            />
        </Link>
        

          <ul className='flex flex-col md:flex-row justify-start md:justify-center my-10'>
            <li className='footer-item'><Link href="#features-section" className="footer-nav-link">Features</Link></li>
            <li className='footer-item'><Link href="#about-section" className="footer-nav-link">About</Link></li>
            <li className='footer-item'><Link href="#how-it-works-section" className="footer-nav-link">How It Works</Link></li>
            <li className='footer-item'><Link href="#contact-section" className="footer-nav-link">Contact</Link></li>
          </ul>

          <hr className="border-[0.5px] border-gray-400 mb-8 w-[80%] mx-auto"/>

          <div className="text-[14px] md:text-base text-gray-600 text-center">
            Copyright &copy; FaceFrame. All rights reserved.
          </div>

      </div>
        
    </footer>
  )
}

export default Footer