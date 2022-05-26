import nodemailer from "nodemailer";

export default function handler(req, res) {
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: process.env.email,
			pass: process.env.password,
		},
		secure: true,
	});

	const mailData = {
		from: req.body.email,
		to: process.env.email,
		subject: req.body.subject,
		text: `${req.body.firstName} ${req.body.lastName}:\r\n ${req.body.msg}`,
		html: `
      <div>
        <p style="font-weight: 700; margin: 0;">Name: <span style="font-weight: 400;">${req.body.firstName} ${req.body.lastName}</span></p>
        <p style="font-weight: 700; margin: 0;">Sender: <span style="font-weight: 400;">${req.body.email}</span></p>
        <br/>
        <p style="font-weight: 700;">Message: <span style="font-weight: 400;">${req.body.msg}</span></p>
      </div>
    `,
	};

	transporter.sendMail(mailData, (err, info) => {
		if (err) {
			console.log(err);
		} else console.log(info);
		res.status(200);
	});
}
