import React, { useState } from "react";
import PokerSuits from "../../img/poker-suits.png";

export const PaymentSignUp = () => {
	const [firstName, setFirstName] = useState("a");
	const [lastName, setLastName] = useState("b");
	const [username, setUsername] = useState("c");
	const [email, setEmail] = useState("d");
	const [referralID, setReferralID] = useState("e");
	const [types, setTypes] = useState([]);

	return (
		<div className="p-4 my-5 bg-light border-dark mx-auto main-div" style={{ borderRadius: "25px" }}>
			<div className="mt-5 mx-auto input-length">
				<div className="my-3">
					<i className="ml-2">First Name</i>
					<input className="form-control" onChange={e => setFirstName(e.target.value)} />
				</div>
				<div className="my-3">
					<i className="ml-2">Last Name</i>
					<input className="form-control" onChange={e => setLastName(e.target.value)} />
				</div>
				<div className="my-3">
					<i className="ml-2">Username</i>
					<input className="form-control" onChange={e => setUsername(e.target.value)} />
				</div>
				<div className="my-3">
					<i className="ml-2">Email</i>
					<input className="form-control" onChange={e => setEmail(e.target.value)} />
				</div>
				<div className="my-3">
					<i className="ml-2">Referral ID</i>
					<input className="form-control" onChange={e => setReferralID(e.target.value)} />
				</div>
				<div className="my-3">
					<i className="ml-2">Preferred Method of Payment</i>
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
				<div
					className="mb-3 mt-5 bg-info text-light text-center rounded py-1 border border-dark"
					style={{ cursor: "pointer" }}
					onClick={() => {
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
								// if (processed) setSuccess(true);
							});
					}}>
					Submit
				</div>
				<div className="text-center">
					<img style={{ height: "40px", width: "180px" }} src={PokerSuits} />
				</div>
			</div>
		</div>
	);
};
