import CostItem from "./CostItem";
import "./CostList.css";

function CostList(props) {
	if (props.costs.length === 0) {
		return <h2 className="cost-list__fallback">В этом году расходов нет</h2>;
	}

	return (
		<ul className="cost-list">
			{props.costs.map(({ date, description, amount, id }) => (
				<CostItem key={id} date={date} description={description} amount={amount} />
			))}
		</ul>
	);
}

export default CostList;
