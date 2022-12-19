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
} from "react-admin";

export const metricsTypeFilters = [
    <TextInput source="name" label="Поиск по наименованию" alwaysOn  />,
];

export const EntityList = () => (
    <List >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" label="Наименование" />
        </Datagrid>
    </List>
);

export const EntityTitle = () => {
    const record = useRecordContext();
    return <span>Номер спринта {record ? `"${record.name}"` : ""}</span>;
};


export const EntityEdit = () => (
    <Edit title={<EntityTitle />}>
        <SimpleForm>
            <TextInput source="name" label="Наименование" autoComplete="off" />
        </SimpleForm>
    </Edit>
);

export const EntityCreate = () => (
    <Create title={<EntityTitle />}>
        <SimpleForm>
            <TextInput source="name" label="Наименование" autoComplete="off" />
        </SimpleForm>
    </Create>
);



