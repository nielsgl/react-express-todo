import * as React from 'react';
import {
	Admin,
	Resource,
	ListGuesser,
	EditGuesser,
	ShowGuesser,
} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import './App.css';

import { TaskCreate, TaskEdit, TaskList, TaskShow } from 'components/Tasks';
import { UserCreate, UserEdit, UserList, UserShow } from 'components/Users';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:5000');

class App extends React.Component {
	render() {
		return (
			<Admin dataProvider={dataProvider}>
				{/* <Resource name="users" list={ListGuesser} edit={EditGuesser} /> */}
				<Resource
					name="users"
					create={UserCreate}
					edit={UserEdit}
					list={UserList}
					show={UserShow}
				/>
				<Resource
					name="tasks"
					create={TaskCreate}
					edit={TaskEdit}
					list={TaskList}
					show={TaskShow}
				/>
				{/* <Resource name="todos" list={ListGuesser} edit={EditGuesser} /> */}
			</Admin>
		);
	}
}

export default App;
