import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../../src/App/App';
import '../../src/App/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});