'use client'
import Image from "next/image"
import { motion } from 'framer-motion'
import {fadeIn} from '../utils/animations'

const About = () => {
  return (
    <section id='about-section' className='relative about-gradient clip-about-shape overflow-hidden'>
        
        <div className="hidden lg:block w-[45%] pt-5 pb-5 ms-auto text-center">
            <h1 className="text-white text-xl font-bold items-center"><span className=" text-xl text-gray-600">90% </span> found their perfect fit in minutes</h1>
        </div>

       <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-20 md:pt-32 pb-26'>

            {/* Column 1 */}
            <div className="flex h-full items-center">
                <div className="relative w-full h-[18rem] md:w-[31.25rem] md:h-[28.125rem] rounded-[20px] border-[1px] border-gray-400 mb-8 md:mb-0 overflow-hidden">
                    <Image
                        src="/images/image1.jpeg"
                        alt="lady with glasses"
                        fill
                        style={{objectFit: 'cover'}}
                    />
                </div>

            </div>

            {/* Column 2 */}
            <div>
                <h4 className="font-semibold text-white text-base lg:text-lg mb-4" >ABOUT US</h4>
                <h1 className="text-[40px] lg:text-secondary-header leading-[1.2] text-white font-semibold">No measuring, no second-guessing </h1>
                <hr className="border-white border-2 w-[30%] my-8"/>
                <p className="text-base md:text-lg text-white mb-6">At FaceFrame, we believe choosing the right frames should be simple, accurate, and even fun. With our AI-powered virtual try-on tool, there’s no need for measurements or uncertainty — just a seamless way to find what fits you best.</p>

                 <div className="flex md:hidden"> 
                    <hr className="border-[0.5px] border-white my-20 w-full mx-auto "/>

                    <Image
                    src="/logo.svg"
                    alt="white logo"
                    height={90}
                    width={90}
                    className="px-3"/>

                    <hr className="border-[0.5px] border-white my-20 w-full mx-auto "/>
                 
                 </div>

               
                <div className="flex flex-col md:flex-row gap-6 mt-12">
                    <div className="mb-5 md:mb-0 text-left md:text-left">
                        <h3 className="text-4xl text-white font-semibold ">Vision</h3>
                        <hr className="border-[1px] border-white my-4 w-[60%] md:hidden"/>
                        <p className="text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit  consectetur est ac cursus.</p>

                    </div>

                    <div className="text-right md:text-left">
                        <h3 className="text-4xl text-white font-semibold mb-5">Mission</h3>
                        <hr className="border-[1px] border-white my-4 w-[60%] ms-auto md:hidden"/>
                        <p className="text-base text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit  consectetur est ac cursus.</p>

                    </div>
                </div>
            </div>

            
        </div>

        </div>

    </section>
  )
}

export default About