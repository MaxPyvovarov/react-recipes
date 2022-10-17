import React, {useState, useEffect} from 'react';
import {Wrapper, Card, Gradient} from './Styled/Styled';
import {Splide, SplideSlide} from '@splidejs/react-splide';

export default function Veggie() {
	const [veggie, setVeggie] = useState([]);

	useEffect(() => {
		getPopular();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPopular = async () => {
		if (localStorage.getItem('veggie')) {
			setVeggie(JSON.parse(localStorage.getItem('veggie')));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10&tags=vegetarian`
			);

			const data = await api.json();
			localStorage.setItem('veggie', JSON.stringify(data.recipes));
			setVeggie(data.recipes);
		}
	};

	return (
		<div>
			<Wrapper>
				<h3>Vegeterian picks</h3>
				<Splide
					options={{
						perPage: 3,
						arrows: false,
						pagination: false,
						drag: 'free',
						gap: '2rem',
					}}
				>
					{veggie.map(recipe => (
						<SplideSlide key={recipe.id}>
							<Card>
								<p>{recipe.title}</p>
								<img src={recipe.image} alt={recipe.title} />
								<Gradient />
							</Card>
						</SplideSlide>
					))}
				</Splide>
			</Wrapper>
		</div>
	);
}
