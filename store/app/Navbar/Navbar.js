import Image from "next/image"
import logo from '../../public/logo.webp'

export default function NavBar()
{
    return(<>
    <div className='border-b-2 py-[1.5rem] px-[1rem]'>    
        <Image src={logo} width={130}  />
    </div>

    </>)
}