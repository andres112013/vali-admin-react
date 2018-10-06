import React, { Component } from "react";
import PropTypes from "prop-types";


class CircleAnimation extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className="m-loader mr-2 mx-auto"
                style={{ width: this.props.width }}
            >
                <svg className="m-circular" viewBox="25 25 50 50">
                    <circle
                        className="path"
                        cx="50"
                        cy="50"
                        r="20"
                        fill="none"
                        strokeWidth="4"
                        strokeMiterlimit="10"
                    />
                </svg>
            </div>
        );
    }
}

CircleAnimation.propTypes = {
    grid: PropTypes.bool
};

CircleAnimation.defaultProps = {
    grid: false
};
export default CircleAnimation;
