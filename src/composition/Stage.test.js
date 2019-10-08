import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';

it('renders!', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Stage
    name="user"
    key="1234"
    img="http://homepages.cae.wisc.edu/~ece533/images/airplane.png"/>, div)
  ReactDOM.unmountComponentAtNode(div);
})
