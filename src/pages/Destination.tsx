import { useState } from 'react';

import data from '../utils/data.json';
import { Title, DestinationTabs, DestinationDescription, Image } from '../components';

const Destination = () => {
	const [activePlanet, setActivePlanet] = useState(0);

	const handleActivePlanet = (index: number) => {
		setActivePlanet(index);
	};

	return (
		<main className='flex flex-col xl:flex-row items-center justify-center py-24 md:pb-14 xl:justify-evenly max-h-full xl:h-screen w-screen font-Bellefair bg-DesinationMobile md:bg-DesinationTablet xl:bg-DesinationDesktop bg-cover bg-no-repeat bg-center'>
			<section className='flex flex-col items-center w-full xl:w-[37%]'>
				<Title title='Pick your destination' page='01' />
				<div className='h-[170px] w-[170px] md:h-[300px] md:w-[300px] xl:h-[445px] xl:w-[445px] xl:ml-16 my-14'>
					<Image
						src={data.destinations[activePlanet].images.webp}
						alt={data.destinations[activePlanet].name}
					/>
				</div>
			</section>

			<section className='flex flex-col items-center xl:items-start xl:w-[645px] xl:mt-28'>
				<DestinationTabs
					data={data.destinations}
					activePlanet={activePlanet}
					handleActivePlanet={handleActivePlanet}
				/>
				<DestinationDescription data={data.destinations} activePlanet={activePlanet} />
			</section>
		</main>
	);
};

export default Destination;
