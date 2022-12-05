import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import News from './News.jsx';
import Services from './Services.jsx';
import { Routes, Route } from 'react-router-dom';

function Pages() {
	return (
		<>
			<Routes>
				<Route path='/*' element={<Home />} />
				<Route path='/kontakt' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='/news' element={<News />} />
				<Route path='/services' element={<Services />} />
				<Route path='contact' element={<Contact />} />
			</Routes>
		</>
	);
}

export default Pages;
