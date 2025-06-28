
const Card = ({icon: Icon, name, desc}) => {
  return (
    <div className='card bg-white border border-gray-300 rounded-[20px] max-w-[18rem] h-auto hover:scale-105 transition duration-300'>
      <div className='p-10'>
        <Icon className="text-secondary-blue size-14 mx-auto mb-6"/>

        <h3 className="text-xl font-medium mb-2">{name}</h3>
        <p className="text-lg leading-[1.45]">{desc}</p>

      </div>

    </div>
  )
}

export default Card