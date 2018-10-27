import React, {
  PureComponent
} from "react";
import {
  withRouter
} from "react-router-dom";

import * as Icon from "../svg/navbar";
import { NavButton } from '../button';
import {
  Logo
} from "../svg/Logo";
import {
  NavContainer,
  Nav,
  LogoWithText,
  LogoText,
  TopTitle,
  BottomTitle,
} from './Navbar.style';

export class Navbar extends PureComponent {
  state = {
    color: "#666",
    bgColor: "rgba(255, 255, 255, 0.98)"
  };

  static getDerivedStateFromProps({ location: { pathname }}) {
    const isInSinglePostPage = /\/post\//;

    return isInSinglePostPage.test(pathname) ? {
      color: "white",
      bgColor: "rgba(255, 255, 255, 0)"
    } : {
      color: "#666",
      bgColor: "rgba(255, 255, 255, 0.98)"
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

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
          color: "#666"
        });
      }
    }
  };

  render = () => {
    const { bgColor, color } = this.state;

    return (
      <NavContainer
        ref={(el) => (this.NavContainer = el)}
        bgColor={bgColor}
      >
        <Nav>
          <LogoWithText>
            <Logo color={color}/>
            <LogoText color={color}>
              <TopTitle>GULBENES</TopTitle>
              <BottomTitle>MĀKSLASSKOLA</BottomTitle>
            </LogoText>
          </LogoWithText>
          <div>
            <NavButton
              label="Jaunumi"
              link="/"
              color={color}
            />
            <NavButton
              label="Par Mums"
              link="/"
              subLinks = {[
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
              color={color}
            />
            <NavButton
              label="Mācības"
              link="/"
              subLinks = {[
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
              color={color}
            />
            <NavButton
              label="Projekti un Izstādes"
              link="/"
              color={color}
            />
            <NavButton
              label="Galerija"
              link="/"
              color={color}
            />
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
              color={color}
            />
          </div>
        </Nav>
      </NavContainer>
    );
  };
}

export const NavbarWithRouter = withRouter((props) => <Navbar {...props}/>);
