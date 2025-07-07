import Card from '../components/Card'
import { ScanEye, TimerIcon, SearchCheck, Compass } from 'lucide-react'

const featureList = [
    {
      icon: ScanEye,
      name:"Feature",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit  consectetur est ac cursus.",
    },
    {
      icon: TimerIcon,
      name:"Feature",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit  consectetur est ac cursus.",
    },
    {
      icon: SearchCheck,
      name:"Feature",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit  consectetur est ac cursus.",
    },
    {
      icon: Compass,
      name:"Feature",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit  consectetur est ac cursus.",
    },
]

const Features = () => {
  return (
    <section id="features-section" className="pt-24 pb-56 features-gradient">
        <div className="container text-center">
            <h4 className="font-semibold text-dark text-base md:text-lg uppercase mb-4">FEATURES</h4>
            <h2 className="text-5xl lg:text-secondary-header lg:leading-[1.1] text-primary-blue font-semibold max-w-xl mx-auto mb-8"> Out with the old, in with the new.</h2>
            <p className="text-base md:text-lg text-gray-600 font-semibold max-w-4xl mx-auto">No more guessing what looks good. No more wasting time digging through endless racks of glasses. And no more settling for frames that don’t fit your face or your style.</p>


            <div className="flex flex-wrap flex-col md:flex-row gap-8 mt-20 justify-center">
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