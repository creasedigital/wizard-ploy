import { ISpellsRootObject } from "typings";
import Link from "next/link";

const fetchSpells = async () => {
	const res = await fetch("https://wizard-world-api.herokuapp.com/Spells", {
		next: { revalidate: 3600 },
	});
	const spells: ISpellsRootObject[] = await res.json();
	return spells;
};

const SpellsList = async () => {
	const spells = await fetchSpells();

	return (
		<div>
			{spells.map((spell) => (
				<div key={spell.id}>
					<Link href={`/spells/${spell.id}`}>
						<div>
							<h2>Spell Name: {spell.name}</h2>
							{spell.effect && (
								<p>Spell Effect: {spell.effect}</p>
							)}
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default SpellsList;
