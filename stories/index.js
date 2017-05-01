import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import ChangePane from '../components/ChangePane';

storiesOf('ChangePane', module)
  .add('default', () => (
    <ChangePane apiUrl="https://changepane.changepane.com/v1/1" />
  ))
  .add('inline', () => (
    <p>
      Recent updates <ChangePane apiUrl="https://changepane.changepane.com/v1/1" />
    </p>
  ))
  .add('pulsating dot', () => (
    <ChangePane
      apiUrl="https://changepane.changepane.com/v1/1"
      badgeStyle="PulsatingDot"
    />
  )).add('badge', () => (
    <ChangePane
      apiUrl="https://changepane.changepane.com/v1/1"
      badgeStyle="Badge"
    />
  ));
