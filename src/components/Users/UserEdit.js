import * as React from 'react';
import {
	Edit,
	SimpleForm,
	TextInput,
	BooleanField,
	NumberField,
	DisabledInput,
} from 'react-admin';

const UserEdit = props => {
	return (
		<Edit {...props}>
			<SimpleForm>
				<DisabledInput source="id" />
				<TextInput source="username" />
				{/* <BooleanField source="isDone" />
				<NumberField source="User.id" /> */}
			</SimpleForm>
		</Edit>
	);
};

export default UserEdit;
