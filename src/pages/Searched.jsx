import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {Grid, CuisineCard} from '../components/Styled/Styled';

export default function Searched() {
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	const params = useParams();

	useEffect(() => {
		getSearched(params.search);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.search]);

	const getSearched = async name => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
		);
		const recipes = await data.json();
		setSearchedRecipes(recipes.results);
	};

	return (
		<Grid>
			{searchedRecipes.map(recipe => (
				<CuisineCard key={recipe.id}>
					<img src={recipe.image} alt={recipe.title} />
					<h4>{recipe.title}</h4>
				</CuisineCard>
			))}
		</Grid>
	);
}
