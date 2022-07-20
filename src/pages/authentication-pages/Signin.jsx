import { useState, useEffect } from "react";
import { Input, PasswordInput, Loader, OverlayContainer } from "../../components";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context";
import { validLoginFormChecker } from "../../utils";
import "./authentication.css";

const Signin = () => {
    const [formErrors, setFormErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [userInput, setUserInput] = useState({
        email: "",
        password: "",
    });

    const {
        authState: { loading, error },
        login,
    } = useAuth();

    let location = useLocation();
    const from = location.state?.from.pathname || "/";

    const changeHandler = e => {
        const { name, value } = e.target;
        setUserInput({ ...userInput, [name]: value });
    };

    const formSubmitHandler = e => {
        e.preventDefault();
        setSubmitted(true);

        if (!(Object.values(formErrors).length > 0)) {
            login(userInput, from);
            setFormErrors({});
        }
    };

    const loginWithGuest = e => {
        e.preventDefault();
        setSubmitted(true);
        setUserInput({
            email: "hellouser@gmail.com",
            password: "helloUser123",
        });
        login({ email: "hellouser@gmail.com", password: "helloUser123" }, from);
    };


    useEffect(() => {
        setFormErrors(() => validLoginFormChecker(userInput));
    }, [userInput, submitted]);


    return (
        <>
            <div className="authentication-container">
                <div className="form-div">
                    <form className="form-grp">
                        <h3 className="text-center text-lg">SIGN IN</h3>
                        <OverlayContainer display={loading}>
                            <Loader />
                        </OverlayContainer>

                        {error && <p className="text-danger text-center">{error}</p>}
                        <Input type="Email"
                            required={true}
                            label="Email"
                            name="email"
                            defaultValue={userInput.email}
                            changeHandler={changeHandler}
                            showError={submitted}
                            helperText={formErrors.email} />



                        <PasswordInput type="Email"
                            required={true}
                            label="password"
                            name="password"
                            defaultValue={userInput.password}
                            changeHandler={changeHandler}
                            showError={submitted}
                            helperText={formErrors.password} />



                        <div className="agreement-options">
                            <label className="form-label-agreement" for="agreement"><input type="checkbox" name="agreement" />
                                Remember me</label>
                            <button className="btn link-btn"><a href="#">Forgot
                                Password?</a></button>
                        </div>

                        <div className="authentication-btn-cta">
                            <button className="btn btn-primary block-btn submit-btn" onClick={e => formSubmitHandler(e)}>Login</button>
                        </div>

                        <div className="authentication-btn-cta">
          <button className="btn outline-btn-primary block-btn submit-btn" onClick={e=> loginWithGuest(e)}>Login with Test
            Credentials</button>
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