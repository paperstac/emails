import { MJMLElement } from 'mjml-core';
import React, { Component } from 'react';
import Section from 'mjml-section';
import Column from 'mjml-column';
import Image from 'mjml-image';

const tagName = 'paperstac-header';
const parentTag = ['mj-container'];
const endingTag = false;
const defaultMJMLDefinition = {
  content: '', attributes: { source: '', campaign: '' },
};

@MJMLElement
class CustomMjmlComponent extends Component {

  render() {
    const { mjAttribute } = this.props;
    const source = (mjAttribute('source')) ? `&utm_source=${mjAttribute('source')}` : '';
    const campaign = (mjAttribute('campaign')) ? `&utm_campaign=${mjAttribute('campaign')}` : '';
    const paperstacUrl = `https://paperstac.com?utm_medium=email${source}${campaign}`;

    return (
      <Section {...this.props}>
        <Column>
          <Image
            width="96px"
            height="60px"
            href={`${paperstacUrl}&utm_content=headerLogoLink`}
            src="http://res.cloudinary.com/paperstac/image/upload/v1512674786/email-assets/paperstac-header-logo.png"
            padding="20px"
          />
        </Column>
      </Section>
    );
  }

}

CustomMjmlComponent.tagName = tagName;
CustomMjmlComponent.parentTag = parentTag;
CustomMjmlComponent.endingTag = endingTag;
CustomMjmlComponent.defaultMJMLDefinition = defaultMJMLDefinition;

export default CustomMjmlComponent
