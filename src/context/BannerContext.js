import * as React from 'react';

const Store = React.createContext();

export const StoreProvider = ({ children }) => {
	const [hoverT, setHoverT] = React.useState(false);
	const [hoverO, setHoverO] = React.useState(false);
	const [hoverU, setHoverU] = React.useState(false);
	const [hoverC, setHoverC] = React.useState(false);
	const [hoverH, setHoverH] = React.useState(false);

	const [showFirstQrCode, setShowFirstQrCode] = React.useState(false);
	const [showSecondQrCode, setShowSecondQrCode] = React.useState(false);

	const value = {
		hoverT,
		setHoverT,
		hoverO,
		setHoverO,
		hoverU,
		setHoverU,
		hoverC,
		setHoverC,
		hoverH,
		setHoverH,
		showFirstQrCode,
		setShowFirstQrCode,
		showSecondQrCode,
		setShowSecondQrCode
	};

	return <Store.Provider value={value}>{children}</Store.Provider>;
};

export const useStore = () => React.useContext(Store);
