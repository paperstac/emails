import { MJMLElement } from 'mjml-core';
import React, { Component } from 'react';
import Column from 'mjml-column';
import Text from 'mjml-text';

const tagName = 'paperstac-signature';
const parentTag = ['mj-section'];
const endingTag = false;
const defaultMJMLDefinition = {
  content: ''
};

@MJMLElement
class CustomMjmlComponent extends Component {

  render() {
    return (<Column>
      <Text font-size="16" line-height="1.5" color="#5F6C72" font-weight="bold" align="center">
        <img src="http://res.cloudinary.com/paperstac/image/upload/v1513465471/email-assets/signature-heart.png"
             style={{ width: '18px', height: '16px', position: 'relative', top: '2px', marginRight: '7px' }}/>
        The Paperstac Team
      </Text>
    </Column>);
  }

}

CustomMjmlComponent.tagName = tagName;
CustomMjmlComponent.parentTag = parentTag;
CustomMjmlComponent.endingTag = endingTag;
CustomMjmlComponent.defaultMJMLDefinition = defaultMJMLDefinition;

export default CustomMjmlComponent
