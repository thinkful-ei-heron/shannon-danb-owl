import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './composition/Chat';
import renderer from 'react-test-renderer';


describe ('rendering Sidebar', () => {
  it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Chat />, div);
        ReactDOM.unmountComponentAtNode(div);
      
  });

  it ('renders correctly', () => {
      const tree = renderer
      .create(<Chat />)
      .toJSON();
      expect(tree).toMatchSnapshot();
  });
})

