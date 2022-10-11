import { createContext, useEffect, useState } from "react";

export const formContext = createContext();

const FormContextProvider = ({ children }) => {
	const [formData, setFormData] = useState(null);

	useEffect(() => {
		const storageData = localStorage.getItem("form-data");
		if (storageData && !formData) {
			setFormData(JSON.parse(storageData));
		} else if (formData && !storageData)
			localStorage.setItem("form-data", JSON.stringify(formData));
	}, [formData]);

	const contextValue = {
		formData: { formData, setFormData },
	};
	return (
		<formContext.Provider value={contextValue}>{children}</formContext.Provider>
	);
};

export default FormContextProvider;
