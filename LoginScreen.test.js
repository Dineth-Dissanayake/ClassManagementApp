/* eslint-disable prettier/prettier */
import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16'
import {shallow, configure} from 'enzyme'
import Login from './screens/login';

configure({ adapter: new Adapter() });

it("renders correctly", () => {
    shallow(<Login />);
});

it('email check', () => {
    const login = shallow(<Login />)
    login.find('TextInput[keyboardType="email-address"]').simulate('change', {
      nativeEvent: {
        text: 'test@gmail.com',
      },
    });
    expect(login.find('TextInput[keyboardType="email-address"]').prop('value')).toEqual(
      'test@gmail.com',
    );
});

it('password Check', () => {
    const login = shallow(<Login />)
    login.find('TextInput[secureTextEntry=true]').simulate('change', {
      nativeEvent: {
        text: 'Abcd12345',
      },
    });
    expect(login.find('TextInput[secureTextEntry=true]').prop('value')).toEqual(
      'Abcd12345',
    );
});



