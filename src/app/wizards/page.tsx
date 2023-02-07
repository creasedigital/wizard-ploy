import WizardsList from "./WizardsList";
import SearchWizards from "./SearchWizards";

const Wizards = () => {
	return (
		<div>
			{/* @ts-ignore */}
			<SearchWizards />
			{/* @ts-ignore */}
			<WizardsList />
		</div>
	);
};
export default Wizards;
