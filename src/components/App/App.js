import * as React from 'react';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import './App.css';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

class App extends React.Component {
	render() {
		return (
			<Admin dataProvider={dataProvider}>
				<Resource name="users" list={ListGuesser} edit={EditGuesser} />
				<Resource name="todos" list={ListGuesser} edit={EditGuesser} />
			</Admin>
		);
	}
}

export default App;
