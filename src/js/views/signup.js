import React from "react";
import PokerSuits from "../../img/poker-suits.png";

export const SignUp = () => {
	return (
		<div className="p-4 mt-5 bg-light border-dark mx-auto" style={{ borderRadius: "25px", width: "600px" }}>
			<div className="mt-5 mx-auto" style={{ width: "400px" }}>
				<div className="my-3">
					<i className="ml-2">First Name</i>
					<input className="form-control" />
				</div>
				<div className="my-3">
					<i className="ml-2">Last Name</i>
					<input className="form-control" />
				</div>
				<div className="my-3">
					<i className="ml-2">Username</i>
					<input className="form-control" />
				</div>
				<div className="my-3">
					<i className="ml-2">Email</i>
					<input className="form-control" />
				</div>
				<div className="my-3">
					<i className="ml-2">Referral ID</i>
					<input className="form-control" />
				</div>
				<div className="my-3">
					<i className="ml-2">Preferred Method of Payment</i>
					<div className="d-flex justify-content-start align-items-center">
						<input className="form-control" style={{ width: "25px" }} type="checkbox" />
						Paypal
					</div>
					<div className="d-flex justify-content-start align-items-center">
						<input className="form-control" style={{ width: "25px" }} type="checkbox" />
						Zelle
					</div>
					<div className="d-flex justify-content-start align-items-center">
						<input className="form-control" style={{ width: "25px" }} type="checkbox" />
						Venmo
					</div>
					<div className="d-flex justify-content-start align-items-center">
						<input className="form-control" style={{ width: "25px" }} type="checkbox" />
						Cash App
					</div>
					<div className="d-flex justify-content-start align-items-center">
						<input className="form-control" style={{ width: "25px" }} type="checkbox" />
						Bitcoin
					</div>
				</div>
				<div className="text-center pt-3">
					<img style={{ height: "40px", width: "180px" }} src={PokerSuits} />
				</div>
			</div>
		</div>
	);
};
