import { IconType } from "react-icons/lib";

type IconProp = {
  icon: IconType;
  size: "sm" | "md" | "lg",
  className?: string
}
const sizeStyle = {
  "sm": "size-5",
  "md": "size-7",
  "lg": "size-9"
}
const defaultStyles = "cursor-pointer transition-transform transform hover:scale-110"
const Icon = ( { icon: IconComponent, size, className}: IconProp) => {
  return (
    <IconComponent  className={`${sizeStyle[size]} ${defaultStyles} ${className}`} />
  );
};

export default Icon;