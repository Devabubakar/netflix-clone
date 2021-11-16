import React from 'react';
import { footerData } from '../../data/footer';
import { FooterContainer, FooterHeader, FooterContent } from './footer.style';

function Footer() {
  return (
    <FooterContainer>
      <FooterHeader large>Questions ? Contact us.</FooterHeader>
      <FooterContent>
        {footerData.map((items, index) => (
          <div>{items}</div>
        ))}
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
