import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Arrow from '../components/Arrow.jsx';
import SimilarHome from '../components/SimilarHome.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const similarHome = {
  images: [
    'https://8bnb-homes.s3-us-west-1.amazonaws.com/14.jpg',
    'https://8bnb-homes.s3-us-west-1.amazonaws.com/3.jpg',
    'https://8bnb-homes.s3-us-west-1.amazonaws.com/19.jpg',
    'https://8bnb-homes.s3-us-west-1.amazonaws.com/19.jpg',
    'https://8bnb-homes.s3-us-west-1.amazonaws.com/10.jpg',
  ],
  _id: '5e2f50210394516bc02b1911',
  homeId: 6,
  numberOfBeds: 4,
  formType: 'Entire cottage, Entire apartment, Entire House, Private Room, Shared Room',
  body: 'impactful',
  price: 152.06,
  rating: 3,
  numberOfRatings: 165,
  heart: false,
};


describe('<SimilarHome/>', () => {
  beforeEach(() => wrapper.setProps({similarHome: similarHome, images: similarHome.images});
  
  //images is not defined? why?
  it('Checks if SimilarHome component is rendering without crashing', () => {
    const wrapper = shallow(<SimilarHome />);
    // console.log('wrapper is ', wrapper.debug());
  });

  it('Check if invoking previousSlide will cause the state of currentImgIdx to decrease by 1', () => {
    const wrapper = shallow(<SimilarHome/>);
    const instance = wrapper.instance();
    wrapper.setState({curerntImgIdx: 2});
    instance.previousSlide();
    expect(this.state.currentImgIdx).toEqual(1);
  });

  it('Check if invoking nextSlide will cause the state of currentImgIdx to increase by 1', () => {
    const wrapper = shallow(<SimilarHome/>);
    const instance = wrapper.instance();
    wrapper.setState({curerntImgIdx: 2});
    instance.nextSlide();
    expect(this.state.currentImgIdx).toEqual(3);
  });

  it('Check if props is a object', () => {
    const wrapper = shallow(<SimilarHome/>);
    const isArray = typeof (wrapper) === 'array';
    expect(isArray).toBeTruthy();
  });
});
