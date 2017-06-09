import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import Home from '../../src/containers/home';

const middlewares = [thunk,promise];
const mockStore = configureStore(middlewares);

describe('Home' , () => {
  let component, store;
  
  beforeEach(() => {
    store = mockStore({
      rootReducer: {
        albums: {}
      }
    });
    component = mount(<Home store={store}/>);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
  
  it('has a input', () => {
    expect(component.find('input').length).to.equal(1);
  });
  
  it('has a button', () => {
    expect(component.find('button').length).to.equal(1);
  });
});
