import { useState } from 'react';

import { Slider, Title, CrewBio, Image } from '../components';
import data from '../utils/data.json';

const Crew = () => {
	const [activeCrew, setActiveCrew] = useState(0);

	const handleActiveCrew = (index: number) => {
		setActiveCrew(index);
	};

	return (
		<main className='flex flex-col xl:flex-row items-center justify-center pt-24 pb-16 md:pb-0 xl:justify-evenly h-screen md:h-full xl:h-screen w-screen font-Bellefair bg-CrewMobile md:bg-CrewTablet xl:bg-CrewDesktop bg-cover bg-no-repeat bg-center'>
			<section className='flex flex-col items-center w-full xl:w-[37%]'>
				<Title title='Meet Your Crew' page='02' />
				<div className='md:hidden h-[223px] w-[327px] md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px] xl:ml-16 my-10 border-b-[1px] border-b-[#979797]'>
					<Image
						src={data.crew[activeCrew].images.webp}
						alt={data.crew[activeCrew].name}
					/>
				</div>

				<div className='md:hidden flex space-x-5 mb-3'>
					<Slider
						data={data.crew}
						activeCrew={activeCrew}
						handleActiveCrew={handleActiveCrew}
					/>
				</div>

				<CrewBio data={data.crew} activeCrew={activeCrew} />

				<div className='hidden md:flex xl:self-start space-x-5 my-10 xl:mt-28 xl:ml-20'>
					<Slider
						data={data.crew}
						activeCrew={activeCrew}
						handleActiveCrew={handleActiveCrew}
					/>
				</div>
			</section>

			<section className='hidden md:flex xl:self-end md:h-[462px] md:w-[457px] xl:h-[712px] xl:w-[568px] xl:ml-16'>
				<Image src={data.crew[activeCrew].images.webp} alt={data.crew[activeCrew].name} />
			</section>
		</main>
	);
};

export default Crew;
