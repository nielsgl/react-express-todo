import * as React from 'react';
import {
	Show,
	SimpleShowLayout,
	TextField,
	BooleanField,
	NumberField,
	DisabledInput,
	ReferenceField,
} from 'react-admin';

const TaskShow = props => {
	return (
		<Show {...props}>
			<SimpleShowLayout>
				{/* <DisabledInput source="id" /> */}
				<ReferenceField source="User.id" reference="users">
					<TextField source="username" />
				</ReferenceField>
				<TextField source="title" />
				<BooleanField source="is_done" />
				{/* <NumberField source="User.id" /> */}
			</SimpleShowLayout>
		</Show>
	);
};

export default TaskShow;
