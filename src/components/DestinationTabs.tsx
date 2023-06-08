interface IDestinationTab {
	data: IDestinations[];
	activePlanet: number;
	handleActivePlanet: (index: number) => void;
}

const DestinationTabs = ({ data, activePlanet, handleActivePlanet }: IDestinationTab) => {
	return (
		<div className='flex h-8 space-x-5 md:space-x-10 text-white font-Barlow uppercase tracking-[2.4px] md:tracking-[2.7px] cursor-pointer'>
			{data.map((planet: IDestination, index: number) => (
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
	);
};

export default DestinationTabs;
