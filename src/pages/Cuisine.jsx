import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import {CuisineCard, Grid} from '../components/Styled/Styled';

export default function Cuisine() {
	const [cuisine, setCuisine] = useState([]);
	let params = useParams();

	useEffect(() => {
		getCuisine(params.type);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.type]);

	const getCuisine = async name => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
		);
		const recipes = await data.json();
		setCuisine(recipes.results);
	};

	return (
		<Grid>
			{cuisine.map(item => (
				<CuisineCard key={item.id}>
					<img src={item.image} alt={item.title} />
					<h4>{item.title}</h4>
				</CuisineCard>
			))}
		</Grid>
	);
}
