import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow } from 'enzyme';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

describe('<App />', () => {

it('should display home page with unauthenticated user', () => {
  const user = { id: null }

  const app = shallow(
    <App user={user} />
  );

  // console.log(app.debug())

  // expect(app.find('AppBar')).toHaveLength(1);
  expect(app.find('Link')).toHaveLength(1);

  expect(app.find('.g-signin2')).toHaveLength(1);

  })
});
