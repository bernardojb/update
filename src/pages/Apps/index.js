// React Basic and Bootstrap
import React, { Component } from "react";
import { Link } from "react-router-dom";

// import generic component
import Section from "./Section";
import Falcao from "./Falcao";
import ShowCase from "./ShowCase";
import Pricing from "./Pricing";
import Price from "./NewPricing";
import Testi from "./Testi";
import Contact from '../../pages/Pages/Contact/PageContactTwo'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    document.body.classList = "";
    window.addEventListener("scroll", this.scrollNavigation, true);
  }
  // Make sure to remove the DOM listener when the component is unmounted.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollNavigation, true);
  }

  scrollNavigation = () => {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (top > 80) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  };

  render() {
    return (
      <React.Fragment>
        {/* section */}
        <Section />

        {/* ShowCase */}
        <ShowCase />
        <div className="position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>

        {/* Falcao */}
        <Falcao />

        {/* Pricing */}
        {/* <Pricing /> */}
        <Price />

        <Contact />

        <div className="perguntas-frequentes p-4">
          <h1 className="text-center">Perguntas Frequentes</h1>
          <Link to="/ajuda" className="btn btn-white mt-2 px-5">
            {/* <i className="uil uil-apple"></i>  */}
            AJUDA
          </Link>
        </div>

        {/* <div className="position-relative">
          <div className="shape overflow-hidden text-footer">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

export default Index;
