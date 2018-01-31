import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import Rating from './Rating';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe('<Rating />', () => {

it('renders without crashing', () => {

  const percent = "60"

  const div = document.createElement('div');
  ReactDOM.render(<Rating percent={percent}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
});
