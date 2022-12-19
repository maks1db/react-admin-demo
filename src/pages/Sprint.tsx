import {
    List,
    Datagrid,
    TextField,
    EmailField,
    Edit,
    SimpleForm,
    ReferenceInput,
    TextInput,
    Create,
    useRecordContext,
    ReferenceField,
    SelectInput,
    AutocompleteInput,
    DateField,
    DateInput,
    useEditContext,
} from "react-admin";

const filters = [
    <TextInput label="Наименование спринта" source="name" alwaysOn />,
    <ReferenceInput source="piId" reference="pi">
        <AutocompleteInput optionText="name" label="pi" />
    </ReferenceInput>,
    // <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];
export const EntityList = () => (
    <List filters={filters}>
        <Datagrid rowClick="edit">
            <TextField source="name" label="Наименование спринта"  />

            <ReferenceField source="piId" reference="pi">
                <TextField source="name" label="pi " />
            </ReferenceField>
            <ReferenceField source="sprintNumberId" reference="sprint-number">
                <TextField source="name" label="Номер спринта" />
            </ReferenceField>
            <DateField source="dateBegin" label="Дата начала" />
            <DateField source="dateEnd" label="Дата окончания" />
            <DateField source="deadline" label="Дедлайн" />
        </Datagrid>
    </List>
);

export const EntityTitle = () => {
    const record = useRecordContext();
    return <span>Метрика {record ? `"${record.name}"` : ""}</span>;
};

export const EntityEdit = () => { 
    const { record, isLoading } = useEditContext();

    return (
        <Edit title={<EntityTitle />}>
            <SimpleForm >
                <TextInput
                    source="name"
                    label="Наименование спринта"
                    autoComplete="off"
                    onRateChange={console.log}
                />
                <ReferenceInput source="piId" reference="pi">
                    <AutocompleteInput optionText="name" label="pi" />
                </ReferenceInput>
                <ReferenceInput source="sprintNumberId" reference="sprint-number">
                    <AutocompleteInput optionText="name" label="Номер спринта" />
                </ReferenceInput>
                <DateInput source="dateBegin" label="Дата начала" />
                <DateInput source="dateEnd" label="Дата окончания" />
                <DateInput source="deadline" label="Дата окончания" />
            </SimpleForm>
        </Edit>
    );

}

export const EntityCreate = () => {


    return (
        <Create title={<EntityTitle />}>
            <SimpleForm>
                <TextInput
                    source="name"
                    label="Наименование спринта"
                    autoComplete="off"
                />
                <ReferenceInput source="piId" reference="pi">
                    <AutocompleteInput optionText="name" label="pi" />
                </ReferenceInput>
                <ReferenceInput source="sprintNumberId" reference="sprint-number">
                    <AutocompleteInput optionText="name" label="Номер спринта" />
                </ReferenceInput>
    
                <DateInput source="dateBegin" label="Дата начала" />
                <DateInput source="dateEnd" label="Дата окончания" />
                <DateInput source="deadline" label="Дата окончания" />
            </SimpleForm>
        </Create>
    );
} 
