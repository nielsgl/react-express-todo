import * as React from 'react';
import {
	Edit,
	SimpleForm,
	TextInput,
	BooleanInput,
	NumberField,
	DisabledInput,
	ReferenceInput,
	SelectInput,
} from 'react-admin';

const TaskEdit = props => {
	return (
		<Edit {...props}>
			<SimpleForm>
				<DisabledInput source="id" />
				<ReferenceInput source="UserId" reference="users">
					<SelectInput optionText="username" />
				</ReferenceInput>
				<TextInput source="title" />
				<BooleanInput source="isDone" />
				{/* <NumberField source="User.id" /> */}
			</SimpleForm>
		</Edit>
	);
};

export default TaskEdit;
