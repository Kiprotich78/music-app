import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding: 1rem 0 1rem 0;
  text-align: center;
  background-color: #000000;
  
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 900px;
    color: white;
    font-family: Times New Roman;
    font-size: 10;

  }

  .footer__menu {
    margin-top: 1rem;
    background-color: white;

    li {
      display: inline-block;
      margin: 0 1rem;

      a {
        color: white;
        font-size: 1.6rem;
      }
    }
  }
  .footer__social {
    margin-top: 1.5rem;
    color: white;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copy {
    margin-top: 1rem;
    color: white;
    font-size: 1.2rem;
    font-family: Times New Roman;
    font-size: 10;
  }
`;
