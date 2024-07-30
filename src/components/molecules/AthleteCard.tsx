import { Athlete } from '@/types/athlete'
import { BeltIndicator } from '../atoms/BeltIndicator'

type Props = {
    athlete: Athlete
}
import maleIcon from '@/assets/male.png' 
import femaleIcon from '@/assets/female.png' 

export const AthleteCard = ({athlete}:Props) => {
    const genderImagePath =  athlete.gender === 'Masculino' ? maleIcon : femaleIcon

    const birthDateText = (days: number) => {
      if(days < 0) {
        return 'Ya cumplio'
      }
      if(days === 0) {
        return 'Es hoy, es hoy'
      }
      if(days === 1) {
        return 'Mañana es el dia'
      }
      if(days > 1) {
        return 'Dentro de ' + days + ' dias'
      }
    }
  return (
    <article className='bg-slate-100 dark:bg-slate-800 p-4 min-w-72 relative hover:scale-105 transition-transform duration-300 cursor-pointer rounded overflow-hidden pt-6 border dark:border-slate-900/65 border-slate-300/65 w-full md:w-auto'>
        <BeltIndicator belt={athlete.belt}/>
        <h4 className='font-semibold'>{athlete.firstName}</h4>
        <h5 className='text-sm'>{athlete.lastName}</h5>
        <div className='h-[1px] bg-slate-600 my-3'></div>
        <section className='flex justify-between text-xs'>
            <span>Cedula:</span>
            <span>{athlete.id}</span>
        </section>
        <section className='flex justify-between text-xs'>
            <span>Fecha de nacimiento:</span>
            <span>{athlete.bornDate}</span>
        </section>
        <section className='flex justify-between text-xs'>
            <span>Edad:</span>
            <span>{athlete.age} años</span>
        </section>
        <section className='flex justify-between text-xs'>
            <span>Proximo cumpleaños:</span>
            <span>{birthDateText(athlete.daysForBirth)}</span>
        </section>
        <img className='absolute top-3 right-1' src={genderImagePath} alt="male" width={16} height={16} />
    </article>
  )
}