import { useAthletesStore } from "@/stores/athletes"
import { Athlete } from "@/types/athlete"
import { useMemo } from "react"

function sortFunction<T>(a: T, b: T, key: keyof typeof a | keyof typeof b) {
    if (a[key] < b[key]) {
        return -1;
    }
    if (a[key] > b[key]) {
        return 1;
    }
    return 0;
}

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
        return athletes.filter(athlete => athlete.daysForBirth >= 0 && athlete.daysForBirth <= 30).sort((a, b) => sortFunction<Athlete>(a, b, 'daysForBirth'))
    }, [athletes])

    return { birthdayAthletes, birthdayAthletesNames, birthdayAthletesOfMonth }
}
