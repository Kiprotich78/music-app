import React from 'react';
import { FooterStyles } from '../Styles/FooterStyles';

import TextStyle from '../Styles/TextStyle';
import { Socials } from '../Client constants/socials';

function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <TextStyle className="footer__text">
        Welcome to the rhythm of life. Let music be your escape, your inspiration, and your companion on this incredible journey. Tune in, turn it up, and let the melodies transport you to new heights of emotion and joy. Discover the beauty of diverse genres, unite with fellow music lovers, and let the power of harmonies and lyrics touch your soul. Remember, in the world of music, there are no boundaries – only endless possibilities. Enjoy the symphony of sounds and make every moment a musical masterpiece.
        </TextStyle>
        <ul className="footer__social">
          {Socials.map((item) => (
            <li key={item.name}>
              <a href={item.url}>{item.icon}</a>
            </li>
          ))}
        </ul>
        <TextStyle className="copy">
          @Music {new Date().getFullYear()} © Kiprotich
        </TextStyle>
      </div>
    </FooterStyles>
  );
}

export default Footer;
