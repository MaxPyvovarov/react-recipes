import React, {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import {Grid, CuisineCard, Warning} from '../components/Styled/Styled';

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
			{searchedRecipes.length ? (
				searchedRecipes.map(recipe => (
					<Link key={recipe.id} to={`/recipes/${recipe.id}`}>
						<CuisineCard>
							<img src={recipe.image} alt={recipe.title} />
							<h4>{recipe.title}</h4>
						</CuisineCard>
					</Link>
				))
			) : (
				<Warning>No matched results</Warning>
			)}
		</Grid>
	);
}
