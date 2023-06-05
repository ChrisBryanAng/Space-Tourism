import { Route, Routes } from 'react-router-dom';

import { Home, Destination, Crew, Technology } from './pages';
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
			</Routes>
		</>
	);
};

export default App;
