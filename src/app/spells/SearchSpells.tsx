"use client";

import React, { useState, FormEvent } from "react";
import { buildQuery } from "@/utils/buildQuery";

const SearchSpells = () => {
	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const spellTypes = [
		"",
		"None",
		"Charm",
		"Conjuration",
		"Spell",
		"Transfiguration",
		"HealingSpell",
		"DarkCharm",
		"Jinx",
		"Curse",
		"MagicalTransportation",
		"Hex",
		"CounterSpell",
		"DarkArts",
		"CounterJinx",
		"CounterCharm",
		"Untransfiguration",
		"BindingMagicalContract",
		"Vanishment",
	];

	const handleSelect = (type: string) => {
		setType(type);
		console.log(type);
	};

	const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		getSpells();
		setName("");
		setType("");
	};

	const getSpells = async (
		queryParams = { Name: name.trim(), Type: type.trim() },
	) => {
		let queryString = buildQuery(queryParams);
		console.log(queryString);

		const response = await fetch(
			`https://wizard-world-api.herokuapp.com/Spells${queryString}`,
		);
		const filteredSpell = response.json();
		console.log(filteredSpell);
		return filteredSpell;
	};

	return (
		<div>
			<h1 className="font-bold text-3xl">Search For Spells</h1>
			<form onSubmit={handleSearch}>
				<input
					type={"text"}
					value={name}
					placeholder="enter spell name"
					onChange={(e) => setName(e.target.value)}
					className="m-2"
				/>

				<select
					value={type}
					onChange={(e) => handleSelect(e.target.value)}
				>
					{spellTypes.map((spellType, i) => {
						return (
							<option key={i} value={spellType}>
								{i === 0 ? "-select spell type-" : spellType}
							</option>
						);
					})}
				</select>
				<button
					type="submit"
					className="bg-[#384679] text-white font-bold py-2 px-4 rounded-lg "
					role={"button"}
				>
					Search
				</button>
			</form>
		</div>
	);
};
export default SearchSpells;
