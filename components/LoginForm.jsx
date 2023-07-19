import React, { useState } from "react";
import Userfront from "@userfront/core";

// Initialize Userfront Core JS
Userfront.init("demo1234");

export const LoginForm = () => {
	const [emailOrUsername, setEmailOrUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		if (name === "emailOrUsername") {
			setEmailOrUsername(value);
		} else if (name === "password") {
			setPassword(value);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		Userfront.login({
			method: "password",
			emailOrUsername: emailOrUsername,
			password: password,
		});
	};

	return (
		<div className="rounded-xl bg-blue-600 p-10">
			<form onSubmit={handleSubmit} className="flex flex-col">
				<label className="text-black">
					Email or Username
					<input name="emailOrUsername" type="text" value={emailOrUsername} onChange={handleInputChange} className="text-black" />
				</label>
				<label className="text-black">
					Password
					<input name="password" type="password" value={password} onChange={handleInputChange} className="text-black" />
				</label>
				<button type="submit">Log in</button>
			</form>
		</div>
	);
};
