import { useContext, useEffect } from "react";
import { SeoContext } from "../home/Home";
import { AboutPageMetaTags } from "../meta-tags/MetaTags";
import { Helmet } from "react-helmet";
const AboutPage = () => {
	const { setSeo } = useContext(SeoContext);
	// useEffect(() => {
	// 	setSeo();
	// }, []);
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
					content="yo this is about page 🤯"
				/>
				<meta property="og:type" content="product" />
				<meta property="og:image" content="" />
			</Helmet>
			AboutPage
		</div>
	);
};

export default AboutPage;
