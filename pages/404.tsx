import { NextPage } from "next";
import React from "react";
import Link from "next/link";

const Page404: NextPage = () => {
	return (
		<div className="container">
			<div>
				<h1>404 | Page not found</h1>
				<Link href="/">
					<button>Go to homepage</button>
				</Link>
			</div>
			{/* @ts-ignore */}
			<style jsx>{
				/*css*/ `
					.container {
						height: 100vh;
						width: 100%;
						display: grid;
						place-items: center;
						text-align: center;
					}
					.container div {
						display: flex;
						flex-direction: column;
						align-items: center;
					}
					button {
						margin-top: 2rem;
						padding: 0.5rem 1rem;
						border: none;
						border-radius: 5px;
						background-color: var(--primary);
						color: #fafafa;
						cursor: pointer;
					}
				`
			}</style>
		</div>
	);
};

export default Page404;
