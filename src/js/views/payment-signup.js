import React, { useState } from "react";
import PokerSuits from "../../img/poker-suits.png";

export const PaymentSignUp = () => {
	const [dataProcessed, setDataProcessed] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [errors, setErrors] = useState([false, false, false, false, false]);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [referralID, setReferralID] = useState("");
	const [types, setTypes] = useState([]);

	return (
		<div className="p-4 my-5 bg-light border-dark mx-auto main-div" style={{ borderRadius: "25px" }}>
			{dataProcessed ? (
				<h3 className="text-success text-center mt-2">Your information has been processed!</h3>
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
							<i className="ml-2">PokerBros Username</i>
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
											id="PayPal"
											onChange={({ target: t }) =>
												t.checked
													? setTypes(types.concat([t.id]))
													: setTypes(types.filter(e => e !== t.id))
											}
										/>
										PayPal
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
											id="Bitcoin"
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
						{errorMessage && <div className="text-danger pl-2">{errorMessage}</div>}
						<div
							className="mb-3 bg-info text-light text-center rounded py-1 border border-dark"
							style={{ cursor: "pointer" }}
							onClick={() => {
								const first = firstName.trim();
								const last = lastName.trim();
								const user = username.trim();
								const em = email.trim();

								const regex = /^[a-zA-Z]+[\w\.]*@\w+\.[a-zA-Z]{2,5}$/g;
								let checklst = [first, last, user, em];
								let errlst = [];

								checklst.forEach(e => errlst.push(e === "")); // check nothing empty
								errlst.push(types.length === 0); // check types

								if (errlst.includes(true)) setErrorMessage("Please fix the appropiate fields");
								// check email
								else if (!em.match(regex)) {
									errlst[3] = true;
									setErrorMessage("Invalid email");
								} else setErrorMessage("");

								// show errors
								setErrors(errlst);

								if (!errlst.includes(true)) {
									fetch("https://pokersocietyonline.herokuapp.com/payment/methods", {
										method: "POST",
										headers: { "Content-Type": "application/json" },
										body: JSON.stringify({
											first_name: first,
											last_name: last,
											username: user,
											email: em,
											referral_id: referralID,
											payment_types: types
										})
									})
										.then(resp => resp.json())
										.then(resp => {
											if (resp.processed) setDataProcessed(true);
											else if (resp.message) setErrorMessage(resp.message);
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
