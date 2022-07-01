import "./footer.css";

const Footer = () => {
    return(

        <footer className="footer">
            <ul className="inline-styled-list footer-list">
                <li>
                    <a className="footer-links" href="https://github.com/Kavita539" target="_blank"><i
                            className='fab fa-github'></i></a>
                </li>
                <li>
                    <a className="footer-links" href="https://twitter.com/KavitaP_03" target="_blank"><i
                            className="fab fa-twitter"></i></a>
                </li>
                <li>
                    <a className="footer-links" href="https://www.linkedin.com/in/kavita-pathak03/" target="_blank"><i
                            className="fab fa-linkedin"></i></a>
                </li>
            </ul>
            <p>© 2022 KayyVisuals</p>
        </footer>

    );
};
export {
    Footer
};