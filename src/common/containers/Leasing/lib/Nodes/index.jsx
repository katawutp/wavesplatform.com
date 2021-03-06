import React from 'react';
import { connect } from 'react-redux';

import Margin from 'src/common/components/Margin';
import SectionTitleText from 'src/common/components/SectionTitleText';
import { Row, Col } from 'src/common/components/Grid';
import Link from 'src/common/components/Link';
import Hidden from 'src/common/components/Hidden';
import ContentContainer from 'src/common/components/ContentContainer';
import Typography from 'src/common/components/Typography';

import Node from './lib/Node';
import styles from './styles';

import { FormattedMessage } from 'react-intl';
import injectSheet from 'react-jss';

const WavesNodes = ({ classes, wavesTopNodes }) => {
    return wavesTopNodes && wavesTopNodes.length ? (
        <div>
            <Row>
                <ContentContainer>
                    <SectionTitleText
                        align="left"
                        title={
                            <Typography className={classes.title}>
                                <FormattedMessage
                                    id="leasing.nodes.title"
                                    defaultMessage="Top Waves nodes"
                                />
                            </Typography>
                        }
                        text={
                            <Typography className={classes.text}>
                                <FormattedMessage
                                    id="leasing.nodes.text"
                                    defaultMessage="Here you can find a list of the top nodes by WAVES balance. You can find a full list at {pywavesLink}"
                                    values={{
                                        pywavesLink: (
                                            <Link href="http://dev.pywaves.org/generators-weekly/" target="_blank">dev.pywaves.org</Link>
                                        ),
                                    }}
                                />
                            </Typography>
                        }
                    />
                </ContentContainer>
            </Row>


                <ContentContainer>
                    <Row>
                    {wavesTopNodes.map((node, i) => (
                        <Col xs={12} sm={6} lg={4} key={`node_${i}`}>
                            <Hidden only={i === wavesTopNodes.length - 1 ? ['sm', 'md'] : undefined}>
                                <Node {...node} />
                                <Margin bottom={3} />
                            </Hidden>
                        </Col>
                    ))}
                    </Row>
                </ContentContainer>

        </div>
    ) : null;
};

export default connect(({ wavesTopNodes }) => ({ wavesTopNodes }))(injectSheet(styles)(WavesNodes));
