
import searchBoy from '@/assets/search-boy.png'

export const EmptyList = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 p-10">
            <img src={searchBoy} className="w-56" alt="No results" />
            <p className='text-center font-semibold text-2xl'>No hay resultados para esta busqueda</p>
        </div>
    )
}
