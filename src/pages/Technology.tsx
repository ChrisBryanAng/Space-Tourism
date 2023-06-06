import { useState } from 'react';

import { TechSlider } from '../components';
import data from '../utils/data.json';

const Technology = () => {
	const [activeTech, setActiveTech] = useState(0);

	const handleActiveTech = (index: number) => {
		setActiveTech(index);
	};

	return (
		<main className='flex flex-col xl:flex-row items-center justify-center py-24 xl:justify-between h-screen md:h-full xl:h-screen w-screen font-Bellefair bg-TechnologyMobile md:bg-TechnologyTablet xl:bg-TechnologyDesktop bg-cover bg-no-repeat bg-center'>
			<section className='flex flex-col items-center w-full xl:w-[50%] xl:ml-64 space-y-8 md:space-y-16'>
				<p className='md:self-start md:ml-10 xl:ml-0 md:mt-10 xl:my-16 text-white md:text-[20px] xl:text-[28px] uppercase font-Barlow tracking-[2.7px] md:tracking-[3.4px] xl:tracking-[4.7px]'>
					<span className='mr-4 xl:mr-10 text-space-secondary/50'>03</span>
					Space Launch 101
				</p>
				<div className='xl:hidden h-[170px] w-full md:h-[310px] xl:h-[445px] xl:w-[445px] xl:ml-16'>
					<img
						src={data.technology[activeTech].images.landscape}
						alt={data.crew[activeTech].name}
						className='h-full w-full object-contain'
						loading='lazy'
					/>
				</div>

				<div className='flex flex-col xl:flex-row items-center xl:w-full xl:gap-20'>
					<div className='flex xl:flex-col space-x-5 xl:space-x-0 xl:justify-between xl:w-[110px] xl:h-[300px] mb-3 xl:mb-0'>
						<TechSlider
							data={data}
							activeTech={activeTech}
							handleActiveTech={handleActiveTech}
						/>
					</div>

					<div className='flex flex-col w-[80%] md:w-[50%] xl:w-full xl:self-start text-center xl:text-start uppercase font-Bellefair mt-6 md:mt-14 xl:mt-0'>
						<p className='py-1 font-Barlow text-space-secondary text-[14px] md:text-[16px] mb-1 md:mb-2 tracking-[2.4px] md:leading-none'>
							The Terminology...
						</p>
						<p className='py-1 text-white text-[24px] md:text-[40px] xl:text-[56px] leading-[28px] md:leading-none'>
							{data.technology[activeTech].name}
						</p>
						<p className='mt-6 md:mt-8 xl:mt-9 xl:w-[55%] text-center xl:text-start text-[16px] xl:text-[18px] leading-[25px] xl:leading-[32px] font-Barlow text-space-secondary'>
							{data.technology[activeTech].description}
						</p>
					</div>
				</div>
			</section>

			<section className='hidden xl:inline-block xl:self-end md:h-[462px] md:w-[457px] xl:h-[557px] xl:w-[550px] xl:ml-16'>
				<img
					src={data.technology[activeTech].images.portrait}
					alt={data.technology[activeTech].name}
					className='h-full w-full object-contain'
					loading='lazy'
				/>
			</section>
		</main>
	);
};

export default Technology;
