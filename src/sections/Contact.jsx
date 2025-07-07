

const Contact = () => {
  return (
    <section id="contact-section" className="bg-[url('/images/image2.jpg')] bg-cover bg-center bg-no-repeat h-[625px] scroll-mt-8">
        <div className="container py-40">
          <div className="max-w-3xl">

          
            <h4 className="font-semibold text-white text-lg mb-4" >LETS WORK</h4>
            <h3 className="text-5xl leading-tight font-semibold text-white mb-8">Whether you're a retailer, innovator, or simply excited about personalized vision tech, we’d love to chat.</h3>
            <a href="mailto:test@gmail.com">
                <button className="cursor-pointer bg-white border-[1px] border-gray-400 text-lg h-[52px] md:w-auto px-12 rounded-[17px] font-semibold inline-flex items-center justify-center gap-2 hover:bg-neutral-200 hover:scale-105 transition-all duration-300">
                    Contact Us
                </button>
            </a>
          </div>
        
        </div>
    </section>
  )
}

export default Contact
