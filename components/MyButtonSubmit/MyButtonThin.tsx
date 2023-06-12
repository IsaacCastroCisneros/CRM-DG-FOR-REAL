import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormikContext } from 'formik';
import React from 'react'

interface props
{
    icon:IconProp;
    label:string;
    onClick?:()=>void;
    type?:"button" | "submit" | "reset" | undefined;
    enabled?:boolean
    error?:boolean
}

export default function MyButtonSubmit(props:props) 
{
  const
  {
    icon,
    label,
    onClick,
    type='submit',
    enabled=undefined,
    error=false
  }=props
  
  const {errors}=useFormikContext()
  const isEnabled= enabled!==undefined ? enabled : (Object.keys(errors).length===0)

  return (
    <button
      className={`flex w-[fit] border-[2px] bg-myWhite border-primary text-primary items-center px-[1.3rem] py-[.2rem] text-[18px] gap-[1rem] rounded-[.3rem] ${isEnabled&&!error ? '':'brightness-[80%] pointer-events-none'}`}
      onClick={onClick}
      type={type}
    >
      <FontAwesomeIcon icon={icon} />
      <span className="capitalize">{label}</span>
    </button>
  );
}
