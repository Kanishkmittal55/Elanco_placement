import React from 'react';
import { useContext } from "react";
import theContext from "../../context/mainContext/theContext"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

function CostChart() {
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const {
    nameCostSet,
    AppSearchSet
  } = useContext(theContext);


const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Service Name vs Cost Analysis',
    },
  },
};

console.log("Chart Js Entry dkksmksmx:", nameCostSet)

const labels = AppSearchSet;

const data = {
  labels,
  datasets: [
    {
      label: 'Cost',
      data: nameCostSet,
      
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};



  return <Bar options={options} data={data} />;
}

export default CostChart