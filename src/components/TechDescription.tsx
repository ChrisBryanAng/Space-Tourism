interface ITechDescription {
	data: ITechnologies[];
	activeTech: number;
}

const TechDescription = ({ data, activeTech }: ITechDescription) => {
	return (
		<>
			<div className='flex flex-col w-[80%] md:w-[50%] xl:w-full xl:self-start text-center xl:text-start uppercase font-Bellefair mt-6 md:mt-14 xl:mt-0'>
				<p className='py-1 font-Barlow text-space-secondary text-[14px] md:text-[16px] mb-1 md:mb-2 tracking-[2.4px] md:leading-none'>
					The Terminology...
				</p>
				<p className='py-1 text-white text-[24px] md:text-[40px] xl:text-[56px] leading-[28px] md:leading-none'>
					{data[activeTech].name}
				</p>
				<p className='mt-6 md:mt-8 xl:mt-9 xl:w-[55%] text-center xl:text-start text-[16px] xl:text-[18px] leading-[25px] xl:leading-[32px] font-Barlow text-space-secondary'>
					{data[activeTech].description}
				</p>
			</div>
		</>
	);
};

export default TechDescription;
