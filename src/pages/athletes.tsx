import { AthleteCard } from '@/components/molecules/AthleteCard'
import { BackHomeButton } from '@/components/molecules/BackHomeButton'
import { useAthletes } from '@/hooks/useAthletes'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Athletes = () => {
    const { athletes, isLoading } = useAthletes()

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
                    <div className='w-full md:w-auto'>
                        <input type="text" placeholder='Buscar...' className='p-2 border dark:border-slate-700 rounded-md w-full md:w-72 dark:bg-slate-800' value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </section>
            </header>
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
                search.length && athletesFiltered.length === 0 ? <p className='text-center'>No hay resultados para esta busqueda</p> : null
            }
        </>
    )
}
