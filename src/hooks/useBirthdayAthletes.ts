import { useAthletesStore } from "@/stores/athletes"
import { Athlete } from "@/types/athlete"
import { useMemo } from "react"

export const useBirthdayAthletes = () => {
    const athletes: Athlete[] = useAthletesStore(state => state.items)
    const birthdayAthletes = useMemo(() => athletes.filter(athlete => athlete.daysForBirth === 0), [athletes])


    const birthdayAthletesNames = useMemo(() => {
        return birthdayAthletes.map(athlete => {
            const [name] = athlete.firstName.split(' ')
            const [lastName] = athlete.lastName.split(' ')
            return `${name} ${lastName}`
        })
    }, [birthdayAthletes])

    const birthdayAthletesOfMonth = useMemo(() => {
        return athletes.filter(athlete => athlete.birthdayMonth && athlete.daysForBirth > 0)
    }, [athletes])

    return { birthdayAthletes, birthdayAthletesNames, birthdayAthletesOfMonth }
}
