interface ITechSlider {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	activeTech: number;
	handleActiveTech: (index: number) => void;
}

const TechSlider = ({ data, activeTech, handleActiveTech }: ITechSlider) => {
	return (
		<>
			{Array.from({ length: data.technology.length }).map((_, index: number) => (
				<div
					key={index}
					className={`flex items-center justify-center font-Bellefair h-10 w-10 md:h-14 md:w-14 xl:h-20 xl:w-20 md:text-[24px] xl:text-[32px] rounded-full cursor-pointer ${
						activeTech === index
							? 'bg-white text-black'
							: 'bg-transparent text-white/50 border-[1px] border-white/50 hover:border-white/70 hover:text-white/70'
					} `}
					onClick={() => handleActiveTech(index)}
				>
					{index + 1}
				</div>
			))}
		</>
	);
};

export default TechSlider;
