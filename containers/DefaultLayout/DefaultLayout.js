import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";

// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import classNames from "classnames";
import { Breadcrumb, Header, Aside } from "../../components";
import { AppSidebarNav } from "@coreui/react";
import { I18n } from "react-i18next";
import { log } from "util";

class DefaultLayout extends Component {
    constructor(props) {
        super(props);
        this.toggleLarge = this.toggleLarge.bind(this);
        this.toggleAsideNav = this.toggleAsideNav.bind(this);
        this.hideAsideNav = this.hideAsideNav.bind(this);
        this.state = { asideNavToggle: false, treeviewTab: [0,0]};
        this.sendRequest = this.sendRequest.bind(this);
        this.treeviewSet = this.treeviewSet.bind(this);
        this.sendRequest();
    }

    treeviewSet(tab) {
        this.setState({
            treeviewTab: tab
        });
    }

    sendRequest() {
        return axios({
            method: "post",
            url: "./verifyAuth"
        });
    }

    toggleLarge() {
        this.setState({
            large: !this.state.large
        });
    }

    toggleAsideNav() {
        this.setState({ asideNavToggle: !this.state.asideNavToggle });
    }

    hideAsideNav() {
        if (this.state.asideNavToggle) {
            this.setState({ asideNavToggle: false });
        }
    }
    render() {
        return (
            <div
                className={
                    "app sidebar-mini rtl " +
                    classNames({
                        "sidenav-toggled": this.state.asideNavToggle === true
                    })
                }
            >
                <div className="app-header">
                    <Header toggleAsideNav={this.toggleAsideNav} />
                </div>
                <div
                    className="app-sidebarOverlay"
                    onClick={this.hideAsideNav}
                    data-toggle="sidebar"
                />
                <Aside
                    treeviewTab={this.state.treeviewTab}
                    treeviewSet={this.treeviewSet}
                />
                <AppSidebarNav navConfig={navigation} {...this.props} />
                <main className="app-content">
                    <Breadcrumb appRoutes={routes} />
                    <Container fluid>
                        <Switch>
                            {routes.map((route, idx) => {
                                return route.component ? (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name={route.name}
                                        render={props => (
                                            <I18n ns="general">
                                                {t => (
                                                    <route.component
                                                        {...props}
                                                        Headtitle={
                                                            (document.title = t(
                                                                "routes." +
                                                                    route.name
                                                            ))
                                                        }
                                                        farmAuth={
                                                            this.props.farmAuth
                                                        }
                                                        treeview={
                                                            typeof route.treeview !==
                                                            "undefined"
                                                                ? route.treeview
                                                                : 0
                                                        }
                                                        treeviewSet={
                                                            this.treeviewSet
                                                        }
                                                    />
                                                )}
                                            </I18n>
                                        )}
                                    />
                                ) : null;
                            })}
                            <Redirect from="/" to="/home" />
                        </Switch>
                    </Container>
                </main>
                <Modal isOpen={this.props.modalToggle} className={"modal-lg "}>
                    <ModalHeader>Inicia seccion por favor</ModalHeader>
                    <ModalBody>{this.props.modal}</ModalBody>
                    <ModalFooter>
                        <Button color="primary">Do Something</Button>{" "}
                        <Button color="secondary">Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default DefaultLayout;
