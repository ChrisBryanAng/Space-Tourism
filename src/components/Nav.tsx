import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Logo from '../assets/shared/logo.svg';
import Menu from '../assets/shared/icon-hamburger.svg';
import { routes } from '../utils/routes';
import { Drawer, Image } from './';

const Nav = () => {
	const location = useLocation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className='flex fixed h-24 xl:mt-10 items-center justify-between font-Barlow uppercase text-space-white w-full overflow-visible'>
			<div className='ml-7 md:ml-10 xl:ml-28 h-10 w-10'>
				<Image src={Logo} alt='Space Logo' />
			</div>

			<div className='hidden md:flex text-center items-center justify-center w-2/3 xl:w-[55%] h-full space-x-10 text-[16px] tracking-[2.3625px] bg-white/5 backdrop-blur-xl'>
				{routes.map((route: IRoute, index: number) => (
					<Link
						key={route.name}
						to={route.path}
						className={`h-full flex items-center  ${
							location.pathname === route.path
								? 'border-b-[1px] border-b-white'
								: 'hover:border-b-[1px] hover:border-b-white/70'
						}`}
					>
						<span className='hidden xl:inline-block font-bold mr-2'>0{index}</span>
						{route.name}
					</Link>
				))}
			</div>

			<div className='block md:hidden h-6 w-6 mr-7'>
				<Image src={Menu} alt='Hamburger' onClick={() => setIsOpen(true)} />
			</div>
			<div className='hidden xl:inline-block absolute left-64 w-1/3 h-[1px] bg-space-white/20 pointer-events-none' />

			<AnimatePresence mode='wait'>
				{isOpen && <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />}
			</AnimatePresence>
		</div>
	);
};

export default Nav;
