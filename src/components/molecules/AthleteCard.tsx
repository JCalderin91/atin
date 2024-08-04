import { Athlete } from '@/types/athlete'
import { BeltIndicator } from '../atoms/BeltIndicator'

type Props = {
  athlete: Athlete
}
import maleIcon from '@/assets/male.png'
import femaleIcon from '@/assets/female.png'

export const AthleteCard = ({ athlete }: Props) => {
  const genderImagePath = athlete.gender === 'Masculino' ? maleIcon : femaleIcon

  const birthDateText = (days: number) => {
    if (days < 0) {
      return 'Ya cumplio'
    }
    if (days === 0) {
      return 'Es hoy, es hoy'
    }
    if (days === 1) {
      return 'Mañana es el dia'
    }
    if (days > 1) {
      return 'Dentro de ' + days + ' dias'
    }
  }
  return (
    <article className='bg-slate-100 dark:bg-slate-800 min-w-72 relative hover:scale-105 transition-transform duration-300 cursor-pointer rounded overflow-hidden border dark:border-slate-900/65 border-slate-300/65 w-full md:w-auto'>
      <header className="px-4 py-2 bg-blue-600">
        <h4 className='font-semibold text-lg text-white'>{athlete.firstName}</h4>
        <h5 className='text-sm text-white'>{athlete.lastName}</h5>
      </header>
      <BeltIndicator belt={athlete.belt} />
      <section className='px-4 py-2'>
        <section className='flex justify-between text-xs'>
          <span>Cédula:</span>
          <span>{athlete.id !== 0 ? athlete.id : 'Sin cedula'}</span>
        </section>
        <section className='flex justify-between text-xs'>
          <span>Fecha de nacimiento:</span>
          <span>{athlete.bornDate ? athlete.bornDate : 'No registrado'}</span>
        </section>
        <section className='flex justify-between text-xs'>
          <span>Edad:</span>
          <span>{athlete.age ? `${athlete.age} años` : 'No registrado'}</span>
        </section>
        <section className='flex justify-between text-xs'>
          <span>Próximo cumpleaños:</span>
          <span>{athlete.age ? birthDateText(athlete.daysForBirth) : 'No registrado'}</span>
        </section>
      </section>
      <img className='absolute top-3 right-1' src={genderImagePath} alt="male" width={16} height={16} />
    </article>
  )
}