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

function NameChart() {
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
    nameCQSet,
    AppSearchSet
  } = useContext(theContext);


const options = {
  responsive: true,
  plugins: {
    scales: {
        x: {
          title: {
            color: 'red',
            display: true,
            text: 'Month'
          }
        }
    }, 
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Service Name vs Consumed Quantity Graph',
    },
  },
  
};

console.log("Chart Js Entry dkksmksmx:", nameCQSet)

const labels = AppSearchSet;

const data = {
  labels,
  datasets: [
    {
      label: 'Consumed Quantity',
      data: nameCQSet,
      
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};



  return <Bar options={options} data={data} />;
}

export default NameChart