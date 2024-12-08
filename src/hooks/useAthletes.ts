import { getAthletes } from "@/services/google-sheets";
import { useAthletesStore } from "@/stores/athletes";
import { useEffect, useMemo, useState } from "react";

export type CategoryResume = {
  label: string;
  quantity: number;
};

export const useAthletes = () => {
  const [isLoading, setIsLoading] = useState(false);

  const athletes = useAthletesStore((state) => state.items);
  const setAthletes = useAthletesStore((state) => state.update);

  useEffect(() => {
    if (athletes.length) return;
    setIsLoading(true);
    getAthletes()
      .then((athletes) => setAthletes(athletes))
      .finally(() => setIsLoading(false));
  }, [athletes, setAthletes]);

  const categories: CategoryResume[] = useMemo(
    () => [
      {
        label: "Hasta 5 años",
        quantity: athletes.filter((athlete) => athlete.age <= 5).length,
      },
      {
        label: "De 6 a 7 años",
        quantity: athletes.filter(
          (athlete) => athlete.age >= 6 && athlete.age <= 7
        ).length,
      },
      {
        label: "De 8 a 9 años",
        quantity: athletes.filter(
          (athlete) => athlete.age >= 8 && athlete.age <= 9
        ).length,
      },
      {
        label: "De 10 a 11 años",
        quantity: athletes.filter(
          (athlete) => athlete.age >= 10 && athlete.age <= 11
        ).length,
      },
      {
        label: "De 12 a 13 años",
        quantity: athletes.filter(
          (athlete) => athlete.age >= 12 && athlete.age <= 13
        ).length,
      },
      {
        label: "De 14 a 15 años",
        quantity: athletes.filter(
          (athlete) => athlete.age >= 14 && athlete.age <= 15
        ).length,
      },
      {
        label: "De 16 a 17 años",
        quantity: athletes.filter(
          (athlete) => athlete.age >= 16 && athlete.age <= 17
        ).length,
      },
      {
        label: "Adultos",
        quantity: athletes.filter((athlete) => athlete.age >= 18).length,
      },
    ],
    [athletes]
  );

  const belts = useMemo(() => {
    const beltGroup = athletes.reduce(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (prev: Record<any, any>, curr) => {
        if (!prev[curr.belt])
          return {
            ...prev,
            [curr.belt]: 1,
          };

        return {
          ...prev,
          [curr.belt]: prev[curr.belt] + 1,
        };
      },
      {}
    );
    return Object.keys(beltGroup).map((beltKey) => ({
      label: beltKey,
      quantity: beltGroup[beltKey],
    }));
  }, [athletes]);

  const genders = [
    {
      label: "Masculino",
      quantity: athletes.filter((athlete) => athlete.gender == "Masculino")
        .length,
    },
    {
      label: "Famenino",
      quantity: athletes.filter((athlete) => athlete.gender == "Femenino")
        .length,
    },
  ];

  const ages = [
    {
      label: "Adultos",
      quantity: athletes.filter((athlete) => athlete.age >= 18).length,
    },
    {
      label: "Niños",
      quantity: athletes.filter((athlete) => athlete.age < 18).length,
    },
  ];

  return { athletes, isLoading, categories, belts, genders, ages };
};
