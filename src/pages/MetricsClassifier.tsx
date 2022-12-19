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

export const MetricsClassifierList = () => (
    <List >
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" label="Наименование" />
        </Datagrid>
    </List>
);

export const MetricsClassifierTitle = () => {
    const record = useRecordContext();
    return <span>Классификатор метрики {record ? `"${record.name}"` : ""}</span>;
};


export const MetricsClassifierEdit = () => (
    <Edit title={<MetricsClassifierTitle />}>
        <SimpleForm>
            <TextInput source="name" label="Наименование" />
        </SimpleForm>
    </Edit>
);

export const MetricsClassifierCreate = () => (
    <Create title={<MetricsClassifierTitle />}>
        <SimpleForm>
            <TextInput source="name" label="Наименование" />
        </SimpleForm>
    </Create>
);



