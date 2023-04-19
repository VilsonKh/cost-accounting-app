import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

import "./Costs.css";
function Costs(props) {
	const [selectedYear, setSelectedYear] = useState("2023");

  console.log(props.costs)

	function yearChangeHandler(year) {
		setSelectedYear(year);
	}

	const filteredCosts = props.costs.filter((cost) => {
		return cost.date.getFullYear().toString() === selectedYear;
	});

  

	return (
		<div>
			<Card className="costs">
				<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostsDiagram costs={filteredCosts}></CostsDiagram>
        <CostList costs={filteredCosts}/>
			</Card>
		</div>
	);
}

export default Costs;
