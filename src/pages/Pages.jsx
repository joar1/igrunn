import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Services from './Services.jsx';
import { Routes, Route } from 'react-router-dom';
import BasicHeating from './BasicHeating.jsx';
import Availability from './Availability.jsx';

function Pages() {
	return (
		<>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/kontakt' element={<Contact />} />
				<Route path='/om' element={<About />} />
				<Route path='/tjenester' element={<Services />} />
				<Route path='/grunnvarme' element={<BasicHeating />} />
				<Route path='/tilgjenglig' element={<Availability />} />
			</Routes>
		</>
	);
}

export default Pages;
