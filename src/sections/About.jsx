'use client'
import Image from "next/image"
import { motion } from 'framer-motion'
import {fadeIn} from '../utils/animations'

const About = () => {
  return (
    <section id='about-section' className='relative about-gradient clip-about-shape overflow-hidden'>
        
        <div className="hidden md:block w-[45%] pt-5 pb-5 ms-auto text-center">
            <h1 className="text-white text-xl font-bold items-center"><span className=" text-xl text-gray-600">90% </span> found their perfect fit in minutes</h1>
        </div>

       <div className="container">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-40 pb-26'>

            {/* Column 1 */}
            <div className="flex h-full items-center">
                <div className="relative w-[31.25rem] h-[28.125rem] rounded-[20px] border-[1px] border-gray-400 overflow-hidden">
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
                <h4 className="font-semibold text-white text-lg mb-4" >ABOUT US</h4>
                <h1 className="text-secondary-header leading-[1.2] text-white font-semibold">No measuring, no second-guessing </h1>
                <hr className="border-white border-2 w-[30%] my-8"/>
                <p className="text-lg text-white mb-6">At FaceFrame, we believe choosing the right frames should be simple, accurate, and even fun. With our AI-powered virtual try-on tool, there’s no need for measurements or uncertainty — just a seamless way to find what fits you best.</p>

               
                <div className="flex gap-6 mt-12">
                    <div>
                        <h3 className="text-3xl text-white font-semibold mb-5">Vision</h3>
                        <p className="text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit  consectetur est ac cursus.</p>

                    </div>

                    <div>
                        <h3 className="text-3xl text-white font-semibold mb-5">Mission</h3>
                        <p className="text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit  consectetur est ac cursus.</p>

                    </div>
                </div>
            </div>

            
        </div>

        </div>

    </section>
  )
}

export default About