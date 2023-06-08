import { Route, Routes } from 'react-router-dom';

import { Home, Destination, Crew, Technology, NotFound } from './pages';
import { Nav } from './components';

const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/destination' element={<Destination />} />
				<Route path='/crew' element={<Crew />} />
				<Route path='/technology' element={<Technology />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
};

export default App;
