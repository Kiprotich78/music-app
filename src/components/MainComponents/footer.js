import React from 'react';
import { FooterStyles } from '../Styles/FooterStyles';

import TextStyle from '../Styles/TextStyle';
import { Socials } from '../Client constants/socials';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <TextStyle className="footer__text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </TextStyle>
        <ul className="footer__social">
          {Socials.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <TextStyle className="copy">
          @Music {new Date().getFullYear()} © John, Kipro
        </TextStyle>
      </div>
    </FooterStyles>
  );
}

export default Footer;
