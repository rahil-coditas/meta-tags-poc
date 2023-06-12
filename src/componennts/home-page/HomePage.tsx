import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { SeoContext } from "../home/Home";
import { HomePageMetaTags } from "../meta-tags/MetaTags";

const HomePage = () => {
	const { setSeo } = useContext(SeoContext);
	useEffect(() => {
		setSeo(<HomePageMetaTags />);
	}, []);
	return (
		<div>
			<Helmet title="meta-tags">
				<meta property="og:title" content="Home Page" />
				<meta
					property="og:site_name"
					content="localhost:3000/home-page"
				/>
				<meta property="og:url" content="localhost:3000/home-page" />
				<meta
					property="og:description"
					content="yo this is home page 🤗"
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
