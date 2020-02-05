import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SimilarHomes from '../components/SimilarHomes.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('<SimilarHomes/>', () => {
  it('Checks if SimilarHomes component is rendering without crashing', () => {
    const wrapper = shallow(<SimilarHomes />);
  });
});
