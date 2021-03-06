import React from 'react';

import ThemeProvider from 'src/common/components/ThemeProvider';
import Layout from 'src/common/components/Layout';
import Section from 'src/common/components/Section';
import ContentContainer from 'src/common/components/ContentContainer';
import Wrapper from 'src/common/components/Wrapper';
import { Col } from 'src/common/components/Grid';
import BackgroundMainScreen from 'src/common/components/Background/MainScreen';
import HowToToken from 'src/common/components/HowToToken';
import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import UserCases from 'src/common/components/UserCases';
import Facts from 'src/common/components/Facts';
import DownloadClientDropdown from 'src/common/containers/DownloadClientDropdown';

// lib
import MainScreen from './lib/MainScreen';
import IssuingTokens from './lib/IssuingTokens';

// intl
import { FormattedMessage } from 'react-intl';

// styles
import injectSheet from 'react-jss';
import styles from './styles';

const PageLayout = ({ initialState, classes, onDropdownChange }) => (
  <Layout activeLink="product/token" hideCredentials>
    <BackgroundMainScreen type="image" src={require('./img/bg.jpg')}>
      <ContentContainer>
        <MainScreen />
      </ContentContainer>
    </BackgroundMainScreen>

    <Wrapper>
      <Section top={4}>
        <ContentContainer>
          <IssuingTokens />
        </ContentContainer>
      </Section>
      <Margin top={2} bottom={6}>
        <ContentContainer>
          <Typography type="display3Inverted">
            <FormattedMessage id="feedback.companiesReleased" />
          </Typography>
        </ContentContainer>
      </Margin>
    </Wrapper>

    <UserCases />
    <Wrapper>
      <Section top={4} bottom={4}>
        <ContentContainer>
          <Facts tokens={initialState.dexData.dexAssets} />
        </ContentContainer>
      </Section>
      <Section className={classes.bgBlue}>
        <ContentContainer>
          <HowToToken eventPage="ProductToken" eventSource="HowToToken" />
        </ContentContainer>
      </Section>
    </Wrapper>
  </Layout>
);

const Page = injectSheet(styles)(PageLayout);

const App = props => (
  <ThemeProvider>
    <Page {...props} />
  </ThemeProvider>
);

export default App;
