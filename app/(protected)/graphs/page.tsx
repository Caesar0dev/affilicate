"use client";

import { currentUser } from "@/lib/auth";
import Chart from "chart.js";

const Graphs = async () => {
  const user = await currentUser();

  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
      type: "line", // Change to the desired chart type (e.g., 'bar', 'doughnut', etc.)
      data: {
        labels: data.labels,
        datasets: [
          {
            label: "Referral Earnings",
            data: data.values,
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 2,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: "Month"
            }
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Earnings"
            }
          }
        }
      }
    });
  }, [data]);

  return (
    <div className="space-y-10 w-full py-8 px-4 md:px-6">
      <div className="text-2xl font-bold">Graphs</div>

      <div>
        <div>Earnings</div>

        <div>
          <canvas id="myChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
  );
};

export default Graphs;
