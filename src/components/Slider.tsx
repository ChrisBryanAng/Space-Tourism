interface ISlider {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any;
	activeCrew: number;
	handleActiveCrew: (index: number) => void;
}

const Slider = ({ data, activeCrew, handleActiveCrew }: ISlider) => {
	return (
		<>
			{Array.from({ length: data.crew.length }).map((_, index: number) => (
				<div
					key={index}
					className={`h-3 w-3 rounded-full cursor-pointer ${
						activeCrew === index
							? 'bg-white'
							: 'bg-space-secondary/20 hover:bg-space-secondary/50'
					} `}
					onClick={() => handleActiveCrew(index)}
				/>
			))}
		</>
	);
};

export default Slider;
