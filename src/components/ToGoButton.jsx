import { IconScrollDown } from './icons/IconScrollDown.jsx'

export const ToGoButton = () => {
  return (
    <a className="flex flex-col items-center justify-center" href="#mapuser" >
      <IconScrollDown />
      <p className="text-slate-100 font-mono tracking-wide">MÁS INFORMACIÓN</p>
    </a>
  )
}
