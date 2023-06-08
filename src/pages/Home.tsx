import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<main className='flex flex-col xl:flex-row items-center justify-center xl:justify-around h-screen w-screen font-Bellefair bg-HomeMobile md:bg-HomeTablet xl:bg-HomeDesktop bg-cover bg-no-repeat bg-center'>
			<section className='xl:self-end xl:mb-40 h-1/2 xl:h-fit w-[330px] md:w-[450px] mt-20 text-white text-center xl:text-start uppercase'>
				<p className='font-Barlow text-[16px] md:text-[20px] xl:text-[28px] tracking-[2.7px] text-space-secondary'>
					So, you want to travel to
				</p>
				<p className='text-[80px] md:text-[120px] xl:text-[150px] mb-4 mt-1 md:mt-0 md:mb-0'>
					Space
				</p>
				<p className='font-Barlow text-[18px] md:text-[20px] xl:text-[22px] text-space-secondary normal-case'>
					Let&#39;s face it; if you want to go to space, you might as well genuinely go to
					outer space and not hover kind of on the edge of it. Well sit back, and relax
					because we&#39;ll give you a truly out of this world experience!
				</p>
			</section>
			<div className='relative isolate a flex xl:self-end xl:mb-40 overflow-visible group'>
				<div className='absolute inset-0 -z-10 bg-white/20 rounded-full h-36 w-36 md:h-52 md:w-52 xl:h-64 xl:w-64 xl:group-hover:scale-150 transition-all duration-100' />
				<Link
					to='/destination'
					type='button'
					className='flex items-center justify-center bg-space-white rounded-full h-36 w-36 md:h-52 md:w-52 xl:h-64 xl:w-64 text-lg md:text-[32px] uppercase xl:group-hover:scale-100'
				>
					Explore
				</Link>
			</div>
		</main>
	);
};

export default Home;
