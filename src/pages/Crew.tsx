import { useState } from 'react';

import { Slider } from '../components';
import data from '../utils/data.json';

const Crew = () => {
	const [activeCrew, setActiveCrew] = useState(0);

	const handleActiveCrew = (index: number) => {
		setActiveCrew(index);
	};

	return (
		<main className='flex flex-col xl:flex-row items-center justify-center pt-24 pb-16 md:pb-0 xl:justify-evenly h-screen md:h-full xl:h-screen w-screen font-Bellefair bg-CrewMobile md:bg-CrewTablet xl:bg-CrewDesktop bg-cover bg-no-repeat bg-center'>
			<section className='flex flex-col items-center w-full xl:w-[37%]'>
				<p className='md:self-start md:ml-10 xl:ml-20 md:mt-10 xl:my-16 text-white md:text-[20px] xl:text-[28px] uppercase font-Barlow tracking-[2.7px] md:tracking-[3.4px] xl:tracking-[4.7px]'>
					<span className='mr-4 xl:mr-10 text-space-secondary/50'>02</span>
					Meet Your Crew
				</p>
				<div className='md:hidden h-[223px] w-[327px] md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px] xl:ml-16 my-10 border-b-[1px] border-b-[#979797]'>
					<img
						src={data.crew[activeCrew].images.webp}
						alt={data.crew[activeCrew].name}
						className='h-full w-full object-contain'
						loading='lazy'
					/>
				</div>

				<div className='md:hidden flex space-x-5 mb-3'>
					<Slider
						data={data}
						activeCrew={activeCrew}
						handleActiveCrew={handleActiveCrew}
					/>
				</div>

				<p className='xl:self-start md:h-[100px] xl:h-[120px] flex flex-col xl:ml-20 text-center xl:text-start uppercase font-Bellefair text-white text-[24px] md:text-[40px] xl:text-[56px] mt-6 md:mt-14 leading-[28px] md:leading-none'>
					<span className='md:h-[30px] xl:h-[50px] text-space-white/50 text-[16px] md:text-[24px] xl:text-[32px] mb-1 md:mb-2 leading-[18px] md:leading-none'>
						{data.crew[activeCrew].role}
					</span>
					{data.crew[activeCrew].name}
				</p>

				<p className='xl:self-start h-fit md:w-[68%] xl:w-[80%] px-20 mt-6 md:mt-0 xl:mt-9 text-center xl:text-start text-[16px] xl:text-[18px] leading-[25px] xl:leading-[32px] font-Barlow text-space-secondary'>
					{data.crew[activeCrew].bio}
				</p>

				<div className='hidden md:flex xl:self-start space-x-5 my-10 xl:mt-28 xl:ml-20'>
					<Slider
						data={data}
						activeCrew={activeCrew}
						handleActiveCrew={handleActiveCrew}
					/>
				</div>
			</section>

			<section className='hidden md:inline-block xl:self-end md:h-[462px] md:w-[457px] xl:h-[712px] xl:w-[568px] xl:ml-16'>
				<img
					src={data.crew[activeCrew].images.webp}
					alt={data.crew[activeCrew].name}
					className='h-full w-full object-contain'
					loading='lazy'
				/>
			</section>
		</main>
	);
};

export default Crew;
