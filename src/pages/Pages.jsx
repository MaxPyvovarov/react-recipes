import React from 'react';
import Home from './Home';
import {Routes, Route, useLocation} from 'react-router-dom';
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import {AnimatePresence} from 'framer-motion';

export default function Pages() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route path='/react-recipes/' exact element={<Home />} />
				<Route path='/react-recipes/cuisine/:type' element={<Cuisine />} />
				<Route path='/react-recipes/searched/:search' element={<Searched />} />
				<Route path='/react-recipes/recipes/:id' element={<Recipe />} />
			</Routes>
		</AnimatePresence>
	);
}
