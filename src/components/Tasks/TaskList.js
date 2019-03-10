import * as React from 'react';
import {
	List,
	Datagrid,
	TextField,
	BooleanField,
	NumberField,
	ReferenceField,
} from 'react-admin';

const TaskList = props => {
	return (
		<List {...props}>
			<Datagrid rowClick="show">
				<ReferenceField source="User.id" reference="users">
					<TextField source="username" />
				</ReferenceField>

				<TextField source="id" />
				<TextField source="title" />
				<BooleanField source="is_done" />
				{/* <NumberField source="User.id" /> */}
			</Datagrid>
		</List>
	);
};

export default TaskList;
