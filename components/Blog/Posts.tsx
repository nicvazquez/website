import React, { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";

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

export const Posts = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [search, setSearch] = useState<string>("");
	const url = "https://dev.to/api/articles?username=nicolasvazquez";

	const fetchPosts = async () => {
		setLoading(true);
		const response = await fetch(url);
		const data = await response.json();
		setPosts(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	return (
		<div className="posts-container">
			<SearchBar onChange={(e) => setSearch(e.target.value)} />

			{loading ? (
				<p>Cargando...</p>
			) : (
				<ul>
					{posts
						.filter((post) =>
							post.title
								.replaceAll("á", "a")
								.replaceAll("é", "e")
								.replaceAll("í", "i")
								.replaceAll("ó", "o")
								.replaceAll("ú", "u")
								.toLowerCase()
								.includes(search.toLowerCase())
						)
						.map((post) => (
							<li key={post.id}>
								<article>
									<div className="title-post">
										<h3>
											<a target="_blank" rel="noreferrer" href={post.url}>
												{post.title}
											</a>
										</h3>
									</div>

									<div className="tags-publishDate">
										<p className="publish-date">
											📅
											<time dateTime={post.published_at}> {post.readable_publish_date}</time>
										</p>

										<p className="tags">{post.tags}</p>
									</div>

									<p className="description">{post.description}</p>

									<a href={post.url} target="_blank" rel="noreferrer">
										Leer más →
									</a>

									<p className="reactions-count">❤️ {post.positive_reactions_count}</p>

									<hr />
								</article>
							</li>
						))}
				</ul>
			)}

			{/* @ts-ignore */}
			<style jsx>{
				/*css*/ `
					ul {
						list-style: none;
						padding: 0;
					}

					.title-post h3 {
						margin-bottom: 1rem;
					}

					.tags-publishDate {
						display: flex;
						justify-content: space-between;
						flex-wrap: wrap;
						align-items: center;
						margin-bottom: 1rem;
					}

					.publish-date {
						font-weight: 600;
					}

					.tags {
						color: var(--tags);
					}

					.description {
						margin-bottom: 0.4rem;
					}

					.reactions-count {
						margin: 1rem 0;
					}

					@media (min-width: 768px) {
						.posts-container {
							width: 50%;
						}
						.tags-publishDate {
							justify-content: unset;
						}
						.publish-date {
							margin-right: 1rem;
						}
					}
				`
			}</style>
		</div>
	);
};
