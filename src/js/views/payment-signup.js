import React, { useState } from "react";
import PokerSuits from "../../img/poker-suits.png";

export const PaymentSignUp = () => {
	const [dataProcessed, setDataProcessed] = useState(false);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [referralID, setReferralID] = useState("");
	const [types, setTypes] = useState([]);

	const [errors, setErrors] = useState([false, false, false, false, false]);

	return (
		<div className="p-4 my-5 bg-light border-dark mx-auto main-div" style={{ borderRadius: "25px" }}>
			{dataProcessed ? (
				<div>Your information has been saved!</div>
			) : (
				<div className="mt-5 mx-auto input-length">
					<div className="my-3">
						<i className="ml-2">First Name</i>
						<span className="text-danger ml-1">*</span>
						<input
							className={"form-control" + (errors[0] ? " border-danger" : "")}
							onChange={e => setFirstName(e.target.value)}
						/>
					</div>
					<div className="my-3">
						<i className="ml-2">Last Name</i>
						<span className="text-danger ml-1">*</span>
						<input
							className={"form-control" + (errors[1] ? " border-danger" : "")}
							onChange={e => setLastName(e.target.value)}
						/>
					</div>
					<div className="my-3">
						<i className="ml-2">Username</i>
						<span className="text-danger ml-1">*</span>
						<input
							className={"form-control" + (errors[2] ? " border-danger" : "")}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					<div className="my-3">
						<i className="ml-2">Email</i>
						<span className="text-danger ml-1">*</span>
						<input
							className={"form-control" + (errors[3] ? " border-danger" : "")}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="my-3">
						<i className="ml-2">Referral ID</i>
						<input className="form-control" onChange={e => setReferralID(e.target.value)} />
					</div>
					<div className={"mt-3 mb-5 pb-3" + (errors[4] ? " border border-danger" : "")}>
						<i className="ml-2">Preferred Method of Payment</i>
						<span className="text-danger ml-1">*</span>
						<div className="d-flex justify-content-start">
							<div className="ml-3">
								<div className="mt-3 d-flex justify-content-start align-items-center">
									<input
										style={{ width: "25px" }}
										type="checkbox"
										id="Paypal"
										onChange={({ target: t }) =>
											t.checked
												? setTypes(types.concat([t.id]))
												: setTypes(types.filter(e => e !== t.id))
										}
									/>
									Paypal
								</div>
								<div className="mt-3 d-flex justify-content-start align-items-center">
									<input
										style={{ width: "25px" }}
										type="checkbox"
										id="Zelle"
										onChange={({ target: t }) =>
											t.checked
												? setTypes(types.concat([t.id]))
												: setTypes(types.filter(e => e !== t.id))
										}
									/>
									Zelle
								</div>
								<div className="mt-3 d-flex justify-content-start align-items-center">
									<input
										style={{ width: "25px" }}
										type="checkbox"
										id="Venmo"
										onChange={({ target: t }) =>
											t.checked
												? setTypes(types.concat([t.id]))
												: setTypes(types.filter(e => e !== t.id))
										}
									/>
									Venmo
								</div>
							</div>
							<div className="ml-5">
								<div className="mt-3 d-flex justify-content-start align-items-center">
									<input
										style={{ width: "25px" }}
										type="checkbox"
										id="CashApp"
										onChange={({ target: t }) =>
											t.checked
												? setTypes(types.concat([t.id]))
												: setTypes(types.filter(e => e !== t.id))
										}
									/>
									Cash App
								</div>
								<div className="mt-3 d-flex justify-content-start align-items-center">
									<input
										style={{ width: "25px" }}
										type="checkbox"
										id="BitCoin"
										onChange={({ target: t }) =>
											t.checked
												? setTypes(types.concat([t.id]))
												: setTypes(types.filter(e => e !== t.id))
										}
									/>
									Bitcoin
								</div>
							</div>
						</div>
					</div>
					{errors.includes(true) && <div className="text-danger pl-2">Please fix the appropiate fields</div>}
					<div
						className="mb-3 bg-info text-light text-center rounded py-1 border border-dark"
						style={{ cursor: "pointer" }}
						onClick={() => {
							let first = firstName.trim();
							let last = lastName.trim();
							let user = username.trim();
							let em = email.trim();

							let checklst = [first, last, user, em];
							let errlst = [];
							for (let str of checklst) {
								errlst.push(str === "");
							}
							if (!em.includes("@") || !em.includes(".")) {
								errlst[3] = true;
							}
							errlst.push(types.length === 0);
							console.log(errlst);
							setErrors(errlst);

							if (false) {
								fetch("https://pokersocietyonline.herokuapp.com/payment/data", {
									method: "POST",
									headers: { "Content-Type": "application/json" },
									body: JSON.stringify({
										first_name: firstName,
										last_name: lastName,
										username: username,
										email: email,
										referral_id: referralID,
										payment_types: types
									})
								})
									.then(resp => resp.json())
									.then(processed => {
										if (processed) setDataProcessed(true);
									});
							}
						}}>
						Submit
					</div>
					<div className="text-center">
						<img style={{ height: "40px", width: "180px" }} src={PokerSuits} />
					</div>
				</div>
			)}
		</div>
	);
};
