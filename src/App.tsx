import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainOutlet from "./componennts/home/Home";
import HomePage from "./componennts/home-page/HomePage";
import AboutPage from "./componennts/about/About";
import ProfilePage from "./componennts/profile/Profile";

function App() {
	const router = createBrowserRouter([
		{
			path: "",
			element: <MainOutlet />,
			children: [
				{ path: "", element: <HomePage /> },
				{ path: "/home", element: <HomePage /> },
				{ path: "/about", element: <AboutPage /> },
				{ path: "/profile", element: <ProfilePage /> },
			],
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
