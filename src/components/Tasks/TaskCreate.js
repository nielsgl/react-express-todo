import * as React from 'react';
import {
	Create,
	SimpleForm,
	TextInput,
	BooleanInput,
	NumberField,
	ReferenceInput,
	SelectInput,
} from 'react-admin';

const TaskCreate = props => {
	return (
		<Create {...props}>
			<SimpleForm>
				<ReferenceInput source="user_id" reference="users">
					<SelectInput optionText="username" />
				</ReferenceInput>
				{/* <TextField source="id" /> */}
				<TextInput source="title" />
				<BooleanInput source="is_done" />
				{/* <NumberField source="User.id" /> */}
			</SimpleForm>
		</Create>
	);
};

export default TaskCreate;
