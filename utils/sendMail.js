import axios from "axios";

const url = "https://api.emailjs.com/api/v1.0/email/send";

const sendMail = async ({
	firstName,
	lastName,
	email: user_email,
	subject,
	msg: message,
}) => {
	const reqData = {
		service_id: `service_${process.env.EMAIL_SERVICE_ID}`,
		template_id: `template_${process.env.EMAIL_TEMPLATE_ID}`,
		user_id: process.env.EMAIL_USER_ID,
		template_params: {
			subject,
			user_name: `${firstName} ${lastName}`,
			user_email,
			message,
		},
	};
	return axios({
		url,
		method: "POST",
		data: reqData,
	})
		.then(res => console.log(res))
		.catch(err => console.log(err));
};

export default sendMail;
