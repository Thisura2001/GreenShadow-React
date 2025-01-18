import LogHeader from "../Component/MonitoringLogComponent/LogHeader.tsx";
import LogAdd from "../Component/MonitoringLogComponent/LogAdd.tsx";
import LogTable from "../Component/MonitoringLogComponent/LogTable.tsx";

export default function Log(){
    const addLogBtn = document.getElementById('addLogBtn')as HTMLButtonElement;
    const addFormCloseBtn = document.getElementById('closeLogForm')as HTMLButtonElement;
    const addLogForm = document.getElementById('logFormCard')as HTMLElement;

    if (addLogBtn) {
        addLogBtn.addEventListener('click', () => {
            addLogForm.style.display = 'block';
        })
    }
    if (addFormCloseBtn){
        addFormCloseBtn.addEventListener('click', () => {
            addLogForm.style.display = 'none';
        })
    }
    return(
        <>
            <section id="monitory" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
               <LogHeader/>
                <LogAdd/>
                <LogTable/>
            </section>
        </>
    )
}