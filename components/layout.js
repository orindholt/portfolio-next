import Navbar from "./navbar";
import Footer from "./footer";

const Layout = ({children}) => {
	return (
		<>
			<Navbar />
			<main className="py-6 px-[5%] text-center">{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
