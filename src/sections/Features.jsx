import Card from '../components/Card'
import { ScanEye, TimerIcon, SearchCheck, Compass } from 'lucide-react'

const featureList = [
    {
      icon: ScanEye,
      name:"Smart Face Scan",
      description:"Our machine learning technology scans and analyzes your face shape to personalize your eyewear experience.",
    },
    {
      icon: TimerIcon,
      name:"Curated Recommendations",
      description:"Get curated frame suggestions tailored to your face shape for the best fit and style.",
    },
    {
      icon: SearchCheck,
      name:"Style Preferences",
      description:"Explore frames by your favorite brands, colors, price points, and styles designed to match your preferences.",
    },
    {
      icon: Compass,
      name:"Shopping Cart",
      description:"Save eyewear to revisit later, so you can shop on your own time without losing your picks.",
    },
]

const Features = () => {
  return (
    <section id="features-section" className="py-16 md:pt-24 md:pb-56 features-gradient">
        <div className="container text-center lg:!px-0">
            <h4 className="reveal font-semibold text-dark text-base md:text-lg uppercase mb-4">FEATURES</h4>
            <h2 className="reveal delay-100 text-[43px] lg:text-secondary-header leading-[1.1] text-primary-blue font-semibold max-w-xl mx-auto mb-6"> Out with the old, in with the new.</h2>
            <hr className="reveal delay-100 md:hidden border-secondary-blue border-2 mx-auto md:mx-0 w-[30%] mb-8 md:mb-6" />
            <p className="reveal delay-200 text-base md:text-lg md:text-gray-600 md:font-semibold max-w-4xl mx-auto">No more guessing what looks good. No more wasting time digging through endless racks of glasses. And no more settling for frames that don’t fit your face or your style.</p>


            <div className="md:reveal delay-300 flex flex-wrap flex-col md:flex-row gap-8 mt-20 justify-center">
              {featureList.map((card,index) => (
                <Card
                  key={index}
                  icon={card.icon}
                  name={card.name}
                  desc={card.description}
                />
              ))}
            </div>

        </div>

    </section>
  )
}

export default Features