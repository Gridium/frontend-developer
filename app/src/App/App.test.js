import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import App from './';

describe('<App />', () => {

  const wrapper = mount(<App />);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  // STATE

  it('should have a default animated state', () => {
    const state = wrapper.state().animated;
    expect(state).not.toBeNull();
    expect(state).toBeDefined();
    // mounted component will already have updated state
    expect(state).not.toEqual([]);
  });

  // COMPONENT

  it('should have a default newDetails prop available to the class', () => {
    const prop = wrapper.instance().newDetails;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    // mounted component will already have updated this prop
    expect(prop).not.toEqual([]);
  });

  it('should have a default isMobile prop available to the class', () => {
    const prop = wrapper.instance().isMobile;
    expect(prop).not.toBeNull();
    expect(prop).toBeDefined();
    expect(prop).not.toEqual(true);
    // JSDOM is desktop
    expect(prop).toEqual(false);
  });

  it('should update the animated state onMount', () => {
    wrapper.setState({ animated: [] });
    expect(wrapper.state().animated).toEqual([]);

    wrapper.mount();
    setTimeout(() => {
      expect(wrapper.state().animated).not.toEqual([]);
    }, 400);
  });

  it('should update the newDetails prop with data given', () => {
    const func = wrapper.instance().getData;
    const data = {
      one: 1,
      two: { three: 3, four: 4 },
      three: [{threeThree: 33}]
    };

    expect(func).not.toBeNull();
    expect(func).toBeDefined();
    expect(() => func()).not.toThrow();

    func(false, data.two);
    // building off of mounted data (2 + 3 props given = 5)
    expect(wrapper.instance().newDetails.length).toEqual(5);
  });

  it('should return an Array when called', () => {
    const func = wrapper.instance().getSections;

    expect(func).not.toBeNull();
    expect(func).toBeDefined();
    expect(() => func()).not.toThrow();

    expect(func().length).not.toEqual(0);
    expect(func().length).toEqual(7); // 7 main sections of data
  });

});
