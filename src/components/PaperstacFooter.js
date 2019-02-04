import { MJMLElement } from 'mjml-core';
import React, { Component } from 'react';
import Section from 'mjml-section';
import Column from 'mjml-column';
import Image from 'mjml-image';
import Text from 'mjml-text';

const tagName = 'paperstac-footer';
const parentTag = ['mj-container'];
const endingTag = false;
const defaultMJMLDefinition = {
  content: '',
  attributes: {
    source: '',
    campaign: '',
    'unsubscribe-url': ''
  },
};

@MJMLElement
class CustomMjmlComponent extends Component {

  render() {
    const { mjAttribute } = this.props;
    const source = (mjAttribute('source')) ? `&utm_source=${mjAttribute('source')}` : '';
    const campaign = (mjAttribute('campaign')) ? `&utm_campaign=${mjAttribute('campaign')}` : '';
    const paperstacUrl = `https://paperstac.com?utm_medium=email${source}${campaign}`;
    const blogUrl = `https://blog.paperstac.com?utm_medium=email${source}${campaign}`;

    const unsubscribeLinkHtml = (mjAttribute('unsubscribe-url') !== '')
      ? (<a href={mjAttribute('unsubscribe-url')} target="_blank"
            style={{ color: '#499DF3', marginLeft: '20px' }}>
        Unsubscribe
      </a>) : '';

    return (<Section>
      <Column width="100%">
        <Text font-size="13" color="#999999" align="center" padding-bottom="5">
          © 2019 PaperStac LLC. All rights reserved.
        </Text>
        <Text font-size="13" color="#999999" align="center" padding-top="0">
          300 S Orange Ave, Suite 1000, Orlando, FL 32801
        </Text>
        <Text font-size="13" align="center">
          <a href="https://www.facebook.com/paperstac/" target="_blank"
             style={{ color: '#499DF3', marginRight: '20px' }}>
            Facebook
          </a>
          <a href="https://twitter.com/paper_stac" target="_blank"
             style={{ color: '#499DF3' }}>
            Twitter
          </a>
          {unsubscribeLinkHtml}
        </Text>
        <Text font-size="13" color="#999999" align="center">
          You received this email because you signed up for <a href={`${paperstacUrl}&utm_content=footerTextLink`} target="_blank" style={{ color: '#999999' }}>Paperstac</a>.
        </Text>
        <Image
          width="152px"
          height="30px"
          href={`${paperstacUrl}&utm_content=footerLogoLink`}
          src="http://res.cloudinary.com/paperstac/image/upload/v1512675709/email-assets/paperstac-footer-logo.png"/>
      </Column>
    </Section>);
  }

}

CustomMjmlComponent.tagName = tagName;
CustomMjmlComponent.parentTag = parentTag;
CustomMjmlComponent.endingTag = endingTag;
CustomMjmlComponent.defaultMJMLDefinition = defaultMJMLDefinition;

export default CustomMjmlComponent
