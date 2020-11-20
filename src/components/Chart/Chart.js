import React from "react";
 // javascipt plugin for creating charts
 import Chart from "chart.js";
 // react plugin used to create charts
 import { Line } from "react-chartjs-2";
 // reactstrap components
 import { Card, CardBody } from "reactstrap";
 // core components
 import {
   // global options for the charts
   chartOptions,
   // function that adds the global options to our charts
   parseOptions,
   chartExample3
 } from "variables/charts.js";

 class Charts extends React.Component {
   componentWillMount() {
     if (window.Chart) {
       parseOptions(Chart, chartOptions());
     }
   }
   render() {
     return (
       <>
         <Card className="bg-default">
           <CardBody>
             <div className="chart">
               <Line
                 data={chartExample3.data}
                 options={chartExample3.options}
                 id="chart-sales"
                 className="chart-canvas"
               />
             </div>
           </CardBody>
         </Card>
       </>
     );
   }
 }

 export default Charts;