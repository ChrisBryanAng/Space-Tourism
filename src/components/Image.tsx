import { MouseEventHandler } from 'react';

interface IImage {
	src: string;
	alt: string;
	onClick?: MouseEventHandler<HTMLImageElement>;
}

const Image = ({ src, alt, onClick }: IImage) => {
	return (
		<>
			<img
				src={src}
				alt={alt}
				className='h-full w-full object-bottom object-contain'
				loading='lazy'
				onClick={onClick}
			/>
		</>
	);
};

export default Image;
