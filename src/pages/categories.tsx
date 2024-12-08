import { BackHomeButton } from "@/components/molecules/BackHomeButton";
import { VerticalBarChart } from "@/components/atoms/VerticalBarChart";
import { useAthletes } from "@/hooks/useAthletes";
import { PieChart } from "@/components/atoms/PieChart";

export const Categories = () => {
  const { categories, belts, genders, ages } = useAthletes();
  return (
    <section>
      <BackHomeButton />
      <header className="mb-4 mt-4">
        <h1 className="text-2xl font-semibold">ATIN gráficas y reportes</h1>
      </header>

      <div className="flex flex-col gap-10 px-4">
        <section>
          <header className="mb-20">
            <h3 className="text-lg">
              &#9658; Cantidad de atletas por categoría
            </h3>
          </header>
          <div className="flex justify-center">
            <div className="max-w-[800px] max-h-[400px] w-svw h-svh ">
              <VerticalBarChart ChartData={categories} />
            </div>
          </div>
        </section>

        <section>
          <header className="mb-20">
            <h3 className="text-lg">
              &#9658; Cantidad de atletas por cinturón
            </h3>
          </header>
          <div className="flex justify-center">
            <div className="max-w-[800px] max-h-[400px] w-svw h-svh ">
              <VerticalBarChart ChartData={belts} />
            </div>
          </div>
        </section>

        <section>
          <header className="mb-20">
            <h3 className="text-lg">
              &#9658; Cantidad de atletas por género y edad
            </h3>
          </header>
          <div className="flex flex-wrap justify-around gap-8">
            <div className="max-w-[800px] max-h-[400px]  flex justify-center ">
              <PieChart ChartData={genders} />
            </div>
            <div className="max-w-[800px] max-h-[400px]  flex justify-center ">
              <PieChart ChartData={ages} />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};
