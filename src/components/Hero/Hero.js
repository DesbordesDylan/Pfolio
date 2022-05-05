import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <Img src="images/Dodz2.jpeg"></Img>
        Bienvenue sur <br />
        mon Portfolio Personnel
      </SectionTitle>
      <SectionText>
        Bonjour, je m'appelle Dylan DESBORDES. <br /> 
        Développeur Web Junior, je suis à la recherche d'une entreprise en alternance afin d'enrichir et d'acquérir de nouvelles compétences. 
      </SectionText>
      <Button onClick ={() => window.location = "mailto:desbordesdylan@yahoo.fr"}>Me contacter</Button>
    </LeftSection>
  </Section>
);

export default Hero;