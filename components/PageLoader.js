import Loader from "./Loader";

const PageLoader = () => {
	return (
		<div className="z-50 fixed top-0 bottom-0 right-0 left-0 grid place-content-center">
			<Loader />
		</div>
	);
};

export default PageLoader;
