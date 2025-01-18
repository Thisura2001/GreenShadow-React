import { useState } from "react";
import LogHeader from "../Component/MonitoringLogComponent/LogHeader.tsx";
import LogAdd from "../Component/MonitoringLogComponent/LogAdd.tsx";
import LogTable from "../Component/MonitoringLogComponent/LogTable.tsx";

export default function Log() {
    const [isLogFormVisible, setLogFormVisible] = useState(false);

    const showLogForm = () => setLogFormVisible(true);
    const hideLogForm = () => setLogFormVisible(false);

    return (
        <>
            <section
                id="monitory"
                className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
            >
                <LogHeader onAddLog={showLogForm} />
                {isLogFormVisible && <LogAdd onClose={hideLogForm} />}
                <LogTable />
            </section>
        </>
    );
}
