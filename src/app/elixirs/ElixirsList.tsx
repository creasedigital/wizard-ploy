import { IElixirRootObject } from "typings";
import Link from "next/link";

const fetchElixirs = async () => {
	const res = await fetch("https://wizard-world-api.herokuapp.com/Elixirs", {
		next: { revalidate: 3600 },
	});
	const elixirs: IElixirRootObject[] = await res.json();
	return elixirs;
};

const ElixirsList = async () => {
	const elixirs = await fetchElixirs();
	return (
		<div>
			{elixirs.map((elixir) => (
				<div key={elixir.id}>
					<Link href={`/elixirs/${elixir.id}`}>
						<div>
							<h2>Elixir Name: {elixir.name}</h2>
							{elixir.effect && (
								<p>Elixir Effect: {elixir.effect}</p>
							)}
						</div>
					</Link>
				</div>
			))}
		</div>
	);
};

export default ElixirsList;
