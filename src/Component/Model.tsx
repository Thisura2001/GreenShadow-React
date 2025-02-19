import React from "react";

interface FieldFormCardProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (event: React.FormEvent) => void;
    children: React.ReactNode;
}

const FieldFormCard: React.FC<FieldFormCardProps> = ({
                                                         isOpen,
                                                         onClose,
                                                         onSubmit,
                                                         children,
                                                     }) => {
    if (!isOpen) return null;

    return (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center p-4 bg-green-600 text-white rounded-t-lg">
                <h4 className="text-lg font-bold">Add Field Details</h4>
                <button className="text-gray-500 hover:text-gray-700 text-xl" onClick={onClose}>X</button>
            </div>
            <form className="space-y-4 p-5" onSubmit={onSubmit}>
                {children}
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                    Save <i className="fa-regular fa-floppy-disk"></i>
                </button>
            </form>
        </div>
    );
};

export default FieldFormCard;
