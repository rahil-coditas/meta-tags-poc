import React from "react";

export const AboutPageMetaTags = () => {
	return (
		<>
			<meta property="og:title" content="About Page" />
			<meta property="og:site_name" content="localhost:3000/about-page" />
			<meta property="og:url" content="localhost:3000/about-page" />
			<meta
				property="og:description"
				content="yo this is about page 🤯"
			/>
			<meta property="og:type" content="product" />
			<meta property="og:image" content="" />
		</>
	);
};

export const HomePageMetaTags = () => {
	return (
		<>
			<meta property="og:title" content="Home Page" />
			<meta property="og:site_name" content="localhost:3000/home-page" />
			<meta property="og:url" content="localhost:3000/home-page" />
			<meta property="og:description" content="yo this is home page 😎" />
			<meta property="og:type" content="home pages" />
			<meta property="og:image" content="" />
		</>
	);
};
export const ProfilePageMetaTags = () => {
	return (
		<>
			<meta property="og:title" content="Profile Page" />
			<meta
				property="og:site_name"
				content="localhost:3000/profile-page"
			/>
			<meta property="og:url" content="localhost:3000/home-page" />
			<meta
				property="og:description"
				content="yo this is profile page 🙈"
			/>
			<meta property="og:type" content="about pages" />
			<meta property="og:image" content="" />
		</>
	);
};
