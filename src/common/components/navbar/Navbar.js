import React, { useState, useEffect, useRef } from "react";
import {
  withRouter,
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


export const  Navbar = ({ location: { pathname }} ) => {
  const [ color, setColor ] = useState('#666');
  const [ bgColor, setBgColor ] = useState('rgba(255, 255, 255, 1)');
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
      } else if (opacity > 1 && bgColor !== 'rgba(255, 255, 255, 1)') {
        setBgColor('rgba(255, 255, 255, 1)');
      }
    }
  }, [windowYScroll]);

  useEffect(() => {
    if (isInSinglePostPage.test(pathname)) {
      setColor('#fff');
      setBgColor('rgba(255, 255, 255, 0)');
    } else {
      setColor('#666');
      setBgColor('rgba(255, 255, 255, 1)');
    }
  }, [pathname])

  return (
    <NavContainer
      ref={_container}
      bgColor={bgColor}
    >
      <Nav>
        <LogoWithText to='/'>
          <Logo color={color}/>
          <LogoText color={color}>
            <TopTitle>GULBENES</TopTitle>
            <BottomTitle>MĀKSLASSKOLA</BottomTitle>
          </LogoText>
        </LogoWithText>
        <div>
          <NavButton
            label="Jaunumi"
            path='/'
            color={color}
          />
          <NavButton
            label="Par Mums"
            path='/par-mums'
            subLinks = {[
              {
                label: "Kontakti",
                path: '/par-mums',
                icon: Icon.Contacts
              },
              {
                label: "Par Skolu",
                path: '/par-mums',
                icon: Icon.School
              },
              {
                label: "Kolektīvs",
                path: '/par-mums',
                icon: Icon.Peoples
              },
              {
                label: "Klases",
                path: '/par-mums',
                icon: Icon.Clases
              },
              {
                label: "Vēsture",
                path: '/par-mums',
                icon: Icon.History
              }
            ]}
            color={color}
          />
          <NavButton
            label="Mācības"
            path='/macibas'
            subLinks = {[
              {
                label: "Skolas Dokumenti",
                path: '/macibas',
                icon: Icon.Documents
              },
              {
                label: "Par Programmu",
                path: '/macibas',
                icon: Icon.Info
              },
              {
                label: "Priekšmeti",
                path: '/macibas',
                icon: Icon.Subjects
              },
              {
                label: "Stundu saraksts",
                path: '/macibas',
                icon: Icon.Timetable
              }
            ]}
            color={color}
          />
          <NavButton
            label="Projekti un Izstādes"
            path='/projekti'
            color={color}
          />
          <NavButton
            label="Biedrība &quot;Piektā Māja&quot;"
            path='/piekta-maja'
            subLinks={[
              {
                label: "Kontakti",
                path: '/piekta-maja',
                icon: Icon.Contacts
              },
              {
                label: "Par Apvienību",
                path: '/piekta-maja',
                icon: Icon.Info
              },
              {
                label: "Kursi",
                path: '/piekta-maja',
                icon: Icon.Course
              },
              {
                label: "Projekti",
                path: '/piekta-maja',
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

export const NavbarWithRouter = withRouter(Navbar);
