import Image from "next/image"
import Link from "next/link"


const Footer = () => {
  return (
    <footer className='text-center'>
      <div className="py-10">
        <Image
            src="/images/favi.png"
            alt="Footer Logo"
            height={66}
            width={64}
            className="mx-auto"
          />

          <ul className='flex justify-center my-10'>
            <li className='footer-item'><Link href="#features-section" className="footer-nav-link">Features</Link></li>
            <li className='footer-item'><Link href="#how-it-works-section" className="footer-nav-link">How It Works</Link></li>
            <li className='footer-item'><Link href="#contact-section" className="footer-nav-link">Contact</Link></li>
          </ul>

          <hr className="border-[0.5px] border-gray-400 mb-8 w-[80%] mx-auto"/>

          <div className="text-gray-600 text-center">
            Copyright &copy; FaceFrame. All rights reserved.
          </div>

      </div>
        
    </footer>
  )
}

export default Footer