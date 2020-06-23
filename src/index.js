import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const users = [
	{"name": "Alex", "phone": "1234584"},
	{"name": "Jack", "phone": "6846846"},
	{"name": "Arman", "phone": "7984849"},
	{"name": "Fedor", "phone": "1234584"},
	{"name": "Lebron", "phone": "6846846"},
	{"name": "Messi", "phone": "7984849"},
]

ReactDOM.render(
  <React.StrictMode>
    <App users={users} />
  </React.StrictMode>,
  document.getElementById('root')
);

