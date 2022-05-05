import Navbar from "./Navbar";
import Footerbar from "./Footer";

const Layout = ({children}) => {
	return (
		<div id="app-wrap" className="flex flex-col min-h-screen">
			<Navbar />
			<main className="pb-10 pt-16 px-[5%] text-center max-w-7xl mx-auto w-full">
				{children}
			</main>
			<Footerbar />
		</div>
	);
};

export default Layout;
