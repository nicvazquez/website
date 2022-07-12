import React, { useEffect, useState } from "react";

interface Post {
	id: number;
	title: string;
	description: string;
	readable_publish_date: string;
	published_at: string;
	url: string;
	positive_reactions_count: number;
	reading_time_minutes: number;
	tags: string;
}

export const LastPosts = () => {
	const [lastPosts, setLastPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const url = "https://dev.to/api/articles?username=nicolasvazquez";

	const fetchLastPosts = async () => {
		setLoading(true);
		const response = await fetch(url);
		const data = await response.json();
		setLastPosts(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchLastPosts();
	}, []);

	return (
		<section>
			<h2>Articulos recientes</h2>
			{loading ? (
				<p>Cargando...</p>
			) : (
				<ul>
					{lastPosts.map(
						(post, index) =>
							index <= 3 && (
								<li key={post.id}>
									<div className="title-post">
										<h3>
											<a href={post.url}>{post.title}</a>
										</h3>
										<p className="publish-date">
											📆
											<time dateTime={post.published_at}> {post.readable_publish_date}</time>
										</p>
									</div>

									<p className="tags">{post.tags}</p>

									<p className="description">{post.description}</p>

									<a href={post.url} target="_blank" rel="noreferrer">
										Leer más →
									</a>

									<p className="reactions-count">❤️ {post.positive_reactions_count}</p>

									<hr />
								</li>
							)
					)}
				</ul>
			)}

			{/* @ts-ignore */}
			<style jsx>{
				/*css*/ `
					ul {
						list-style: none;
						padding: 0;
						margin-top: 1rem;
					}

					.title-post {
						margin-bottom: 0.5rem;
						display: flex;
						align-items: center;
					}
					.title-post h3 {
						width: 80%;
					}

					.publish-date {
						font-weight: 600;
					}

					.tags {
						margin-bottom: 1rem;
						color: var(--tags);
					}

					.description {
						margin-bottom: 0.4rem;
					}

					.reactions-count {
						margin: 1rem 0;
					}

					@media (min-width: 768px) {
						ul {
							width: 40%;
							padding: 1rem 0;
						}
					}
					@media (min-width: 1300px) {
						ul {
							width: 30%;
						}
					}
				`
			}</style>
		</section>
	);
};
