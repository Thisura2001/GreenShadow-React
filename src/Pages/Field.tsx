import "../Css/Field.css";
import {useEffect} from "react";
import FieldHeader from "../Component/FieldComponent/Header.tsx";
import AddField from "../Component/FieldComponent/AddField.tsx";
import DisplayCard from "../Component/FieldComponent/DisplayCard.tsx";
import FieldUpdateCard from "../Component/FieldComponent/FieldUpdateCard.tsx";

export default function Field() {
    useEffect(() => {
        const fieldFormCard = document.getElementById("fieldFormCard") as HTMLElement;
        const addFieldBtn = document.getElementById('addFieldBtn') as HTMLButtonElement;

        if (addFieldBtn) {
            addFieldBtn.addEventListener('click', () => {
                fieldFormCard.style.display = 'block';
            });
        }
    }, []);

    return (
        <>
            <FieldHeader/>
            <AddField/>
            <DisplayCard/>
            <FieldUpdateCard/>
        </>
    );
}
