import { TagIcon, UserIcon } from "@/components/atoms/icons";
import { MenuCard } from "@/components/atoms/MenuCard";
import { useAthletes } from "@/hooks/useAthletes";
import { useBirthdayAthletes } from "@/hooks/useBirthdayAthletes";
import { Link } from "react-router-dom";

const getDayOfDate = (date: string) =>
  date.split("/")[0] + "/" + date.split("/")[1];

const BirthdayItem = ({
  name,
  date,
  remaining,
  age,
}: {
  name: string;
  date: string;
  remaining: number | string;
  age: number;
}) => {
  if (remaining === 0) {
    return (
      <li className="bg-slate-100 dark:bg-slate-800 p-2 rounded mb-2 text-center sm:text-left">
        <h5 className="text-2xl sm:text-lg font-semibold">{name}</h5>
        <span>Cumple hoy {age} años</span> -{" "}
        <span className="text-green-500">Feliz cumpleaños 🎉</span>
      </li>
    );
  }

  return (
    <li className="bg-slate-100 dark:bg-slate-800 p-2 rounded mb-2 text-center sm:text-left">
      <h5 className="text-2xl sm:text-lg font-semibold">{name}</h5>
      <span>
        <span className="hidden sm:inline">Fecha:</span> {getDayOfDate(date)}
      </span>{" "}
      -{" "}
      <span>
        Faltan {remaining} día{Number(remaining) > 1 ? "s" : ""} para que cumpla{" "}
        {age + 1} años
      </span>
    </li>
  );
};
export const Home = () => {
  const { athletes } = useAthletes();
  const { birthdayAthletesOfMonth } = useBirthdayAthletes();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-svh">
      <section className="flex flex-col gap-1 md:gap-8 justify-center items-center md:items-start">
        <div>
          <h3 className="text-2xl font-bold mb-5 text-center sm:text-left">
            Cumpleañeros de los próximos 30 días 🍰
          </h3>
          <ul className="flex flex-col gap-2 sm:gap-1">
            {birthdayAthletesOfMonth.length > 0 ? (
              birthdayAthletesOfMonth.map((athlete) => {
                const fullName = `${athlete.firstName} ${athlete.lastName}`;
                return (
                  <Link to={`atletas/?q=${fullName}`}>
                    <BirthdayItem
                      key={athlete.id}
                      remaining={athlete.daysForBirth}
                      name={fullName}
                      date={athlete.bornDate}
                      age={athlete.age}
                    />
                  </Link>
                );
              })
            ) : (
              <p>No hay cumpleaños este mes 😢</p>
            )}
          </ul>
        </div>
      </section>

      <section className="flex gap-2 md:gap-4 items-center justify-center md:justify-end flex-wrap ">
        <Link to={`atletas`}>
          <MenuCard iconComponent={(props) => <UserIcon {...props} />}>
            {`Atletas: ${athletes.length}`}
          </MenuCard>
        </Link>
        <Link to={`reportes`}>
          <MenuCard iconComponent={(props) => <TagIcon {...props} />}>
            Reportes
          </MenuCard>
        </Link>
      </section>
    </section>
  );
};
