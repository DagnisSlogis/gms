import React, { useState, useEffect, useRef } from "react";
import {
  withRouter
} from "react-router-dom";

import { useWindowYScroll } from 'hooks';

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
  const [ windowYScroll ] = useWindowYScroll();
  const _container = useRef(null);
  const isInSinglePostPage = /\/post\//;

  useEffect(() => {
    if (isInSinglePostPage.test(pathname)) {
      const opacity = 1 - (280 - windowYScroll) / 100;

      if (opacity < 0.25) {
        setColor('#fff')
      } else if (opacity > 0.25 && opacity < 0.5) {
        setColor('#7f7f7f')
      } else {
        setColor('#666');
      }

      if (opacity <= 1) {
        setBgColor(`rgba(255, 255, 255, ${opacity})`)
      } else if (opacity > 1 && bgColor !== 'rgba(255, 255, 255, 0.98)') {
        setBgColor('rgba(255, 255, 255, 0.98)');
      }
    }
  }, [windowYScroll]);

  useEffect(() => {
    if (isInSinglePostPage.test(pathname)) {
      setColor('#fff');
      setBgColor('rgba(255, 255, 255, 0)');
    } else {
      setColor('#666');
      setBgColor('rgba(255, 255, 255, 0.98)');
    }
  }, [pathname])

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
