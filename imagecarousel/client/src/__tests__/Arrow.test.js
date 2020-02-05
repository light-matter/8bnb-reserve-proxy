import Arrow from '../components/Arrow.jsx';
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const props = {
  direction: 'right',
  handleSubmit: () => {}
}

describe('<Arrow/>', () => {
  it('Checks if Arrow component is rendering without crashing', () => {
    const wrapper = shallow(<Arrow {...props}/>);
  });

  //why is this failing?
  it('Checks if there is a `.arrow`', () => {
    const wrapper = shallow(<Arrow/> {...props});
    const appComponent = wrapper.find('.arrow');
    expect(appComponent.length).toBe(1);
  });


});