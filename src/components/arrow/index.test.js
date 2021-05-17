import React from 'react';
import renderer from 'react-test-renderer';
import Arrow from './index.js';

test('Print arrow', () => {
const onClick = jest.fn();
  const component = renderer.create(
    <Arrow handleClick={onClick}/>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});