import React from 'react';
import { DiFirebase, DiReact } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Durant ma formation, j'ai eu le choix de me spécialiser entre trois technologies différentes: React, Symfony et WordPress. < br />
      Je me suis donc orienté sur Symfony. <br />
      Aujourd'hui, j'apprends React en autodidacte. < br />
      Une formation en alternance me permettrait de mettre en application les connaissances que j'ai acquises et d'acquérir de nouvelles compétences.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Expérience en autodidacte avec <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Expérience avec <br />
            Symfony
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        
        <ListContainer>
          <ListTitle></ListTitle>
          <ListParagraph>
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;