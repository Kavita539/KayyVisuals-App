import { Input, PasswordInput } from "../../components";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import { useState, useEffect } from "react";
import "./authentication.css";

const Signup = () => {

const {
authState: { loading, error },
signup,
} = useAuth();
const [formErrors, setFormErrors] = useState({});
const [submitted, setSubmitted] = useState(false);
const [userInput, setUserInput] = useState({
name: "",
lastName: "",
email: "",
password: "",
confirmPassword: "",
agreement: "not agree",
});

const changeHandler = e => {
const { name, value } = e.target;
setUserInput({ ...userInput, [name]: value });
};

useEffect(() => {
setFormErrors(() => validFormChecker(userInput));
}, [userInput, submitted]);

const formSubmitHandler = e => {
e.preventDefault();

const { name: firstName, lastName, email, password } = userInput;

setSubmitted(true);
if (!(Object.values(formErrors).length > 0)) {
signup({ firstName, lastName, email, password });
setFormErrors({});
}
};
return (
<>
    <div className="authentication-container">
        <div className="form-div">
            <form className="form-grp">
                <h3 class="text-center text-lg">SIGN UP</h3>

                <OverlayContainer display={loading}>
                    <Loader />
                </OverlayContainer>

                {error && <p className="text-danger text-center">{error}</p>}

                <Input type="text" defaultValue={userInput.name} name="name" label="Name" helperText={formErrors.name}
                    showError={submitted} required={true} changeHandler={changeHandler} />

                <Input type="text" defaultValue={userInput.lastName} name="lastName" label="Lastname"
                    helperText={formErrors.lastName} showError={submitted} required={true}
                    changeHandler={changeHandler} />

                <Input type="email" defaultValue={userInput.email} name="email" label="Email"
                    helperText={formErrors.email} showError={submitted} required={true} changeHandler={changeHandler} />

                <PasswordInput defaultValue={userInput.password} name="password" label="Password"
                    helperText={formErrors.password} showError={userInput.password.length> 2 || submitted}
                    required={true}
                    changeHandler={changeHandler} />

                    <Input type="password" defaultValue={userInput.confirmPassword} name="confirmPassword"
                        label="Confirm Password" helperText={formErrors.confirmPassword}
                        showError={userInput.confirmPassword.length> 2 || submitted}
                    required={true}
                    changeHandler={changeHandler}/>

                    <div class="agreement-options">
                        <label class="form-label" for="agreement"><input type="checkbox" name="agreement"
                                onChange={changeHandler} value={userInput.agreement==="agree" ? "not agree" : "agree" }
                                checked={userInput.agreement==="agree" } id="agreement" /> I agree to
                            all Terms and Conditions</label>

                        {submitted && (
                        <p className="text-danger text-xs text-center option-helper-txt">
                            {formErrors.agreement}
                        </p>
                        )}
                    </div>

                    <div class="authentication-btn-cta">
                        <button class="btn btn-primary block-btn submit-btn" onClick={e => formSubmitHandler(e)}>Create new account</button>
                    </div>

                    <div class="redirect-link text-center">
                        <button class="btn link-btn">
                            <Link to="/signin">Already have
                            an account?<i class="fas fa-chevron-right"></i></Link></button>
                    </div>
            </form>
        </div>

    </div>
</>
);
};

export { Signup };