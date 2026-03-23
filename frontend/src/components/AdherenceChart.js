// import { Line } from "react-chartjs-2";

// export default function AdherenceChart({ score }) {
//   const data = {
//     labels: ["Start", "Mid", "Now"],
//     datasets: [
//       {
//         label: "Adherence Score",
//         data: [40, 60, score],
//         borderWidth: 2,
//       },
//     ],
//   };

//   return <Line data={data} />;
// }

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { Line } from "react-chartjs-2";

// ✅ REGISTER EVERYTHING (THIS FIXES YOUR ERROR)
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function AdherenceChart({ score }) {
  const data = {
    labels: ["Start", "Mid", "Now"],
    datasets: [
      {
        label: "Adherence Score",
        data: [40, 60, score],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.2)",
        tension: 0.4
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return <Line data={data} options={options} />;
}