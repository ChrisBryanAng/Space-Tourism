interface IImage {
	src: string;
	alt: string;
}

const Image = ({ src, alt }: IImage) => {
	return (
		<>
			<img src={src} alt={alt} className='h-full w-full object-contain' loading='lazy' />
		</>
	);
};

export default Image;
