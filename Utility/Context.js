import {createContext, useState} from "react";

export const formContext = createContext();

const FormContextProvider = ({children}) => {
	const [formData, setFormData] = useState({});
	return (
		<formContext.Provider value={{formData, setFormData}}>
			{children}
		</formContext.Provider>
	);
};

export default FormContextProvider;
