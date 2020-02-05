import App from '../components/App.jsx';
import SimilarHome from '../components/SimilarHome.jsx';
import React from 'react';
import Enzyme, { shallow, mount, render} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import axios from 'axios';

Enzyme.configure({ adapter: new EnzymeAdapter() });

// the describe function is the test suite
describe('<App/>', () => {
  it('Checks if App component is rendering without crashing', () => {
    const wrapper = shallow(<App/>);
  });

  it('Renders one <SimilarHomes/> component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find('SimilarHomes')).toHaveLength(1);
  });

  it('Has a state that is defined', () => {
    const wrapper = shallow(<App/>);
    axios.get('/homes')
      .then(response => {
        wrapper.setState({
          homes: response.data[0].homes
        });
      })
      .catch(function (error) {
      });
    expect(wrapper.state('homes')).toBeDefined();
  });

  // it('Calls componentDidMount', () => {
  //   jest.spyOn(App.prototype, 'componentDidMount');
  //   const wrapper = shallow(<App/>);
  //   expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
  // });

  // it('Checks if SimilarHome component is rendering without crashing', () => {
  //   const wrapper = mount(<SimilarHome/>);
  // });




});