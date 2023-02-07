import Link from "next/link";

function Header() {
	return (
		<header className="block  md:flex md:justify-between bg-[#384679] px-8 py-4 text-white">
			<Link
				href="/"
				className="text-center md:flex items-center cursor-pointer"
			>
				<img
					src="/magic wand.svg"
					alt="logo"
					width="24px"
					className="hidden md:block"
				/>
				<p className="font-bold text-2xl pl-4 uppercase">
					Wizard World
				</p>
			</Link>
			<nav className="text-center">
				<ul className="block mx-auto md:flex gap-10 items-center">
					<li className="cursor-pointer font-medium text-md">
						<Link href="/elixirs">Elixirs</Link>
					</li>
					<li className="cursor-pointer font-medium text-md">
						<Link href="/spells">Spells</Link>
					</li>
					<li className="cursor-pointer font-medium text-md">
						<Link href="/wizards">Wizards</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
