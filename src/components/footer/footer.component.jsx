import React from 'react';

import { footerData } from '../../data/footer';
import { FooterContainer, FooterHeader, FooterContent } from './footer.style';

function Footer() {
  return (
    <FooterContainer>
      <FooterHeader large>Questions ? Contact us.</FooterHeader>
      <FooterContent>
        {footerData.map((items, index) => (
          <div key={index}>{items}</div>
        ))}
      </FooterContent>
      <FooterHeader large>
        Netflix Kenya by{' '}
        <a href='https://www.linkedin.com/in/devabubakar/'> Abubakar </a>
      </FooterHeader>
    </FooterContainer>
  );
}

export default Footer;
