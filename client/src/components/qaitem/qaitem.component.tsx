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

interface Qaitem {
  question: string;
  answer: string;
}
interface Props {
  qaitem: Qaitem;
  clicked: boolean | number | null;
  toggleItem: Function;
  index: number;
}

function ListItem({ qaitem, clicked, toggleItem, index }: Props) {
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
  const [clicked, setClicked] = useState<boolean | null>(false);
  const toggleItem = React.useCallback(
    (index) => {
      if (clicked === index) {
        return setClicked(null);
      }
      setClicked(index);
    },
    [clicked]
  );

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
      <CTAInput placeholder='Email address' />
    </QASection>
  );
}

export default React.memo(QAItem);
