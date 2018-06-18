import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { Spring } from "react-spring";

import * as Icon from "../components/svg/navbar";
import NavButton from "./NavButton";
import { Logo } from "../../common/components/svg/Logo";

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: ${props => props.bgColor};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 1024px;
  margin: 0 auto;
  text-align: right;
`;

const LogoWithText = styled.div`
  display: flex;
  align-items: center;
`;

const TopTitle = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 3px;
`;

const BottomTitle = styled.h1`
  font-size: 14px;
  font-weight: 300;
`;

const LogoText = styled.div`
  color: ${props => props.color}
  text-align: left;
  margin-left: 7px;
`;

export class Navbar extends PureComponent {
  state = {
    color: "#868a8e",
    bgColor: "rgba(255, 255, 255, 0.98)"
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  static getDerivedStateFromProps(props) {
    const isInSinglePostPage = /\/post\//;

    return isInSinglePostPage.test(props.location.pathname)
      ? {
          color: "white",
          bgColor: "rgba(255, 255, 255, 0)"
        }
      : {
          color: "#868a8e"
        };
  }

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = event => {
    const isInSinglePostPage = /\/post\//;

    if (
      window.scrollY > 240 &&
      isInSinglePostPage.test(this.props.location.pathname)
    ) {
      const opacity = 1 - (340 - window.scrollY) / 100;

      if (opacity < 0.25) {
        this.setState({
          color: "#e5e8ea"
        });
      } else if (opacity > 0.25 && opacity < 0.5) {
        this.setState({
          color: "#b7babc"
        });
      } else if (opacity > 0.5 && opacity < 0.75) {
        this.setState({
          color: "#a8acaf"
        });
      } else if (opacity <= 1) {
        this.setState({
          bgColor: `rgba(255, 255, 255, ${opacity})`
        });
      } else if (
        opacity > 1 &&
        this.state.bgColor !== "rgba(255, 255, 255, 0.98)"
      ) {
        this.setState({
          bgColor: "rgba(255, 255, 255, 0.98)",
          color: "#868a8e"
        });
      }
    }
  };

  render = () => {
    return (
      <NavContainer
        ref={el => (this.NavContainer = el)}
        bgColor={this.state.bgColor}
      >
        <Nav>
          <LogoWithText>
            <Logo color={this.state.color} />{" "}
            <LogoText color={this.state.color}>
              <TopTitle> GULBENES </TopTitle>{" "}
              <BottomTitle> MĀKSLASSKOLA </BottomTitle>{" "}
            </LogoText>{" "}
          </LogoWithText>{" "}
          <div>
            <NavButton label="Jaunumi" link="/" color={this.state.color} />{" "}
            <NavButton
              label="Par Mums"
              link="/"
              subLinks={[
                {
                  label: "Kontakti",
                  link: "",
                  icon: Icon.Contacts
                },
                {
                  label: "Par Skolu",
                  link: "",
                  icon: Icon.School
                },
                {
                  label: "Kolektīvs",
                  link: "",
                  icon: Icon.Peoples
                },
                {
                  label: "Klases",
                  link: "",
                  icon: Icon.Clases
                },
                {
                  label: "Vēsture",
                  link: "",
                  icon: Icon.History
                }
              ]}
              color={this.state.color}
            />{" "}
            <NavButton
              label="Mācības"
              link="/"
              subLinks={[
                {
                  label: "Skolas Dokumenti",
                  link: "",
                  icon: Icon.Documents
                },
                {
                  label: "Par Programmu",
                  link: "",
                  icon: Icon.Info
                },
                {
                  label: "Priekšmeti",
                  link: "",
                  icon: Icon.Subjects
                },
                {
                  label: "Stundu saraksts",
                  link: "",
                  icon: Icon.Timetable
                }
              ]}
              color={this.state.color}
            />{" "}
            <NavButton
              label="Projekti un Izstādes"
              link="/"
              color={this.state.color}
            />{" "}
            <NavButton label="Galerija" link="/" color={this.state.color} />{" "}
            <NavButton
              label="Biedrība &quot;Piektā Māja&quot;"
              link="/"
              subLinks={[
                {
                  label: "Kontakti",
                  link: "",
                  icon: Icon.Contacts
                },
                {
                  label: "Par Apvienību",
                  link: "",
                  icon: Icon.Info
                },
                {
                  label: "Kursi",
                  link: "",
                  icon: Icon.Course
                },
                {
                  label: "Projekti",
                  link: "",
                  icon: Icon.Idea
                }
              ]}
              color={this.state.color}
            />{" "}
          </div>{" "}
        </Nav>{" "}
      </NavContainer>
    );
  };
}

export const NavBarWithRouter = withRouter(props => <Navbar {...props} />);
