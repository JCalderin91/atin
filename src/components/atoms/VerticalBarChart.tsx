/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryResume } from "@/hooks/useAthletes";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function VerticalBarChart({ ChartData }: { ChartData: CategoryResume[] }) {
  const options = {
    
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (data: { formattedValue: string; }) {
            return '  ' + data.formattedValue + ' Atletas';
          },
        },
      },
      datalabels: {
        color: "white",
        font: {
          weight: 'bold' as const,
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
        label: "Atletas por categoria",
        data: ChartData.map((item) => item.quantity),
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} options={options} />;
}