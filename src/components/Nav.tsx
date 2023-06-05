import { Link } from 'react-router-dom';

import Logo from '../assets/shared/logo.svg';
import Menu from '../assets/shared/icon-hamburger.svg';

const Nav = () => {
	return (
		<div className='flex fixed h-24 xl:mt-10 items-center justify-between font-Barlow uppercase text-space-white w-full'>
			<img
				src={Logo}
				alt='Space Logo'
				loading='lazy'
				className='ml-7 xl:ml-28 h-10 w-10'
			/>

			<div className='hidden md:flex text-center items-center justify-center w-2/3 xl:w-[55%] h-full space-x-10 text-[16px] tracking-[2.3625px] bg-white/5 backdrop-blur-xl'>
				<Link to='/' className='h-full flex items-center border-b-[1px] border-b-white'>
					<span className='hidden xl:inline-block font-bold mr-2'>00</span> Home
				</Link>
				<Link to='/destination' className='h-full flex items-center'>
					<span className='hidden xl:inline-block font-bold mr-2'>01</span> Destination
				</Link>
				<Link to='Crew' className='h-full flex items-center'>
					<span className='hidden xl:inline-block font-bold mr-2'>02</span> Crew
				</Link>
				<Link to='technology' className='h-full flex items-center'>
					<span className='hidden xl:inline-block font-bold mr-2'>03</span> Technology
				</Link>
			</div>
			<img
				src={Menu}
				alt='Hamburger'
				loading='lazy'
				className='block md:hidden h-7 w-7 mr-7'
			/>
			<div className='hidden xl:inline-block absolute left-64 w-1/3 h-[1px] bg-space-white/20 pointer-events-none' />
		</div>
	);
};

export default Nav;
