import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <div className="registration">
                <h2> Registration </h2>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Name</label> <input type="text" name="name" className="form-control" />                           
                        </div>
                        <div className="form-group">
                            <label>Email</label> <input type="text" name="email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Contact</label> <input type="text" name="contact" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Password</label> <input type="text" name="password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Confirm Password</label> <input type="text" name="cnfpassword" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="submit" value="Submit" className="btn btn-primary" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;