interface IDestinationDescription {
	data: IDestinations[];
	activePlanet: number;
}

const DestinationDescription = ({ data, activePlanet }: IDestinationDescription) => {
	return (
		<>
			<p className='text-white font-Bellefair uppercase text-[56px] md:text-[80px] xl:text-[100px] mt-4 xl:mt-6'>
				{data[activePlanet].name}
			</p>
			<p className='xl:w-[445px] text-[16px] xl:text-[18px] leading-[32px] font-Barlow text-space-secondary text-center xl:text-start px-12 md:px-40 xl:px-0 xl:mb-10'>
				{data[activePlanet].description}
			</p>
			<div className='h-[2px] w-[80%] bg-space-secondary/20 my-[32px]' />
			<div className='flex flex-col md:flex-row xl:space-x-24'>
				<p className='flex flex-col text-center xl:text-start uppercase font-Bellefair text-white text-[28px]'>
					<span className='text-space-secondary text-[16px] xl:text-[14px] font-Barlow mb-2 tracking-[2.4px]'>
						Avg. Distance
					</span>
					{data[activePlanet].distance}
				</p>
				<p className='flex flex-col text-center xl:text-start uppercase font-Bellefair text-white text-[28px] mt-6 md:mt-0'>
					<span className='text-space-secondary text-[16px] xl:text-[14px] font-Barlow mb-2 tracking-[2.4px]'>
						Est. Travel Time
					</span>
					{data[activePlanet].travel}
				</p>
			</div>
		</>
	);
};

export default DestinationDescription;
