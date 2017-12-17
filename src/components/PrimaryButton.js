import { MJMLElement } from 'mjml-core';
import React, { Component } from 'react';

const tagName = 'primary-button';
const parentTag = ['mj-section', 'mj-column'];
const endingTag = true;
const defaultMJMLDefinition = {
  content: '',
  attributes: {
    text: 'Paperstac',
    url: 'https://paperstac.com',
    'padding-top': '20px',
    'padding-bottom': '20px',
  }
};

@MJMLElement
class CustomMjmlComponent extends Component {

  render() {
    const { mjAttribute } = this.props;

    return (
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style={{
            paddingTop: mjAttribute('padding-top'),
            paddingBottom: mjAttribute('padding-bottom')
          }}>
            <table border="0" cellspacing="0" cellpadding="0" style={{ margin: '0 auto' }}>
              <tr>
                <td align="center" style={{
                  borderRadius: '3px',
                  backgroundColor: '#047bb7',
                  boxShadow: '0 7px 5px -4px rgba(0, 0, 0, 0.2)'
                }} bgcolor="#047bb7">
                  <a
                    href={mjAttribute('url')}
                    target="_blank"
                    style={{
                      fontSize: '16px',
                      color: '#ffffff',
                      textDecoration: 'none',
                      borderRadius: '3px',
                      padding: '17px 60px',
                      display: 'inline-block',
                      fontWeight: 'bold',
                      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
                    }}>{mjAttribute('text')}</a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    );
  }

}

CustomMjmlComponent.tagName = tagName;
CustomMjmlComponent.parentTag = parentTag;
CustomMjmlComponent.endingTag = endingTag;
CustomMjmlComponent.defaultMJMLDefinition = defaultMJMLDefinition;

export default CustomMjmlComponent
