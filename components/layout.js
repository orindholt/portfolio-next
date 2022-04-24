import Navbar from "./Navbar";
import Footerbar from "./Footer";

const Layout = ({children}) => {
	return (
		<div id="app-wrap" className="flex flex-col h-screen">
			<Navbar />
			<main className="pb-16 pt-24 px-[5%] text-center max-w-7xl mx-auto w-full">
				{children}
			</main>
			<Footerbar />
		</div>
	);
};

export default Layout;
