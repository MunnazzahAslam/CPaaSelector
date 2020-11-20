import React from "react";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
  ListGroupItem,
  ListGroup,
  Row,
  Col
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

class Cards extends React.Component {
  render() {
    return (
      <>
        <Row className="mb-4">
          <Col lg="6">
            <Card className="card-stats">

              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle className="text-uppercase text-muted mb-0">
                      Total traffic
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">350,897</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-red text-white rounded-circle shadow">
                      <i className="ni ni-active-40" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <span className="text-success mr-2">
                    <i className="fa fa-arrow-up" />
                    3.48%
                  </span>
                  <span className="text-nowrap">Since last month</span>
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="card-stats">

              <CardBody>
                <Row>
                  <div className="col">
                    <CardTitle className="text-uppercase text-muted mb-0">
                      New users
                    </CardTitle>
                    <span className="h2 font-weight-bold mb-0">2,356</span>
                  </div>
                  <Col className="col-auto">
                    <div className="icon icon-shape bg-orange text-white rounded-circle shadow">
                      <i className="ni ni-chart-pie-35" />
                    </div>
                  </Col>
                </Row>
                <p className="mt-3 mb-0 text-sm">
                  <span className="text-success mr-2">
                    <i className="fa fa-arrow-up" />
                    3.48%
                  </span>
                  <span className="text-nowrap">Since last month</span>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

export default Cards;