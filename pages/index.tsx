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
					<h2>Desarrollador de Software</h2>
					<p>¡Hola! Soy Nicolás Vazquez, un programador viviendo en Argentina.</p>
					<p>
						Si buscas a alguien para colaborar en proyectos innovadores, no dudes en{" "}
						<a
							href="https://linkedin.com/in/vazqueznicolasdev"
							target="_blank"
							rel="noreferrer"
						>
							contactarme
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
					h1,
					h2 {
						margin-bottom: 1rem;
					}
					h2 {
						font-size: 1.2rem;
						font-weight: 500;
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
