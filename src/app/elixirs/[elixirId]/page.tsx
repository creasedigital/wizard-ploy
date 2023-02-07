import { IElixirRootObject } from "typings";
import { notFound } from "next/navigation";

type PageProps = {
	params: {
		elixirId: string;
	};
};

const fetchElixirById = async (elixirId: string) => {
	const res = await fetch(
		`https://wizard-world-api.herokuapp.com/Elixirs/${elixirId}`,
	);

	const elixir: IElixirRootObject = await res.json();
	return elixir;
};

const ElixirPage = async ({ params: { elixirId } }: PageProps) => {
	const elixir = await fetchElixirById(elixirId);

	if (!elixir.id) return notFound();

	return (
		<div>
			<div>
				<h2>Elixir Name: {elixir.name}</h2>
				{elixir.effect && <p>Elixir Effect: {elixir.effect}</p>}
			</div>
			<p>👻 Your Favourite Elixirs Features</p>
			<div>
				{elixir.sideEffects && (
					<p>Elixir Side Effects: {elixir.sideEffects}</p>
				)}
				{elixir.characteristics && (
					<p>Elixir Characteristics: {elixir.characteristics}</p>
				)}
				{elixir.time && <p>Elixir Time: {elixir.time}</p>}
				<p>Difficulty: {elixir.difficulty}</p>
				{elixir.manufacturer && <p>{elixir.manufacturer}</p>}
			</div>
			<ul className="flex flex-col gap-4 m-2 ">
				{elixir.ingredients &&
					elixir.ingredients.map((ingredient) => (
						<li key={ingredient.id}>{ingredient.name}</li>
					))}
			</ul>
			<ul className="flex flex-col gap-4 m-2 ">
				{elixir.inventors &&
					elixir.inventors.map((inventor) => (
						<li key={inventor.id}>
							{`${
								inventor.firstName
									? `${
											inventor.firstName +
											" " +
											inventor.lastName
									  }`
									: inventor.lastName
							}`}
						</li>
					))}
			</ul>
		</div>
	);
};
export default ElixirPage;

export async function generateStaticParams() {
	const res = await fetch("https://wizard-world-api.herokuapp.com/Elixirs");
	const elixirs: IElixirRootObject[] = await res.json();
	return elixirs.map((elixir) => ({ elixirId: elixir.id.toString() }));
}
