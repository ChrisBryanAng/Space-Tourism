import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import Close from '../assets/shared/icon-close.svg';

interface IDrawer {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ isOpen, setIsOpen }: IDrawer) => {
	const location = useLocation();

	const routes = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Destination',
			path: '/destination',
		},
		{
			name: 'Crew',
			path: '/crew',
		},
		{
			name: 'Technology',
			path: '/technology',
		},
	];

	const variants = {
		open: {
			x: 0,
		},
		close: {
			x: '100%',
		},
	};

	return (
		<motion.div
			variants={variants}
			initial={{ x: '80%' }}
			animate={isOpen ? 'open' : 'close'}
			exit='close'
			transition={{ duration: 0.3 }}
			className='absolute inset-0 ml-auto z-50 flex flex-col md:hidden p-8 h-screen w-[65%] bg-white/10 backdrop-blur-xl'
		>
			<img
				src={Close}
				alt='close'
				loading='lazy'
				className='h-6 w-5 mb-20 self-end'
				onClick={() => setIsOpen(false)}
			/>
			<div className='flex flex-col text-center h-full gap-6 text-[16px] tracking-[2.7px]'>
				{routes.map((route, index) => (
					<Link
						key={route.name}
						to={route.path}
						className={`flex items-center w-fit pb-2 ${
							location.pathname === route.path
								? 'border-b-[1px] border-b-white'
								: 'border-none'
						}`}
						onClick={() => setIsOpen(false)}
					>
						<p className='font-bold mr-2 w-[21px]'>0{index}</p>
						<p>{route.name}</p>
					</Link>
				))}
			</div>
		</motion.div>
	);
};

export default Drawer;
