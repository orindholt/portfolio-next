import { AnimatePresence, motion as m } from "framer-motion";

const ErrorMsg = ({ error }) => {
	return (
		<AnimatePresence>
			{error && (
				<m.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					role="alert"
					className="text-red md:absolute -bottom-6 w-full text-center"
				>
					{error?.message}
				</m.p>
			)}
		</AnimatePresence>
	);
};

export default ErrorMsg;
