export default function NavButton({ contents, onButtonClick, selectedState }) {
    const handleButtonClick = () => {
        if (onButtonClick)
            onButtonClick(contents);
    };

    return (
        <button
            className={`flex-1 py-2 px-4 border rounded-lg mb-2 text-gray-400 
                           border-gray-800 bg-gray-950 hover:bg-gray-800 hover:border-gray-700 
                           hover:cursor-pointer hover:text-white active:bg-slate-700 ${
                               selectedState ? "bg-slate-800 text-white" : ""
                           }`}
            onClick={handleButtonClick}
        >
            {contents}
        </button>
    );
}