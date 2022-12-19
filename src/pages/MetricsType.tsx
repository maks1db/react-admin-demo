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
    <TextInput source="name" label="Поиск по наименованию" alwaysOn />,
];

export const MetricsTypeList = () => (
    <List >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" label="Наименование" />
        </Datagrid>
    </List>
);

export const MetricsTypeTitle = () => {
    const record = useRecordContext();
    return <span>Тип метрики {record ? `"${record.name}"` : ""}</span>;
};


export const MetricsTypeEdit = () => (
    <Edit title={<MetricsTypeTitle />}>
        <SimpleForm>
            <TextInput source="name" label="Наименование" />
        </SimpleForm>
    </Edit>
);

export const MetricsTypeCreate = () => (
    <Create title={<MetricsTypeTitle />}>
        <SimpleForm>
            <TextInput source="name" label="Наименование" />
        </SimpleForm>
    </Create>
);



