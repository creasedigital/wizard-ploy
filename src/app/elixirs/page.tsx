import ElixirsList from "./ElixirsList";
import SearchElixirs from "./SearchElixirs";

const Elixirs = () => {
	return (
		<div>
			{/* @ts-ignore */}
			<SearchElixirs />
			{/* @ts-ignore */}
			<ElixirsList />
		</div>
	);
};

export default Elixirs;
