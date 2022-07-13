import type { NextPage } from "next";
import Head from "next/head";
import { Posts } from "../components/Blog/Posts";
import { Profile } from "../components/Profile/Profile";
import { SEO } from "../components/SEO";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<SEO />

			<main className={styles.main}>
				<div className="name-title">
					<h1>Nicolás Vazquez</h1>
					<h2>Software Developer</h2>
					<p>Hey! I'm Nicolás Vazquez, a programmer living in Argentina.</p>
					<p>
						If you are looking for someone to collaborate on innovative projects, don't
						hesitate to{" "}
						<a
							href="https://linkedin.com/in/vazqueznicolasdev"
							target="_blank"
							rel="noreferrer"
						>
							contact me
						</a>
						.
					</p>
				</div>
				<hr />

				<section>
					<Profile />
					<Posts />
				</section>
			</main>

			{/* @ts-ignore */}
			<style jsx>{
				/*css*/ `
					h1 {
						margin-bottom: 0.5rem;
					}
					h2 {
						font-size: 1.2rem;
						font-weight: 500;
						margin-bottom: 1rem;
					}
					.name-title {
						text-align: center;
						margin-bottom: 2rem;
					}
					@media (min-width: 768px) {
						section {
							display: flex;
							justify-content: space-evenly;
							align-items: start;
							min-width: 70%;
						}
					}
				`
			}</style>
		</div>
	);
};

export default Home;
