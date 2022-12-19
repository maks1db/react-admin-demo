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
    BooleanField,
    BooleanInput,
} from "react-admin";

export const metricsTypeFilters = [
    <TextInput source="name" label="Поиск по наименованию" alwaysOn />,
];

export const MetricsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" label="Имя метрики" />
            <TextField source="code" label="Код метрики" />
            <ReferenceField
                source="typeId"
                reference="metrics-type"
                label="Тип метрики"
            >
                <TextField source="name" label="Тип метрики" />
            </ReferenceField>
            <ReferenceField
                source="classifierId"
                reference="metrics-classifier"
                label="Классификатор"
            >
                <TextField source="name" />
            </ReferenceField>
            <BooleanField source="isActive" label="Метрика активна" />
        </Datagrid>
    </List>
);

export const MetricsTitle = () => {
    const record = useRecordContext();
    return <span>Метрика {record ? `"${record.name}"` : ""}</span>;
};

export const MetricsEdit = () => (
    <Edit title={<MetricsTitle />}>
        <SimpleForm>
            <BooleanInput source="isActive" label="Метрика активна" />
            <TextInput source="name" label="Имя метрики" autoComplete="off" />
            <TextInput source="code" label="Код метрики" autoComplete="off" />
            <ReferenceInput
                source="typeId"
                reference="metrics-type"
                label="name"
                link="show"
            >
                <AutocompleteInput optionText="name" label="Тип метрики" />
            </ReferenceInput>
            <ReferenceInput
                source="classifierId"
                reference="metrics-classifier"
            >
                <AutocompleteInput optionText="name" label="Классификатор" />
            </ReferenceInput>
            <TextInput
                source="description"
                multiline
                rows={5}
                label="Описание"
            />
        </SimpleForm>
    </Edit>
);

export const MetricsCreate = () => (
    <Create title={<MetricsTitle />}>
        <SimpleForm>
            <BooleanInput source="isActive" label="Метрика активна" />
            <TextInput source="name" label="Имя метрики" autoComplete="off" />
            <TextInput source="code" label="Код метрики" autoComplete="off" />
            <ReferenceInput
                source="typeId"
                reference="metrics-type"
                label="name"
                link="show"
            >
                <AutocompleteInput optionText="name" label="Тип метрики" />
            </ReferenceInput>
            <ReferenceInput
                source="classifierId"
                reference="metrics-classifier"
            >
                <AutocompleteInput optionText="name" label="Классификатор" />
            </ReferenceInput>
            <TextInput
                source="description"
                multiline
                rows={5}
                label="Описание"
            />
        </SimpleForm>
    </Create>
);
