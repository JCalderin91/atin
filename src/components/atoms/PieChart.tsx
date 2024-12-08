/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryResume } from "@/hooks/useAthletes";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(Tooltip, Legend, ArcElement);

export function PieChart({ ChartData }: { ChartData: CategoryResume[] }) {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (data: { formattedValue: string }) {
            return "  " + data.formattedValue + " Atletas";
          },
        },
      },
      datalabels: {
        color: "white",
        font: {
          weight: "bold" as const,
        },
      },
    },
  };
  // The following colors will be used sequentially for the chart bars
  const backgroundColors = ["#53D9D9", "#002B49", "#0067A0"];
  const data = {
    labels: ChartData.map((item) => item.label),
    datasets: [
      {
        label: "Atletas por categoría",
        data: ChartData.map((item) => item.quantity),
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} options={options} />;
}
