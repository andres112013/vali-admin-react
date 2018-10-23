import React, { Component } from "react";
import { Container } from "reactstrap";
import routes from "./routes";
import { I18n } from "react-i18next";
import { Redirect, Route, Switch } from "react-router-dom";
import validator from "validator";

// routes config
import { Header, SwitchWithSlide } from "../../../components";

import { VerifyEmail } from "./views";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            code: ""
        };
        this.setInputs = this.setInputs.bind(this);
        this.verifyEmail = this.verifyEmail.bind(this);
        this.verifyCode = this.verifyCode.bind(this);
    }

    setInputs(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    verifyEmail() {
        if (validator.isEmail(this.state.email)) {
            return true;
        } else {
            return false;
        }
    }

    verifyCode() {
        if (validator.isEmail(this.state.code)) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div className="app flex-row align-items-center">
                <div className="app-header pr-1">
                    <Header {...this.props} />
                </div>
                <Container>
                    <div
                        className="app-content ml-0"
                        style={{ minHeight: "unset" }}
                    >
                        <SwitchWithSlide>
                            <Route
                                exact
                                path="/register"
                                name="register"
                                render={props => (
                                    <VerifyEmail
                                        {...props}
                                        email={{ input: this.state.email }}
                                        setInputs={this.setInputs}
                                        verifyEmail={this.verifyEmail}
                                    />
                                )}
                            />
                            {routes.map((route, idx) => {
                                return route.component ? (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => {
                                            return (
                                                <I18n ns="general">
                                                    {t => {
                                                        document.title = t(
                                                            "routes." +
                                                                route.name
                                                        );
                                                        return (
                                                            <route.component
                                                                {...props}
                                                                setInputs={
                                                                    this
                                                                        .setInputs
                                                                }
                                                                email={{
                                                                    input: this
                                                                        .state
                                                                        .email
                                                                }}
                                                                verifyEmail={
                                                                    this
                                                                        .verifyEmail
                                                                }
                                                                code={{
                                                                    input: this
                                                                        .state
                                                                        .code
                                                                }}
                                                                verifyCode={
                                                                    this
                                                                        .verifyCode
                                                                }
                                                            />
                                                        );
                                                    }}
                                                </I18n>
                                            );
                                        }}
                                    />
                                ) : null;
                            })}
                            <Redirect from="/" to="/register" />
                        </SwitchWithSlide>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Register;
