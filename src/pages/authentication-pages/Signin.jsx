import { Input, PasswordInput } from "../../components";
import { Link } from "react-router-dom";
import "./authentication.css";

const Signin = () => {
    return(
        <>
        <div className="authentication-container">
            <div className="form-div">
                <form className="form-grp">
                    <h3 className="text-center text-lg">SIGN IN</h3>
                    <Input type="Email" required={true} label="Email" placeholder="xyz@gmail.com" />



                    <PasswordInput type="Email" required={true} label="password" placeholder="***********"/>



                    <div className="agreement-options">
                        <label className="form-label-agreement" for="agreement"><input type="checkbox" name="agreement" />
                            Remember me</label>
                        <button className="btn link-btn"><a href="#">Forgot
                                Password?</a></button>
                    </div>

                    <div className="authentication-btn-cta">
                        <button className="btn btn-primary block-btn submit-btn">Login</button>
                    </div>

                    <div className="redirect-link text-center">
                        <button className="btn link-btn"><Link to="/signup">Create new
                                account<i className="fas fa-chevron-right"></i></Link></button>
                    </div>
                </form>
            </div>

        </div>
        </>
    );
};

export { Signin };