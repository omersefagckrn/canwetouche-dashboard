import * as React from 'react';
import { Banner, HoverText } from '.';
import { useStore } from '../context/BannerContext';

import { T, O, U, C, H } from './data';

const Panel = () => {
	const { hoverT, hoverO, hoverU, hoverC, hoverH } = useStore();
	return (
		<>
			<div className='flex items-center justify-center inset-0 bg-primary absolute'>
				<Banner />
			</div>
			{hoverT && <HoverText type={T.type} id={T.id} trText={T.tr} enText={T.en} qrSource={T.qrSource} />}
			{hoverO && <HoverText type={O.type} id={O.id} trText={O.tr} enText={O.en} qrSource={O.qrSource} />}
			{hoverU && <HoverText type={U.type} id={U.id} trText={U.tr} enText={U.en} qrSource={U.qrSource} />}
			{hoverC && <HoverText type={C.type} id={C.id} trText={C.tr} enText={C.en} qrSource={C.qrSource} />}
			{hoverH && <HoverText type={H.type} id={H.id} trText={H.tr} enText={H.en} qrSource={H.qrSource} />}
		</>
	);
};

export default Panel;
