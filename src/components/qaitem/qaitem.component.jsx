import React, { useState } from 'react';
import {
  QASection,
  QAHeader,
  QAItems,
  QAItemHeader,
  QAItemParagraph,
  QAContent,
} from './qaitem.style';
import CTAInput from '../input/input.component';
import { FaPlus, FaTimes } from 'react-icons/fa';
import { QA } from '../../data/QA';


function ListItem({ qaitem, clicked, toggleItem, index }) {
  return (
    <div>
      <QAItems onClick={() => toggleItem(index)}>
        <QAContent>
          <QAItemHeader>{qaitem.question}</QAItemHeader>
          {clicked === index ? <FaTimes size={30} /> : <FaPlus size={30} />}
        </QAContent>
      </QAItems>
      {clicked === index ? (
        <QAItemParagraph>{qaitem.answer}</QAItemParagraph>
      ) : null}
    </div>
  );
}
function QAItem() {
  const [clicked, setClicked] = useState(false);
  const toggleItem = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <QASection>
      <QAHeader>Frequently Asked Questions</QAHeader>
      {QA.map((qaitem, index) => (
        <ListItem
          qaitem={qaitem}
          key={qaitem.id}
          clicked={clicked}
          toggleItem={toggleItem}
          index={index}
        />
      ))}

      <QAHeader small>
        Ready to watch ? Enter your email to create or restart your membership
      </QAHeader>
      <CTAInput  placeholder='Email address' />
    </QASection>
  );
}

export default QAItem;
