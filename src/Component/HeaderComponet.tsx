export default function HeaderComponent({title,children}) {
    return (
        <>
            <h2 className="text-center text-4xl lg:text-5xl font-extrabold mt-[-70px] text-green-600 animate-fade-in">
                {title}
            </h2>
            <div className="flex justify-end mb-6">
                {children}
            </div>
        </>
    );
}
