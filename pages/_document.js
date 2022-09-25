import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html className="scroll-smooth">
			<Head />
			<body className="font-inter dark:text-white text-black text-base dark:bg-black bg-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
