import clx from "clsx"
const Button = ({text,className,type}) => {
  return (
    <button type={type} className=
    {clx(className,`border py-[6px] px-10 rounded-[3px] font-semibold tracking-wide ${className?'w-48':'w-40'}`)}>{text}</button>
  )
}

export default Button