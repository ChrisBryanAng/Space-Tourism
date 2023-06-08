import { useState } from 'react';

import data from '../utils/data.json';

const Destination = () => {
	const [activePlanet, setActivePlanet] = useState(0);

	const handleActivePlanet = (index: number) => {
		setActivePlanet(index);
	};

	return (
		<main className='flex flex-col xl:flex-row items-center justify-center py-24 md:pb-14 xl:justify-evenly max-h-full xl:h-screen w-screen font-Bellefair bg-DesinationMobile md:bg-DesinationTablet xl:bg-DesinationDesktop bg-cover bg-no-repeat bg-center'>
			<section className='flex flex-col items-center w-full xl:w-[37%]'>
				<p className='md:self-start md:ml-10 xl:ml-20 md:mt-10 xl:my-16 text-white md:text-[20px] xl:text-[28px] uppercase font-Barlow tracking-[2.7px] xl:tracking-[4.7px]'>
					<span className='mr-2 xl:mr-10 text-space-secondary/50'>01</span>
					Pick your destination
				</p>
				<img
					src={data.destinations[activePlanet].images.webp}
					alt={data.destinations[activePlanet].name}
					className='h-[170px] w-[170px] md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px] xl:ml-16 my-14'
					loading='lazy'
				/>
			</section>

			<section className='flex flex-col items-center xl:items-start xl:w-[645px] xl:mt-28'>
				<div className='flex h-8 space-x-5 md:space-x-10 text-white font-Barlow uppercase tracking-[2.4px] md:tracking-[2.7px] cursor-pointer'>
					{data.destinations.map((planet: IDestination, index: number) => (
						<p
							key={planet.name}
							onClick={() => handleActivePlanet(index)}
							className={`h-full ${
								activePlanet === index
									? 'border-b-2 border-b-white'
									: 'text-space-secondary hover:border-b-[1px] hover:border-b-white/70'
							}`}
						>
							{planet.name}
						</p>
					))}
				</div>
				<p className='text-white font-Bellefair uppercase text-[56px] md:text-[80px] xl:text-[100px] mt-4 xl:mt-6'>
					{data.destinations[activePlanet].name}
				</p>
				<p className='xl:w-[445px] text-[16px] xl:text-[18px] leading-[32px] font-Barlow text-space-secondary text-center xl:text-start px-12 md:px-40 xl:px-0 xl:mb-10'>
					{data.destinations[activePlanet].description}
				</p>
				<div className='h-[2px] w-[80%] bg-space-secondary/20 my-[32px]' />
				<div className='flex flex-col md:flex-row xl:space-x-24'>
					<p className='flex flex-col text-center xl:text-start uppercase font-Bellefair text-white text-[28px]'>
						<span className='text-space-secondary text-[16px] xl:text-[14px] font-Barlow mb-2 tracking-[2.4px]'>
							Avg. Distance
						</span>
						{data.destinations[activePlanet].distance}
					</p>
					<p className='flex flex-col text-center xl:text-start uppercase font-Bellefair text-white text-[28px] mt-6 md:mt-0'>
						<span className='text-space-secondary text-[16px] xl:text-[14px] font-Barlow mb-2 tracking-[2.4px]'>
							Est. Travel Time
						</span>
						{data.destinations[activePlanet].travel}
					</p>
				</div>
			</section>
		</main>
	);
};

export default Destination;
