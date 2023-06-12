import { useContext, useEffect } from "react";
import { SeoContext } from "../home/Home";
import { ProfilePageMetaTags } from "../meta-tags/MetaTags";

const ProfilePage = () => {
	const { setSeo } = useContext(SeoContext);
	useEffect(() => {
		setSeo(<ProfilePageMetaTags />);
	}, []);
	return (
		<div>
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
