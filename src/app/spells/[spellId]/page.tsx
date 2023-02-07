import { ISpellsRootObject } from "typings";
import { notFound } from "next/navigation";

type PageProps = {
	params: {
		spellId: string;
	};
};

const fetchSpellById = async (spellId: string) => {
	const res = await fetch(
		`https://wizard-world-api.herokuapp.com/Spells/${spellId}`,
	);

	const spell: ISpellsRootObject = await res.json();
	return spell;
};

const SpellPage = async ({ params: { spellId } }: PageProps) => {
	const spell = await fetchSpellById(spellId);

	if (!spell.id) return notFound();

	return (
		<div>
			{/* <h2>
				<span>This is the page of the weakset wizzard: </span>
				<span>
					{`${
						spell.firstName
							? `${
									spell.firstName.toUpperCase() +
									" " +
									spell.lastName.toUpperCase()
							  }`
							: spell.lastName.toUpperCase()
					}`}
				</span>
			</h2>
			<p>👻 Get Your Favourite Potions. Muhuhuhuahahaha!!! 👽</p>
			<ul className="flex flex-col gap-4 m-2 ">
				{spell.elixirs.map((elixir) => (
					<li key={elixir.id} className="py-4 bg-red-100">
						Elixir Name: {elixir.name}
					</li>
				))}
			</ul> */}
			<h2>Spell Name: {spell.name}</h2>
			{spell.effect && <p>Spell Effect: {spell.effect}</p>}
			<div>
				{spell.incantation && <p>Incantation: {spell.incantation}</p>}
				{spell.canBeVerbal && (
					<p>
						Spell canBeVerbal:{" "}
						{spell.canBeVerbal ? (
							<span>The spell can be chanted</span>
						) : (
							<span>The spell can't be chanted</span>
						)}
					</p>
				)}
				{spell.creator && <p>Spell Creator: {spell.creator}</p>}
				<p>Type: {spell.type}</p>
				<p>Light: {spell.light}</p>
			</div>
		</div>
	);
};
export default SpellPage;

export async function generateStaticParams() {
	const res = await fetch("https://wizard-world-api.herokuapp.com/Spells");
	const spells: ISpellsRootObject[] = await res.json();
	return spells.map((spell) => ({ spellId: spell.id.toString() }));
}
