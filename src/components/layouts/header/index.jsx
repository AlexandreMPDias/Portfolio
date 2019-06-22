import React, { Component } from "react";
import Style from "./headerStyle";
import { withRouter } from "react-router";

class Header extends Component {
  handleClick = whereTo => {
    this.props.history.push(whereTo);
  };

  childs = () => {
    const buttons = [
      {
        label: "Home",
        props: {
          onClick: () => this.handleClick("/")
        }
      },
      {
        label: "About Me",
        props: {
          onClick: () => this.handleClick("/aboutme")
        }
      },
      {
        label: "My Works",
        props: {
          onClick: () => this.handleClick("/myworks")
        }
      },
      {
        label: "Contact",
        props: {
          onClick: () => this.handleClick("/contact")
        }
      }
    ];

    return buttons.map(button => (
      <Style.item key={`header_${button.label}_98510928`} {...button.props}>
        {button.label}
      </Style.item>
    ));
  };

  render() {
    // return <Redirect from="/" to="/aboutme" />;
    return (
      <Style.container>
        {this.childs()}
        <div style={{ width: "2%" }} />
      </Style.container>
    );
  }
}

export default withRouter(Header);
