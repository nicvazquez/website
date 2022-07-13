import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { siteMetadata } from "../data/siteMetadata";

export const SEO = () => {
	const router = useRouter();
	const { title, description } = siteMetadata;
	return (
		<Head>
			<title>{title}</title>
			<meta name="robots" content="follow, index" />
			<meta name="description" content={description} />
			<meta property="og:url" content={`${siteMetadata.siteUrl}${router.asPath}`} />
			<meta property="og:site_name" content={siteMetadata.title} />
			<meta property="og:description" content={description} />
			<meta property="og:title" content={title} />
		</Head>
	);
};
