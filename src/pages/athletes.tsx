import { EmptyList } from '@/components/atoms/EmptyList'
import { SearchIcon } from '@/components/atoms/icons'
import { AthleteCard } from '@/components/molecules/AthleteCard'
import { BackHomeButton } from '@/components/molecules/BackHomeButton'
import HappyBirthdayCard from '@/components/molecules/HappyBirthdayCard'
import { useAthletes } from '@/hooks/useAthletes'
import { useBirthdayAthletes } from '@/hooks/useBirthdayAthletes'
import { useState } from 'react'

export const Athletes = () => {
    const { athletes, isLoading } = useAthletes()
    const  {birthdayAthletesNames} = useBirthdayAthletes()

    const [search, setSearch] = useState('')

    const athletesFiltered = athletes.filter((athlete) => {
        const { firstName, lastName } = athlete
        const fullName = `${firstName} ${lastName}`
        return fullName.toLowerCase().includes(search.toLowerCase())
    })
    return (
        <>
            <header className='mb-6 '>
                
                <BackHomeButton />

                <section className='flex justify-between items-center flex-col md:flex-row gap-4 my-3'>
                    <div className='text-center md:text-left'>
                        <h1 className='text-2xl font-semibold'>ATIN atletas</h1>
                        <p>Hay {athletes.length} atletas</p>
                    </div>
                    <div className='w-full md:w-auto relative'>
                        <input type="text" placeholder='Buscar por nombre...' className='p-2 pr-9 border dark:border-slate-700 rounded-md w-full md:w-72 bg-slate-50 dark:bg-slate-800 outline-none' value={search} onChange={(e) => setSearch(e.target.value)} />
                        <SearchIcon className='absolute right-2 text-slate-400 top-1/2 -translate-y-1/2'  />
                    </div>
                </section>
            </header>

            {
                birthdayAthletesNames.length ? <HappyBirthdayCard name={birthdayAthletesNames} /> : null
            }


            {
                isLoading ? <p className='text-center'>Cargando...</p> : null
            }
            <ul className='flex gap-4 flex-wrap justify-center w-full'>

                {
                    athletesFiltered.map((athlete, index) => {
                        return <AthleteCard key={index} athlete={athlete} />
                    })
                }
            </ul>
            {
                search.length && athletesFiltered.length === 0 ? <EmptyList /> : null
            }
        </>
    )
}
