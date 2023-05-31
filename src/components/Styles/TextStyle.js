import React from 'react';
import { TextStyles } from './TextStyles';

function TextStyle({ children, ...props }) {
  return <TextStyles {...props}>{children}</TextStyles>;
}

export default TextStyle;
