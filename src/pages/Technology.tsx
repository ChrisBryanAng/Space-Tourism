import { useState } from 'react';

import { TechSlider, Title, TechDescription, Image } from '../components';
import data from '../utils/data.json';

const Technology = () => {
	const [activeTech, setActiveTech] = useState(0);

	const handleActiveTech = (index: number) => {
		setActiveTech(index);
	};

	return (
		<main className='flex flex-col xl:flex-row items-center justify-center py-24 xl:justify-between h-screen md:h-full xl:h-screen w-screen font-Bellefair bg-TechnologyMobile md:bg-TechnologyTablet xl:bg-TechnologyDesktop bg-cover bg-no-repeat bg-center'>
			<section className='flex flex-col items-center w-full xl:w-[50%] xl:ml-48 space-y-8 md:space-y-16'>
				<Title title='Space Launch 101' page='03' />
				<div className='xl:hidden h-[170px] w-full md:h-[310px] xl:h-[445px] xl:w-[445px] xl:ml-16'>
					<Image
						src={data.technology[activeTech].images.landscape}
						alt={data.crew[activeTech].name}
					/>
				</div>

				<div className='flex flex-col xl:flex-row items-center xl:w-full xl:gap-20 xl:ml-40'>
					<TechSlider
						data={data.technology}
						activeTech={activeTech}
						handleActiveTech={handleActiveTech}
					/>

					<TechDescription data={data.technology} activeTech={activeTech} />
				</div>
			</section>

			<section className='hidden xl:inline-block xl:self-end md:h-[462px] md:w-[457px] xl:h-[557px] xl:w-[550px] xl:ml-16'>
				<Image
					src={data.technology[activeTech].images.portrait}
					alt={data.crew[activeTech].name}
				/>
			</section>
		</main>
	);
};

export default Technology;
