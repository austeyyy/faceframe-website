import Link from "next/link"
import Image from "next/image"


const HowItWorks = () => {
  return (
    <section id="how-it-works-section" className="bg-[#F2F2F2] border-t border-t-gray-300">
        <div className="container py-40">

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/*Column 1*/}
            <div className="pe-10">
                  <h4 className="font-semibold  text-lg mb-4" >HOW IT WORKS</h4>
                  <h1 className="text-secondary-header leading-[1.2]  font-semibold">Finding frames just got easier</h1>
                  <hr className="border-secondary-blue border-2 w-[30%] my-8"/>
                  

                  <Link href="/">
                        <button className="!w-[90%] !h-[56px] hover:!scale-[1.02] primary-btn mb-10">
                            Find Nearby Store
                        </button>
                  </Link>

                  <h3 className="text-2xl font-medium mb-6">We’ve made finding your perfect pair simple. Here’s how it works:</h3>
              
              </div>

              {/*Column 2*/}
              <div className="relative">
                <div className="absolute -top-[800px] left-1/2 -translate-x-1/2 md:-right-32 md:-top-56">
                <div className="relative w-[24rem] h-[14rem] rounded-[10px] md:w-[35rem] md:h-[36rem] md:rounded-[20px] border-[1px] border-gray-300 overflow-hidden">
                      <Image
                          src="/images/image3.jpeg"
                          alt="lady with glasses"
                          fill
                          style={{objectFit: 'cover'}}
                      />
                  </div>
                </div>

              </div>

            
          </div>

          <div className="flex flex-col px-14 mt-28 gap-24">
              {/*Visit a Store*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 className="text-header leading-[1.2]  font-semibold">Visit a store</h1>
                    <hr className="border-gray-500 border-2 w-[30%] my-8"/>
                    <p className="text-lg mb-6">At FaceFrame, we believe choosing the right frames should be simple, accurate, and even fun. With our AI-powered virtual try-on tool, there’s no need for measurements or uncertainty — just a seamless way to find what fits you best.</p>
                  </div>

                  <div className="text-[300px] lg:text-[450px] justify-center font-semibold leading-none">01</div>


                  
                </div>

                <hr className="border-[0.5px] border-gray-400 mb-8 w-full mx-auto"/>

                {/*Scan your face*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-[300px] lg:text-[450px] justify-center font-semibold leading-none tracking-tighter">02</div>

                  <div>
                    <h1 className="text-header leading-[1.2]  font-semibold">Scan your face</h1>
                    <hr className="border-gray-500 border-2 w-[30%] my-8"/>
                    <p className="text-lg mb-6">Using advanced AI, FaceFrame scans your facial structure in seconds to understand your unique features. This helps us determine which frame shapes and sizes will complement your face best.</p>
                  </div>
                </div>

                <hr className="border-[0.5px] border-gray-400 mb-8 w-full mx-auto"/>

                {/*Find your face*/}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h1 className="text-header leading-[1.2]  font-semibold">Find your fit</h1>
                    <hr className="border-gray-500 border-2 w-[30%] my-8"/>
                    <p className="text-lg mb-6">Instantly receive frame recommendations tailored to your face shape, style preferences, and fit. Try them on virtually or in person, and walk out with glasses made just for you.</p>
                  </div>

                  <div className="text-[300px] lg:text-[450px] justify-center font-semibold leading-none">03</div>
                </div>

              </div>
           
        </div>
    </section>
  )
}

export default HowItWorks