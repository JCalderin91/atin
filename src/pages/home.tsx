import { TagIcon, UserIcon } from "@/components/atoms/icons"
import { MenuCard } from "@/components/atoms/MenuCard"
import { useAthletes } from "@/hooks/useAthletes"
import { useBirthdayAthletes } from "@/hooks/useBirthdayAthletes"
import { Link } from "react-router-dom"

const getDayOfDate = (date: string) => date.split('/')[0]

const BirthdayItem = ({ name, date, remaining }: { name: string, date: string, remaining: number | string }) => {
    return <li className="bg-slate-100 dark:bg-slate-800 p-2 rounded mb-2">
        <h5 className="text-lg">{name}</h5> 
        <span>Fecha: {getDayOfDate(date)}</span> - <span>Faltan {remaining} dias</span>
    </li>
}
export const Home = () => {
    const { athletes } = useAthletes()
    const { birthdayAthletesOfMonth } = useBirthdayAthletes()

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-svh">
            <section className="flex flex-col gap-1 md:gap-8 justify-center items-center md:items-start">
                <div>
                    <h3 className="text-2xl font-bold mb-4">Cumpleañeros del mes 🍰</h3>
                    <ul>
                        {
                            birthdayAthletesOfMonth.map(athlete => <BirthdayItem key={athlete.id} remaining={athlete.daysForBirth} name={`${athlete.firstName} ${athlete.lastName}`} date={athlete.bornDate} />)
                        }
                    </ul>
                </div>
            </section>

            <section className="flex gap-1 md:gap-4 items-center justify-center md:justify-end flex-wrap ">
                <Link to={`athletes`}>
                    <MenuCard iconComponent={(props) => <UserIcon {...props} />}>
                        {`Atletas: ${athletes.length}`}
                    </MenuCard>
                </Link>
                <Link to={`categories`}>
                    <MenuCard iconComponent={(props) => <TagIcon {...props} />}>Categorias</MenuCard>
                </Link>
            </section>
        </section>
    )
}
