import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import AbcIcon from "@mui/icons-material/Abc";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AssistWalkerIcon from "@mui/icons-material/AssistWalker";

import * as MetricsType from "./pages/MetricsType";
import * as MetricsClassifier from "./pages/MetricsClassifier";
import * as Metrics from "./pages/Metrics";
import * as PI from "./pages/PI";
import * as SprintNumber from "./pages/SprintNumber";
import * as Sprint from "./pages/Sprint";
import fakeDataProvider from "ra-data-fakerest";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";

const dataProvider = fakeDataProvider({
    "metrics-type": [],
    "metrics-classifier": [],
    metrics: [],
    pi: [],
    "sprint-number": [],
    sprint: [],
});

dataProvider.getOne("metrics-type", { id: 1 }).then(console.log);

function App() {
    return (
      <Admin dataProvider={dataProvider}>
            <Resource
                name="metrics-type"
                create={MetricsType.MetricsTypeCreate}
                edit={MetricsType.MetricsTypeEdit}
                list={MetricsType.MetricsTypeList}
                icon={PostIcon}
                options={{
                    label: "Тип метрик",
                }}
            />
            <Resource
                name="metrics-classifier"
                create={MetricsClassifier.MetricsClassifierCreate}
                edit={MetricsClassifier.MetricsClassifierEdit}
                list={MetricsClassifier.MetricsClassifierList}
                icon={UserIcon}
                options={{
                    label: "Классификатор",
                }}
            />
            <Resource
                name="metrics"
                create={Metrics.MetricsCreate}
                edit={Metrics.MetricsEdit}
                list={Metrics.MetricsList}
                icon={AbcIcon}
                options={{
                    label: "Метрики",
                }}
            />
            <Resource
                name="pi"
                create={PI.EntityCreate}
                edit={PI.EntityEdit}
                list={PI.EntityList}
                icon={AccessibleForwardIcon}
                options={{
                    label: "PI",
                }}
            />
            <Resource
                name="sprint-number"
                create={SprintNumber.EntityCreate}
                edit={SprintNumber.EntityEdit}
                list={SprintNumber.EntityList}
                icon={AssistWalkerIcon}
                options={{
                    label: "Номера спринтов",
                }}
            />
            <Resource
                name="sprint"
                create={Sprint.EntityCreate}
                edit={Sprint.EntityEdit}
                list={Sprint.EntityList}
                icon={DownhillSkiingIcon}
                options={{
                    label: "Спринты",
                }}
            />
        </Admin>
    );
}

export default App;
