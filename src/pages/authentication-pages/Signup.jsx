import { Input, PasswordInput } from "../../components";
import { Link } from "react-router-dom";
import "./authentication.css";

const Signup = () => {
    return(
        <>
        <div className="authentication-container">
            <div className="form-div">
                <form className="form-grp">
                <h3 class="text-center text-lg">SIGN UP</h3>
                        <Input label="Email" type="email" placeholder="example@xyz.com" required={true} />


                        <Input type="text" />


                        <PasswordInput label="password" type="password" placeholder="*********" />



                        <Input label="Confirm password"type="password" placeholder="*********" />


                    <div class="agreement-options">
                        <label class="form-label" for="agreement"><input type="checkbox" name="agreement" /> I agree to
                            all Terms and Conditions</label>
                    </div>

                    <div class="authentication-btn-cta">
                        <button class="btn btn-primary block-btn submit-btn">Create new account</button>
                    </div>

                    <div class="redirect-link text-center">
                        <button class="btn link-btn"><Link to="/signin">Already have
                                an account?<i class="fas fa-chevron-right"></i></Link></button>
                    </div>
                </form>
            </div>

        </div>
        </>
    );
};

export { Signup }; 