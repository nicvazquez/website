import React from "react";
import Avatar from "../../assets/avatar.webp";
import Image from "next/image";
import { socialLinks } from "../../data/socialLinks";

export const Profile = () => {
	return (
		<div className="profile-container">
			<span className="profile-img">
				<Image priority src={Avatar.src} alt="Avatar" width="192px" height="192px" />
			</span>

			<p className="short-text">Suelo escribir sobre informática y esas cosas 💻</p>

			<div className="social-links">
				{socialLinks.map((link) => (
					<a key={link.name} href={link.url} target="_blank" rel="noreferrer">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="36"
							fill="black"
							className={link.className}
							viewBox="0 0 16 16"
						>
							<path d={link.path} />
						</svg>
					</a>
				))}
			</div>

			{/* @ts-ignore */}
			<style jsx>{
				/*css*/ `
					.profile-container {
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
					}
					.profile-img {
						border-radius: 50%;
						overflow: hidden;
						width: 192px;
						height: 192px;
					}
					.short-text {
						margin: 1.5rem 0;
						font-weight: 600;
						text-align: center;
					}
					i {
						font-size: 1rem;
						min-width: 30px;
					}
					.social-links {
						display: flex;
						justify-content: space-around;
						width: 100%;
						margin-bottom: 1rem;
					}
					.social-links a:hover {
						transform: translateY(-3px);
					}
				`
			}</style>
		</div>
	);
};
