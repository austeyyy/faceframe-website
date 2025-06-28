import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <>
    <div className='w-full py-3'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div>
          <Link href="/">
            <Image src="/images/faceframe_logo.png"
                alt="FaceFrame Logo"
                width={240}
                height={80}
                priority/>
          </Link>
        </div>

        <ul className='md:flex md:items-center'>
          <li className='nav-item'><Link href="#features-section">Features</Link></li>
          <li className='nav-item'><Link href="#how-it-works-section">How It Works</Link></li>
          <li className='nav-item'><Link href=""><button className="primary-btn">
                              Contact Us
                            </button></Link></li>
        </ul>


      </div>

    </div>
    </>
  )
}

export default Nav