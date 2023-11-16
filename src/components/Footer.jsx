import image from '../../public/drought_icon.png'
import Logo from '../media/logoBN.png'

export const Footer = () => {

  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="flex justify-end items-center w-full">
        <a href="/"><img width="150px" src={Logo} alt="logo" /></a>
      </aside>
    </footer>
  )
}
