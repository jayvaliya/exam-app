interface ButtonProp {
  size: "sm" | "md" | "lg";
  text: string;
  onClick: () => void;
  className?: string;
}

const sizeStyle = {
  "sm": "py-1 px-2 text-sm hover:border-b",
  "md": "py-2 px-4 text-md hover:border-b-2",
  "lg": "py-5 px-7 text-lg hover:border-b-2"
}

const defaultStyle = " select-none border-gray-500 transition-transform transform hover:scale-110"

export const TextButton = ({size, text, onClick, className}:ButtonProp) => {
  return (
    <button 
    className={`
      ${defaultStyle}
      ${sizeStyle[size]}
      ${className}
    `} onClick={()=>onClick()}>{text}</button>
  );
};
