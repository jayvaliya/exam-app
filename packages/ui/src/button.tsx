"use client";
import { ReactElement } from "react";

interface ButtonProp {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  fullWidth?: boolean;
  loading?: boolean;
  backgroundAnimation?:boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
  className?: string;
}
const variantStyles = {
  "primary": " bg-zinc-900 text-zinc-100 hover:bg-zinc-800 font-bold",
  "secondary": " bg-white text-zinc-900 hover:bg-zinc-100 font-normal"
} 
const sizeStyle = {
  "sm": "py-1 px-3 text-sm",
  "md": "py-2 px-4 text-md",
  "lg": "py-5 px-7 text-lg"
}
const defaultStyles = "flex justify-center items-center rounded-md relative overflow-hidden select-none"

export const Button = ({variant, text, size, fullWidth, loading, backgroundAnimation, startIcon, endIcon, onClick, className}: ButtonProp) => {
  return(
    <button 
    className={`
      ${defaultStyles} 
      ${variantStyles[variant] } 
      ${sizeStyle[size]} 
      ${fullWidth ? "w-full":null} 
      ${loading? "opacity-45" : null}
      ${className}
    `} 
    disabled= {loading}
    onClick={()=> onClick()}
    >
      {backgroundAnimation ? <span className="absolute w-56 h-56 bg-gray-200 rounded-full opacity-50 animate-firework delay-400"></span> : null}
    {startIcon ? <div className="pr-2 items-center">{startIcon}</div> : null } {text} {endIcon? <div className="pl-2 items-center">{endIcon}</div> : null }
    </button>
  )
}