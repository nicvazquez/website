import React, { ChangeEventHandler } from "react";

interface SearchBar {
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchBar = ({ onChange }: SearchBar) => {
	return (
		<div className="container-searchbar">
			<input onChange={onChange} type="text" placeholder="Buscar" />
			<button>🔎</button>

			{/* @ts-ignore */}
			<style jsx>{
				/*css*/ `
					.container-searchbar {
						position: relative;
						margin-bottom: 2rem;
					}
					input,
					button {
						padding: 0.5rem;
						border: 1px solid #ccc;
						border-radius: 0.25rem;
					}
					input {
						width: 100%;
						font-size: 1rem;
					}
					input:focus {
						outline: 1px solid var(--primary);
					}
					button {
						position: absolute;
						right: 0;
					}
				`
			}</style>
		</div>
	);
};
