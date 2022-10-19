import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {CuisineCard, Grid} from '../components/Styled/Styled';
import {Link} from 'react-router-dom';

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
		<Grid
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{duration: 0.5}}
		>
			{cuisine.map(item => (
				<Link key={item.id} to={`/recipes/${item.id}`}>
					<CuisineCard>
						<img src={item.image} alt={item.title} />
						<h4>{item.title}</h4>
					</CuisineCard>
				</Link>
			))}
		</Grid>
	);
}
