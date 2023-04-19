import React, { useState } from "react";

import "./CostForm.css";

function CostForm(props) {
	const [inputName, setInputName] = useState("");
	const [inputAmount, setInputAmount] = useState("");
	const [inputDate, setInputDate] = useState("");

	// const [userInput, setUserInput] = useState({
	// 	name: "",
	// 	amount: "",
	// 	date: "",
	// });

	function nameChangeHandler(event) {
		setInputName(event.target.value);
		// setUserInput({
		//   ...userInput,
		// 	name: event.target.value,
		// });
		// setUserInput((previouseState) => {
		// 	return {
		// 		...previouseState,
		// 		name: event.target.value,
		// 	};
		// });
	}

	function amountChangeHandler(event) {
    setInputAmount(event.target.value);
  }

	function dateChangeHandler(event) {
    setInputDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    }
    props.onSaveCostData(costData);
    setInputName("");
    setInputAmount("");
    setInputDate("");
  }

	return (
		<form onSubmit={submitHandler}>
			<div className="new-cost__controls">
				<div className="new-cost__control">
					<label>Название</label>
					<input type="text" onChange={nameChangeHandler} value={inputName}/>
				</div>
				<div className="new-cost__control">
					<label>Сумма</label>
					<input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={inputAmount}/>
				</div>
				<div className="new-cost__control">
					<label>Дата</label>
					<input type="date" min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler} value={inputDate}/>
				</div>
				<div className="new-cost__actions">
					<button type="submit">Добавить</button>
				</div>
			</div>
		</form>
	);
}

export default CostForm;
