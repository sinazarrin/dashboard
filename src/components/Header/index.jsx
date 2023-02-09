import HeaderItem from './HeaderItems'
import Logo from './Logo'

const Header = () => {
  return (


    <div className='bg-white flex justify-center border-b border '>
      <div className='container mx-10 py-3 flex justify-between items-center'>
        <Logo/>
        <HeaderItem/>
      </div>
    </div>
  )
}

export default Header