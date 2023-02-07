import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Panel } from './components';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='*' element={<Navigate replace to='/' />} />
				<Route path='/' element={<Panel />} />
			</Routes>
		</>
	);
};

export default App;
