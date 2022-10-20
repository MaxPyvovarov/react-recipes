import React, {useState, useEffect} from 'react';
import {Wrapper, Card, Gradient} from './Styled/Styled';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import {Link} from 'react-router-dom';

export default function Veggie() {
	const [veggie, setVeggie] = useState([]);

	useEffect(() => {
		getPopular();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPopular = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
		);

		const data = await api.json();
		setVeggie(data.recipes);
	};

	return (
		<Wrapper>
			<h3>Vegeterian picks</h3>
			<Splide
				options={{
					perPage: 3,
					arrows: true,
					pagination: false,
					drag: 'free',
					gap: '2rem',
				}}
			>
				{veggie.map(recipe => (
					<SplideSlide key={recipe.id}>
						<Link to={`/recipes/${recipe.id}`}>
							<Card>
								<p>{recipe.title}</p>
								<img src={recipe.image} alt={recipe.title} />
								<Gradient />
							</Card>
						</Link>
					</SplideSlide>
				))}
			</Splide>
		</Wrapper>
	);
}
