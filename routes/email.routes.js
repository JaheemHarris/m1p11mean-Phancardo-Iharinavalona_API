const EmailService = require("../lib/email");
const { GMAIL_EMAIL } = require("../config/email.config");
const express = require("express");
const router = express.Router();

router.get("/send", (req, res) => {
	try {
		const emailOptions = {
			to: "lordnavalona@gmail.com",
			from: GMAIL_EMAIL,
			subject: "Glamify Account",
			text: "and easy to do anywhere, even with Node.js",
			html: `
				<h3>Your Glamify Account has been created</h3>
				<p>You can now login to your new account and begin to access our services.</p>
			`,
		};
		EmailService.send(emailOptions)
			.then(() => {
				res.status(200).json({ message: "Mail sended success!" });
			})
			.catch((error) => {
				res
					.status(400)
					.json({ message: "Failed to send mail", description: error.toString() });
			});
	} catch (e) {
		res
			.status(500)
			.json({ message: "Server error", description: error.toString() });
	}
});

module.exports = router;
