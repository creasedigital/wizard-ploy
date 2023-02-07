import { IWizardsRootObject } from "typings";
import { notFound } from "next/navigation";

type PageProps = {
	params: {
		wizardId: string;
	};
};

const fetchWizardById = async (wizardId: string) => {
	const res = await fetch(
		`https://wizard-world-api.herokuapp.com/Wizards/${wizardId}`,
	);

	const wizard: IWizardsRootObject = await res.json();
	return wizard;
};

const WizardPage = async ({ params: { wizardId } }: PageProps) => {
	const wizard = await fetchWizardById(wizardId);

	if (!wizard.id) return notFound();

	return (
		<div>
			<h2>
				<span>This is the page of the weakset wizzard: </span>
				<span>
					{`${
						wizard.firstName
							? `${
									wizard.firstName.toUpperCase() +
									" " +
									wizard.lastName.toUpperCase()
							  }`
							: wizard.lastName.toUpperCase()
					}`}
				</span>
			</h2>
			<p>👻 Get Your Favourite Potions. Muhuhuhuahahaha!!! 👽</p>
			<ul className="flex flex-col gap-4 m-2 ">
				{wizard.elixirs.map((elixir) => (
					<li key={elixir.id} className="py-4 bg-red-100">
						Elixir Name: {elixir.name}
					</li>
				))}
			</ul>
		</div>
	);
};
export default WizardPage;

export async function generateStaticParams() {
	const res = await fetch("https://wizard-world-api.herokuapp.com/Wizards");
	const wizards: IWizardsRootObject[] = await res.json();
	return wizards.map((wizard) => ({ wizardId: wizard.id.toString() }));
}
