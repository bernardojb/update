import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Badge } from "reactstrap";

// Import images
// import homeImage from "../../assets/images/app/home.png";
import phoneImage from "../../assets/images/app/phone-01-web.png";

class Section extends Component {
  render() {
    return (
      // <React.Fragment>
      //   <section className="bg-half-170 d-table w-100" id="home">
      //     <Container>
      //       <Row className="mt-5 align-items-center">
      //         <Col lg={6} md={7}>
      //           <div className="title-heading">
      //             <Badge color="danger" className="mb-5"> Novidade! </Badge>
      //             <h1 className="mb-3 landing-title">
      //             O APP QUE VAI TE MANTER ATUALIZADO SOBRE AS ÚLTIMAS PUBLICAÇÕES EM {" "}
      //               <span className="text-primary">ANESTESIOLOGIA.</span>
      //             </h1>

      //             <div className="mt-4">
      //               <Link to="/registro" className="btn btn-primary mt-2 me-2">
      //                 {/* <i className="uil uil-apple"></i>  */}
      //                 TESTAR 7 DIAS GRÁTIS
      //               </Link>
      //               {/* <Link to="#" className="btn btn-outline-primary mt-2 ms-1">
      //                 <i className="uil uil-google-play"></i> Play Store
      //               </Link> */}
      //             </div>
      //           </div>
      //         </Col>
      //         <Col lg={6} md={5} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
      //            <div className="classic-saas-image position-relative">
      //             <div className="bg-saas-shape position-relative">
      //               <img src={phoneImage} className="mx-auto d-block" alt="" />
      //             </div>
      //           </div>
      //         </Col>
      //       </Row>
      //     </Container>
      //   </section>
      // </React.Fragment>
      <React.Fragment>
        <section
          className="bg-half-170 d-table w-100 overflow-hidden"
          id="home"
        >
          <Container>
            <Row className="align-items-center pt-5">
              <Col lg="7" md="6">
                <div className="title-heading">
                  <Badge color="danger" className="mb-5"> Novidade! </Badge>
                  <h1 className="mb-3 landing-title">
                    O APP QUE VAI TE MANTER ATUALIZADO SOBRE AS ÚLTIMAS PUBLICAÇÕES EM {" "}
                    <span className="text-primary">ANESTESIOLOGIA.</span>
                  </h1>
                  <div className="mt-4">
                    <Link to="/registro" className="btn btn-primary mt-2 me-2">
                      {/* <i className="uil uil-apple"></i>  */}
                      TESTAR 7 DIAS GRÁTIS
                    </Link>
                    {/* <Link to="#" className="btn btn-outline-primary mt-2 ms-1">
                       <i className="uil uil-google-play"></i> Play Store
                     </Link> */}
                  </div>
                </div>
              </Col>

              <Col lg="5" md="6" className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                <div className="classic-saas-image position-relative">
                  <img src={phoneImage} className="mx-auto d-block" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Section;
