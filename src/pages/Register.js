import React, { Component } from "react";

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form: {
				name: "",
				email: "",
				contact: "",
				password: "",
				cnfpassword: ""
			},
			formError: {
				nameErr: "",
				emailErr: "",
				contactErr: "",
				passwordErr: "",
				cnfpasswordErr: ""
			}
		}
	}
	handleChange = (e) => {
		const { name, value } = e.target;
		const { form } = this.state;
		var formObj = {
			...form,
			[name]: value
		}
		this.setState({ form: formObj });
	}
	validate = () => {
		const { form } = this.state;
		let formError = {};
		let isValid = true;

		if (form.name === "") {
			formError.nameErr = "Please enter Name";
			isValid = false;
		}
		if (form.email === "") {
			formError.emailErr = "Please enter email address";
			isValid = false;
		}
		else {
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			if (!pattern.test(form.email)) {
				isValid = false;
				formError.emailErr = "Please enter valid email address.";
			}
		}		
		if (form.contact === "") {
			formError.contactErr = "Please enter contact no.";
		}
		else {
			var pattern1 = new RegExp(/^[0-9\b]+$/);
			if (!pattern1.test(form.contact)) {
				isValid = false;
				formError.contactErr = "Please enter only number.";
			} else if (form.contact.length !== 10) {
				isValid = false;
				formError.contactErr = "Please enter valid phone number.";
			}
		}
		if (form.password === "") {
			formError.passwordErr = "Please enter password";
			isValid = false;
		}
		if (form.cnfpassword === "") {
			formError.cnfpasswordErr = "Please enter confirm password";
			isValid = false;
		}
		if (form.cnfpassword && form.password !== form.cnfpassword) {
			formError.cnfpasswordErr = "confirm password doesn't match with password";
			isValid = false;
		}
		this.setState({ formError: formError });
		return isValid;
	}

	handleSubmit = (e) => {
		const isValid = this.validate();
		const form = {};
		if (isValid) {			
			form.name = "";
			form.email = "";
			form.contact = "";
			form.password = "";
			form.cnfpassword = "";
			this.setState({ form: form });
		}
	}

	render() {
		const { form, formError } = this.state;		
		return (
			<div className="registration">
				<h2> Registration </h2>

				<div className="row">
					<div className="col-md-4">
						<div className="form-group">
							<label>Name</label>	<input type="text" name="name" value={form.name} className="form-control" onChange={this.handleChange} />
							{formError.nameErr && <div style={{ color: "red" }}>{formError.nameErr}</div>}
						</div>
						<div className="form-group">
							<label>Email</label> <input type="text" name="email" value={form.email} className="form-control" onChange={this.handleChange} />
							{formError.emailErr && <div style={{ color: "red" }}>{formError.emailErr}</div>}
						</div>
						<div className="form-group">
							<label>Contact</label> <input type="text" name="contact" value={form.contact} className="form-control" onChange={this.handleChange} />
							{formError.contactErr && <div style={{ color: "red" }}>{formError.contactErr}</div>}
						</div>
						<div className="form-group">
							<label>Password</label> <input type="text" name="password" value={form.password} className="form-control" onChange={this.handleChange} />
							{formError.passwordErr && <div style={{ color: "red" }}>{formError.passwordErr}</div>}
						</div>
						<div className="form-group">
							<label>Confirm Password</label> <input type="text" name="cnfpassword" value={form.cnfpassword} className="form-control" onChange={this.handleChange} />
							{formError.cnfpasswordErr && <div style={{ color: "red" }}>{formError.cnfpasswordErr}</div>}
						</div>
						<div className="form-group">
							<input type="submit" value="Submit" className="btn btn-primary" onClick={this.handleSubmit} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Register;