import * as React from 'react';
import {
	Create,
	SimpleForm,
	TextInput,
	BooleanField,
	NumberField,
} from 'react-admin';

const UserCreate = props => {
	return (
		<Create {...props}>
			<SimpleForm>
				{/* <TextField source="id" /> */}
				<TextInput source="username" />
				{/* <BooleanField source="isDone" /> */}
				{/* <NumberField source="User.id" /> */}
			</SimpleForm>
		</Create>
	);
};

export default UserCreate;
