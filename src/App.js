import React, { useState } from "react";

import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL__COSTS = [
	{
		id: "c1",
		date: new Date(2023, 3, 5),
		description: "Fridge",
		amount: 88,
	},
	{
		id: "c2",
		date: new Date(2022, 3, 12),
		description: "Laundry machine",
		amount: 888,
	},
	{
		id: "c3",
		date: new Date(2021, 3, 12),
		description: "Dryer",
		amount: 99,
	},
];

function App() {

 

  useState(INITIAL__COSTS);

  const [costs,setCosts] = useState(INITIAL__COSTS)

	function addCostHandler(costData) {
		setCosts(prevCosts => {
      return [costData, ...prevCosts]
    })
	}

	return (
		<div>
			<NewCost onAddCost={addCostHandler}></NewCost>
			<Costs costs={costs}></Costs>
		</div>
	);
}

export default App;
