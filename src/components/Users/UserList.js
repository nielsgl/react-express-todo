import * as React from 'react';
import {
	List,
	Datagrid,
	TextField,
	BooleanField,
	NumberField,
} from 'react-admin';

const UserList = props => {
	return (
		<List {...props}>
			<Datagrid rowClick="show">
				<TextField source="id" />
				<TextField source="username" />
				{/* <BooleanField source="isDone" />
				<NumberField source="User.id" /> */}
			</Datagrid>
		</List>
	);
};

export default UserList;
