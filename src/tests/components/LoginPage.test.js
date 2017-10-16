import React from 'react';
import { shallow } from 'enzyme';

import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startGoogleLogin on button click', () => {
  const startGoogleLogin = jest.fn();
  const wrapper = shallow(<LoginPage startGoogleLogin={startGoogleLogin}/>);
  const googleLoginButton = wrapper.find('button').at(0);
  expect(googleLoginButton.text()).toEqual('Login with Google');
  googleLoginButton.simulate('click');
  expect(startGoogleLogin).toHaveBeenCalled();
});

test('should call startFacebookLogin on button click', () => {
  const startFacebookLogin = jest.fn();
  const wrapper = shallow(<LoginPage startFacebookLogin={startFacebookLogin}/>);
  const facebookLoginButton = wrapper.find('button').at(1);
  expect(facebookLoginButton.text()).toEqual('Login with Facebook');
  facebookLoginButton.simulate('click');
  expect(startFacebookLogin).toHaveBeenCalled();
});
