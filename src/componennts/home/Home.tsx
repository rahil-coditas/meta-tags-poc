import React, { createContext, useState } from "react";
import { createPortal } from "react-dom";
import { Link, Outlet } from "react-router-dom";
import { AboutPageMetaTags } from "../meta-tags/MetaTags";
import styles from "./Home.module.css";
export const SeoContext = createContext({} as any);
const MainOutlet = () => {
	const [seoContent, setSeoContent] = useState(<AboutPageMetaTags />);
	const doc = document.head;
	return (
		<SeoContext.Provider
			value={{ setSeo: (data: any) => setSeoContent(data) }}>
			<div className={styles.page}>
				{/* {createPortal(seoContent, doc)} */}
				<div className={styles.header}>
					<Link to={"/about"}>About page</Link>
					<Link to={"/home"}>Home Page</Link>
					<Link to={"/profile"}>Profile Page</Link>
				</div>
				<div>
					<Outlet />
				</div>
			</div>
		</SeoContext.Provider>
	);
};

export default MainOutlet;
