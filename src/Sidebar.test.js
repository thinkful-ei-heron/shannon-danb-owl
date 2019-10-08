import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './composition/Sidebar';
import renderer from 'react-test-renderer';


describe ('rendering Sidebar', () => {
  it ('renders without crashing', () => {
    const div= document.createElement('div');
    ReactDOM.render(<Sidebar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it ('renders correctly', () => {
  const tree= renderer
  .create(<Sidebar />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});
})