interface ICrewBio {
	data: ICrews[];
	activeCrew: number;
}

const CrewBio = ({ data, activeCrew }: ICrewBio) => {
	return (
		<>
			<p className='xl:self-start md:h-[100px] xl:h-[120px] flex flex-col xl:ml-20 text-center xl:text-start uppercase font-Bellefair text-white text-[24px] md:text-[40px] xl:text-[56px] mt-6 md:mt-14 leading-[28px] md:leading-none'>
				<span className='md:h-[30px] xl:h-[50px] text-space-white/50 text-[16px] md:text-[24px] xl:text-[32px] mb-1 md:mb-2 leading-[18px] md:leading-none'>
					{data[activeCrew].role}
				</span>
				{data[activeCrew].name}
			</p>

			<p className='xl:self-start h-fit md:w-[68%] xl:w-[80%] px-20 mt-6 md:mt-0 xl:mt-9 text-center xl:text-start text-[16px] xl:text-[18px] leading-[25px] xl:leading-[32px] font-Barlow text-space-secondary'>
				{data[activeCrew].bio}
			</p>
		</>
	);
};

export default CrewBio;
