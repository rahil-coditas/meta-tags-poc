import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AboutPage from "./componennts/about/About";
import HomePage from "./componennts/home-page/HomePage";
import MainOutlet from "./componennts/home/Home";
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
