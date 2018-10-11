import React, { Component } from "react";
import PropTypes from "prop-types";
import { Col, Row, Container } from "reactstrap";
import { I18n } from "react-i18next";
import CircleAnimaton from "./CircleAnimation";

const gridCreate = () => (
    <Container>
        <Row className="text-truncate" style={{ height: "100%" }}>
            <Col sm="12 g-height-20 gray mb-1" />
            <Col sm="6 col-6 g-height-90 gray" />
            <Col sm="6 col-6">
                <Row className="ml-1">
                    <Col sm="12 g-height-20 gray" />
                    <Col sm="12 p-1" />
                    <Col sm="12 g-height-20 gray" />
                    <Col sm="12 p-1" />
                    <Col sm="12 g-height-20 gray" />
                    <Col sm="12 p-1" />
                    <Col sm="12 g-height-20 gray" />
                    <Col sm="12 p-1" />
                </Row>
            </Col>
            <Col sm="4 col-6">
                <Row>
                    <Col sm="12 col-12 g-height-20 gray" />
                    <Col sm="12 col-12 p-1" />
                    <Col sm="12 col-12 g-height-20 gray" />
                    <Col sm="12 col-12 p-1" />
                    <Col sm="12 col-12 g-height-20 gray" />
                    <Col sm="12 col-12 p-1" />
                    <Col sm="3 col-3 g-height-20 gray" />
                    <Col sm="1 col-1 p-1" />
                    <Col sm="1 col-1 g-height-20 gray" />
                    <Col sm="1 col-1 p-1" />
                    <Col sm="4 col-4 g-height-20 gray" />
                </Row>
            </Col>
            <Col sm="8 col-6">
                <Row className="ml-1">
                    <Col sm="6 col-6 g-height-20 gray" />
                    <Col sm="1 col-1 p-1" />
                    <Col sm="5 col-5 g-height-20 gray" />
                    <Col sm="12 col-12 p-1" />
                    <Col sm="3 col-3 g-height-20 gray" />
                    <Col sm="1 col-1 p-1" />
                    <Col sm="1 col-1 g-height-20 gray" />
                    <Col sm="1 col-1 p-1" />
                    <Col sm="5 col-5 g-height-20 gray" />
                    <Col sm="12 col-12 p-1" />
                    <Col sm="12 col-12 g-height-20 gray" />
                    <Col sm="12 col-12 p-1" />
                    <Col sm={{ size: "2", offset: 2 }} />
                    <Col sm={{ size: "4", offset: 2 }} />
                </Row>
            </Col>
        </Row>
    </Container>
);

class CircleCharge extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className={
                    "align-items-center " + (this.props.grid ? "d-flex" : "")
                }
            >
                <Container className="overlay position-absolute justify-content-center d-flex">
                    <Row className="text-center">
                        <Col xl={12}>
                            <CircleAnimaton width={this.props.width} />
                        </Col>
                        <Col>
                            <h3 className="l-text">
                                <I18n ns="general">
                                    {(t, { i18n }) => t("charging")}
                                </I18n>
                            </h3>
                        </Col>
                    </Row>
                </Container>
                {this.props.grid ? gridCreate() : null}
            </div>
        );
    }
}

CircleCharge.propTypes = {
    grid: PropTypes.bool,
    width: PropTypes.string
};

CircleCharge.defaultProps = {
    grid: false,
    width: "40px"
};
export default CircleCharge;
