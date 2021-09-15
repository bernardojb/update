import React, { Component } from "react";
import FeatherIcon from 'feather-icons-react';

class SectionTitleLeft extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.children ? (
          this.props.children
        ) : (
          <h4 className="title mb-5">{this.props.title}</h4>
        )}
        <p className="text-dark mb-5">{this.props.desc}</p>
        <ul
          className="list-unstyled text-dark"
          name="featurelines"
        >
          {this.props.features.map((feature, key) => (
            <li key={key} className="mb-3">
              <span className="text-primary h5 me-2">
                <FeatherIcon icon={feature.icon} size="20" className="align-middle" />
              </span>
              {feature.title}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default SectionTitleLeft;
