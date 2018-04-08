import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import NavButton from "./NavButton";

const NavContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  .white {
    background: white;
  }
`;

const Nav = styled.nav`
  max-width: 1024px;
  margin: 0 auto;
  text-align: right;
`;

export default class Navbar extends PureComponent {
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = event => {
    // if (window.scrollY > 340) this.NavContainer.classList.add("white");
    // else {
    // }
  };

  render = () => {
    return (
      <NavContainer ref={el => (this.NavContainer = el)}>
        <Nav>
          <NavButton label="Jaunumi" link="/" />
          <NavButton
            label="Par Mums"
            link="/"
            subLinks={[
              { label: "Kontakti", link: "", type: "contacts" },
              { label: "Par Skolu", link: "", type: "school" },
              { label: "Kolektīvs", link: "", type: "peoples" },
              { label: "Klases", link: "", type: "clases" },
              { label: "Vēsture", link: "", type: "history" }
            ]}
          />
          <NavButton
            label="Mācības"
            link="/"
            subLinks={[
              { label: "Skolas Dokumenti", link: "", type: "documents" },
              { label: "Par Programmu", link: "", type: "info" },
              { label: "Priekšmeti", link: "", type: "subjects" },
              { label: "Stundu saraksts", link: "", type: "timetable" }
            ]}
          />
          <NavButton label="Projekti un Izstādes" link="/" />
          <NavButton label="Galerija" link="/" />
          <NavButton
            label="Biedrība &quot;Piektā Māja&quot;"
            link="/"
            subLinks={[
              { label: "Kontakti", link: "", type: "contacts" },
              { label: "Par Apvienību", link: "", type: "info" },
              { label: "Kursi", link: "", type: "course" },
              { label: "Projekti", link: "", type: "idea" }
            ]}
          />
        </Nav>
      </NavContainer>
    );
  };
}
