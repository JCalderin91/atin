import { Belt } from "@/types/athlete"

export const BeltIndicator = ({ belt }: { belt: Belt }) => {
    const getBeltColor = (belt: Belt) => {
        switch (belt) {
            case 'Blanco':
                return 'border-white bg-white'
            case 'Blanco/Amarillo':
                return 'border-white bg-yellow-500'
            case 'Amarillo':
                return 'border-yellow-500 bg-yellow-500'
            case 'Amarillo/Verde':
                return 'border-yellow-500 bg-white'
            case 'Verde':
                return 'border-green-500 bg-green-500'
            case 'Verde/Azul':
                return 'border-green-500 bg-white'
            case 'Azul':
                return 'border-blue-500 bg-blue-500'
            case 'Azul/Rojo':
                return 'border-blue-500 bg-white'
            case 'Rojo':
                return 'border-red-500 bg-red-500'
            case 'Rojo/Negro':
                return 'border-red-500 bg-white'
            case 'Negro':
                return 'border-black bg-black'
            default:
                return 'border-slate-500 bg-slate-500'
        }
    }

    return (
        <div className={`border-t-2 border-b-2 h-[6px] absolute top-0 left-0 w-full ${getBeltColor(belt)}`} />
    )
}