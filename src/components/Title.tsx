interface ITitle {
	title: string;
	page: string;
}

const Title = ({ title, page }: ITitle) => {
	return (
		<p
			className={`md:self-start md:ml-10 xl:ml-20 md:mt-10 xl:my-16 text-white md:text-[20px] xl:text-[28px] uppercase font-Barlow tracking-[2.7px] md:tracking-[3.4px] xl:tracking-[4.7px]`}
		>
			<span className='mr-2 xl:mr-10 text-space-secondary/50'>{page}</span>
			{title}
		</p>
	);
};

export default Title;
