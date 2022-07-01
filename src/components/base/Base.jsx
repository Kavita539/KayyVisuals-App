import {
    Footer
} from "../footer/Footer";
import {
    Navbar
} from "../navbar/Navbar";
import {
    SideBar
} from "../sidebar/SideBar";
import "./base.css";

const Base = ({
        children
    }) => {
        return (
    <>
      <Navbar />
      <div className="main-container">
        <SideBar />
        <div className="children-container">{children}</div>
      </div>
      <Footer />
    </>
   );
};

export {
    Base
};