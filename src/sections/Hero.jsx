import Link from "next/link"
import Image from "next/image"

/*variants={fadeIn("up", 0.4)}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.3 }}*/

const Hero = () => {
  return (
    <section id="hero-section" className="relative md:h-[580px]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-4 p-10 ">
            <div className="pt-6 pe-14">
                <h4 className="text-lg font-semibold text-gray-500 mb-5">GLASSES SHOPPING MADE EASY</h4>
                <h1 className="text-header leading-[1.15] font-medium mb-8">Find your <span className="text-primary-blue">perfect glasses</span> with the power of AI.</h1>
                <p className="text-lg mb-8">FaceFrame uses cutting-edge AI and facial recognition to recommend glasses tailored to your unique features. Built by a team of students across business and tech, we're redefining the way people shop for glasses.</p>

                <div className="flex gap-6">
                    <Link href="/">
                        <button className="primary-btn">
                            View Demo
                        </button>
                    </Link>
                    <Link href="#how-it-works-section">
                        <button className="secondary-btn">
                            Learn More
                        </button>
                    </Link>

                </div>

            </div>

            <div
            className="absolute w-[662px] h-full bottom-0 right-0 rounded-tl-[135px] overflow-hidden border-t-2 border-l-2 border-gray-300 hidden md:block"
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