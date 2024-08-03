export interface Athlete {
    firstName: string
    lastName: string
    id: number
    bornDate: string
    age: number
    gender: "Masculino" | "Femenino"
    address: string
    email: string
    phone: string
    belt: Belt
    category: string
    daysForBirth: number
    birthdayMonth: boolean
}


export type Belt = "Blanco" |
    "Blanco/Amarillo" |
    "Amarillo" |
    "Amarillo/Verde" |
    "Verde" |
    "Verde/Azul" |
    "Azul" |
    "Azul/Rojo" |
    "Rojo" |
    "Rojo/Negro" |
    "Negro" 