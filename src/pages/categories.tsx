import { BackHomeButton } from '@/components/molecules/BackHomeButton'
import { VerticalBarChart } from '@/components/atoms/VerticalBarChart'
import { useAthletes } from '@/hooks/useAthletes'

export const Categories = () => {
  const { categories } = useAthletes()
  return (
    <section>
      <BackHomeButton />
      <header className="mb-20">

          <h1 className='text-2xl font-semibold'>ATIN categorias</h1>
          <p>Cantidad de atletas por categoria</p>
      </header>
      <div className="flex justify-center">
        <div className="max-w-[800px] max-h-[400px] w-svw h-svh ">
          <VerticalBarChart ChartData={categories} />

        </div>
      </div>
    </section>
  )
}
