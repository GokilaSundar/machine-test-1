import clx from "clsx"
const Button = ({text,className}) => {
  return (
    <button className=
    {clx(className,"border py-[6px] px-10 rounded-[3px] font-semibold tracking-wide w-40")}>{text}</button>
  )
}

export default Button