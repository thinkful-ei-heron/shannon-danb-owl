import React from 'react';
import ReactDOM from 'react-dom';
import Userlist from './composition/Userlist';
import renderer from 'react-test-renderer';


describe ('rendering Userlist', () => {
  it ('renders without crashing', () => {
    const div= document.createElement('div');
    ReactDOM.render(<Userlist />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it ('renders correctly', () => {
  const tree= renderer
  .create(<Userlist />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
})