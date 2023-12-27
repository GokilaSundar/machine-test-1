import React from 'react'

const InputField = ({label,type,placeholder,}) => {
  return (
    <div><label className='font-normal text-base text-slate-800 -tracking-wide'>{label}</label>
    <input className='border-[1.5px] mt-2 rounded-[4px] py-[7px] w-full bg-slate-50 placeholder:text-[15px] placeholder:pl-2' type={type} placeholder={placeholder}/></div>
  )
}

export default InputField