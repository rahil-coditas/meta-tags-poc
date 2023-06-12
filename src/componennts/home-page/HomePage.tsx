import React, { useContext, useEffect } from "react";
import { SeoContext } from "../home/Home";
import { HomePageMetaTags } from "../meta-tags/MetaTags";
import { Helmet } from "react-helmet";

const HomePage = () => {
	const { setSeo } = useContext(SeoContext);
	useEffect(() => {
		setSeo(<HomePageMetaTags />);
	}, []);
	return (
		<div>
			<Helmet title="meta-tags">
				<meta property="og:title" content="About Page" />
				<meta
					property="og:site_name"
					content="localhost:3000/about-page"
				/>
				<meta property="og:url" content="localhost:3000/about-page" />
				<meta
					property="og:description"
					content="yo this is about page 🤗"
				/>
				<meta property="og:type" content="product" />
				<meta property="og:image" content="" />
			</Helmet>
			<div>HomePage</div>
			<div>
				officia ducimus ad accusamus enim tenetur at! Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Illo, iusto iste
				aspernatur, facilis pariatur ut, laudantium totam
			</div>
		</div>
	);
};

export default HomePage;
