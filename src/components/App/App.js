import * as React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import './App.css';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends React.Component {
	render() {
		return (
			<Admin dataProvider={dataProvider}>
				<Resource name="users" list={ListGuesser} />
				<Resource name="todos" list={ListGuesser} />
			</Admin>
		);
	}
}

export default App;
