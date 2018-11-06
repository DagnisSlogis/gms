import React, { useState, useEffect, useRef } from "react";
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


export function Navbar(props) {
  const {
    location: { pathname }
  } = props;
  const [ color, setColor ] = useState('#666');
  const [ bgColor, setBgColor ] = useState('rgba(255, 255, 255, 0.98)');
  const _container = useRef(null);
  const isInSinglePostPage = /\/post\//;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isInSinglePostPage.test(pathname)) {
      setColor('white');
      setBgColor('rgba(255, 255, 255, 0)');
    } else {
      setColor('#666');
      setBgColor('rgba(255, 255, 255, 0.98)');
    }
  }, pathname)

  function handleScroll() {
    const { scrollY } = window;

    if (scrollY > 240 && isInSinglePostPage.test(pathname)) {
      const opacity = 1 - (340 - scrollY) / 100;

      if (opacity < 0.25) {
        setColor('#e5e8ea')
      } else if (opacity > 0.25 && opacity < 0.5) {
        setColor('#b7babc')
      } else if (opacity > 0.5 && opacity < 0.75) {
        setColor('#a8acaf')
      } else if (opacity <= 1) {
        setBgColor(`rgba(255, 255, 255, ${opacity})`)
      } else if (opacity > 1 && bgColor !== 'rgba(255, 255, 255, 0.98)') {
        setBgColor('rgba(255, 255, 255, 0.98)');
        setColor('#666');
      }
    }
  };

  return (
    <NavContainer
      ref={_container}
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
}

export const NavbarWithRouter = withRouter((props) => <Navbar {...props}/>);
