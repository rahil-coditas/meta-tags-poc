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
				<title>Home Page</title>
				<meta name="description" content="this is a website" />

				<meta
					property="og:url"
					content="https://repo-fork-abdulrahilsheikh.vercel.app/"
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Home Page" />
				<meta
					property="og:description"
					content="this is a Home Page website"
				/>
				<meta
					property="og:image"
					content="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80"
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content="repo-fork-abdulrahilsheikh.vercel.app"
				/>
				<meta
					property="twitter:url"
					content="https://repo-fork-abdulrahilsheikh.vercel.app/"
				/>
				<meta name="twitter:title" content="Home Page" />
				<meta
					name="twitter:description"
					content="this is a Home Page website"
				/>
				<meta
					name="twitter:image"
					content="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80"
				/>
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
