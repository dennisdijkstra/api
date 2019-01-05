import React from 'react';
import renderer from 'react-test-renderer';
import Link from './Link';

it('renders correctly', () => {
    const tree = renderer
        .create(<Link to="/" />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
