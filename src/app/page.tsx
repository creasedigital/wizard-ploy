import { Inter } from "@next/font/google";
import Link from "next/link";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="p-4">
				<Link
					href="/elixirs"
					className="
					flex flex-col lg:flex-row rounded-lg overflow-hidden h-auto lg:h-32 border shadow-lg"
				>
					<img
						className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
						src="/elixir.jpg"
						alt="elixir"
					/>
					<div className="flex flex-col justify-between p-4 leading-normal">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
							Checkout Our Collections Of Elixirs
						</h5>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Here are the biggest manufacturers of potent and
							effective elixirs.
						</p>
					</div>
				</Link>
			</div>
			<div className="p-4">
				<Link
					href="/spells"
					className="flex flex-col lg:flex-row rounded-lg overflow-hidden h-auto lg:h-32 border shadow-lg"
				>
					<img
						className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
						src="/spellsIcon.jpg"
						alt="spell"
					/>
					<div className="flex flex-col justify-between p-4 leading-normal">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
							Cast your best spells with the right incantations
						</h5>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Everything you need to be in control and mystically
							awesome!
						</p>
					</div>
				</Link>
			</div>
			<div className="p-4">
				<Link
					href="/wizards"
					className="flex flex-col lg:flex-row rounded-lg overflow-hidden h-auto lg:h-32 border shadow-md"
				>
					<img
						className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
						src="/wizard.jpg"
						alt="wizard"
					/>
					<div className="flex flex-col justify-between p-4 mb-4 leading-normal">
						<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
							When consultations are necessary
						</h5>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
							Know the best in the business for quick solutions
						</p>
					</div>
				</Link>
			</div>
		</main>
	);
}
