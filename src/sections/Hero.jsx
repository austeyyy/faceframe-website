import Link from "next/link"
import Image from "next/image"

const Hero = () => {
  return (
    <section id="hero-section" className="relative md:h-auto lg:h-[calc(100vh-190px)] 2xl:h-[700px]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 sm:px-10 py-12 md:py-16">
        
        {/* Left Side Text */}
        <div className="z-10 text-center md:text-left max-w-full md:max-w-lg lg:max-w-full pt-4 sm:pt-6 md:pt-8 lg:pt-0 2xl:pe-[4rem]">
          <h4 className="text-base lg:text-lg 2xl:text-xl font-semibold text-gray-500 mb-5 md:mb-5">
            GLASSES SHOPPING MADE EASY
          </h4>

          <h1 className="capitalize text-[45px] font-semibold md:text-5xl lg:text-[52px] xl:text-header 2xl:text-7xl leading-tight md:font-medium mb-6 md:mb-8">
            Find your <br className="block lg:hidden"/> <span className="text-primary-blue font-semibold md:font-medium">perfect glasses</span> with the power of AI.
          </h1>

          <p className="text-lg lg:text-base xl:text-lg 2xl:text-xl text-gray-700 mb-6 md:mb-8">
            FaceFrame uses cutting-edge AI and facial recognition to recommend glasses tailored to your unique features. <span className="hidden lg:block">Built by a team of students across business and tech, we're redefining the way people shop for glasses.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link href="/">
              <button className="primary-btn w-full sm:w-auto">View Demo</button>
            </Link>
            <Link href="#how-it-works-section">
              <button className="secondary-btn w-full sm:w-auto">Learn More</button>
            </Link>
          </div>
        </div>

        {/* Right Side Image (unchanged, only on lg+) */}
        <div
          className="md:relative md:w-[31.25rem] md:h-[28.125rem] lg:absolute lg:w-[47%] lg:h-full lg:bottom-0 lg:right-0 lg:rounded-tl-[135px] overflow-hidden lg:border-t-2 lg:border-l-2 border-gray-300 hidden md:block"
        >
          <Image
            src="/images/heroimg.jpeg"
            alt="Hero Image"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
