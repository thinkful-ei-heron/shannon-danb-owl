import React from 'react';
import ReactDOM from 'react-dom';
import Useritem from './composition/Useritem';
import renderer from 'react-test-renderer';


describe ('rendering Useritem', () => {
  it ('renders without crashing', () => {
    const div= document.createElement('div');
    ReactDOM.render(<Useritem 
      key={1}
      avatar='https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
      name='Johnny'
      onStage='true'
      inSession= 'false' 
      />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

it ('renders correctly (onStage is true, in Session is false)', () => {
  const tree= renderer
  .create(<Useritem
    key={1}
    avatar='https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
    name='Johnny'
    onStage='true'
    inSession= 'false'  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it ('renders correctly (onStage and inSession are both false)', () => {
  const tree= renderer
  .create(<Useritem
    key={1}
    avatar='https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
    name='Johnny'
    onStage='false'
    inSession= 'false'  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});

it ('renders correctly (onStage is false, inSession is true)', () => {
  const tree= renderer
  .create(<Useritem
    key={1}
    avatar='https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1'
    name='Johnny'
    onStage='false'
    inSession= 'true'  />)
  .toJSON();
  expect(tree).toMatchSnapshot();
});


})