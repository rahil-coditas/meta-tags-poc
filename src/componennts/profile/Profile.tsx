import { useContext, useEffect } from "react";
import { SeoContext } from "../home/Home";
import { ProfilePageMetaTags } from "../meta-tags/MetaTags";
import { Helmet } from "react-helmet";

const ProfilePage = () => {
	const { setSeo } = useContext(SeoContext);
	useEffect(() => {
		setSeo(<ProfilePageMetaTags />);
	}, []);
	return (
		<div>
			<Helmet title="meta-tags">
				<meta property="og:title" content="Profile Page" />
				<meta
					property="og:site_name"
					content="localhost:3000/profile-page"
				/>
				<meta property="og:url" content="localhost:3000/profile-page" />
				<meta
					property="og:description"
					content="yo this is home page 🤗"
				/>
				<meta property="og:type" content="product" />
				<meta property="og:image" content="" />
			</Helmet>
			<div>Profile Page</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
				iusto iste aspernatur, facilis pariatur ut, laudantium totam
				officia ducimus ad accusamus enim tenetur at!
			</div>
		</div>
	);
};

export default ProfilePage;
