import * as React from 'react';
import {
	Show,
	SimpleShowLayout,
	TextField,
	BooleanField,
	NumberField,
} from 'react-admin';

const UserShow = props => {
	return (
		<Show {...props}>
			<SimpleShowLayout>
				<TextField source="id" />
				<TextField source="username" />
				{/* <BooleanField source="isDone" />
				<NumberField source="User.id" /> */}
			</SimpleShowLayout>
		</Show>
	);
};

export default UserShow;
