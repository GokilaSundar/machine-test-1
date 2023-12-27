import React from 'react'

const TextArea = ({label,placeholder}) => {
  return (
      <div><label className='font-normal text-base text-slate-800 -tracking-wide'>{label}</label>
    <textarea className='border-[1.5px] mt-2 rounded-[4px] h-[135px] w-full bg-slate-50 placeholder:text-[15px] placeholder:pl-2 placeholder:pt-2'  placeholder={placeholder} ></textarea></div>
  )
}

export default TextArea