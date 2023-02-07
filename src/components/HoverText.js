import * as React from 'react';

const HoverText = ({ id, trText, enText, qrSource, type }) => {
	const choose = () => {
		switch (type) {
			case 'T':
				return 'right-0';
			case 'O':
				return 'left-0';
			case 'U':
				return 'right-0';
			case 'C':
				return 'left-0';
			case 'H':
				return 'right-0';
			default:
				return 'left-0';
		}
	};
	return (
		<div className='text-green font-SFPro font-normal select-none'>
			<div className={`hidden md:flex flex-col items-center justify-center fixed ${choose()} space-y-6 mx-[73px] my-[73px] max-w-[25%] break-words`}>
				<div className='text-center text-lg'>{type}</div>
				<div className='text-center text-sm'>{trText}</div>
				<div className='text-center text-sm'>{enText}</div>
				<img className='w-24' src={qrSource} alt='' />
			</div>
			<div id={id} className='md:hidden relative flex flex-col items-center justify-center space-y-6 min-h-screen mt-[40rem] bg-primary mx-4'>
				<div className='text-center text-lg'>{type}</div>
				<div className='text-center'>{trText}</div>
				<div className='text-center'>{enText}</div>
				<img className='w-24 pb-10' src={qrSource} alt='' />
			</div>
		</div>
	);
};

export default HoverText;
