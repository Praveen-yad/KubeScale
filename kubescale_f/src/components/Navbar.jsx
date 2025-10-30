import { TbBrandLinkedin } from "react-icons/tb";
import { SiPlanetscale } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

const Navbar = () => {
    return (
        <>
            <header className='w-full flex justify-between items-center px-10 pt-5'>
                <div className='text-2xl font-semibold tracking-wider text-neutral-800 flex items-center space-x-1'>
                    <SiPlanetscale />
                    <div>KubeScale</div>
                </div>
                <div className='flex space-x-4 justify-center items-center'>
                    <div className='text-2xl'><TbBrandLinkedin /></div>
                    <div className='text-xl'><VscGithub /></div>
                </div>
            </header>
        </>
    )
}

export default Navbar
