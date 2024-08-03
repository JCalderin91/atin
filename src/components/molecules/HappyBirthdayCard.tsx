
import banner from '@/assets/banner.png'
type Props = {
  name: string | string[]
}

const renderNames = (name: string | string[]) => {
  if (typeof name === 'string') {
    return name
  } else {
    return name.join(' y ')
  }
}

export default function HappyBirthdayCard({ name }: Props) {

  return (
    <div className="min-h-[150px] md:min-h-[250px] font-honk text-center font-bold py-8 relative my-8">
      <img src={banner} alt="" className='absolute top-0 left-0 w-full h-full z-0 opacity-50' />
      <div className="z-10 relative flex justify-center items-center flex-col">
        <span className="text-3xl md:text-4xl xl:text-5xl">Feliz cumpleaños</span>
        <div className="max-w-[600px]">
          <span className="text-4xl md:text-5xl xl:text-7xl">{renderNames(name)}</span>
        </div>
      </div>
    </div>
  )
}
