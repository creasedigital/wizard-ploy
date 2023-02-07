import Link from "next/link";
import { IWizardsRootObject } from "typings";

const fetchWizards = async () => {
	const res = await fetch("https://wizard-world-api.herokuapp.com/Wizards", {
		next: { revalidate: 3600 },
	});
	const wizards: IWizardsRootObject[] = await res.json();
	return wizards;
};

const WizardsList = async () => {
	const wizards = await fetchWizards();
	return (
		<div className="flex flex-col lg:flex-row rounded-lg overflow-hidden h-auto lg:h-32 border shadow-md">
			{wizards.map((wizard) => (
				<p key={wizard.id}>
					<Link href={`/wizards/${wizard.id}`}>
						Wizard Order {wizard.lastName}:
					</Link>
					{wizard.elixirs.length &&
						wizard.elixirs.map((elixir) => (
							<div key={elixir.id}>{elixir.name}</div>
						))}
				</p>
			))}
		</div>
	);
};

export default WizardsList;
