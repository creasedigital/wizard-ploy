import SpellsList from "./SpellsList";
import SearchSpells from "./SearchSpells";

const Spells = () => {
	return (
		<div>
			{/* @ts-ignore */}
			<SearchSpells />
			{/* @ts-ignore */}
			<SpellsList />
		</div>
	);
};

export default Spells;
