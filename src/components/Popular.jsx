import React, {useEffect, useState} from 'react';
import {Wrapper, Card, Gradient} from './Styled/Styled';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import {Link} from 'react-router-dom';

export default function Popular() {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPopular = async () => {
		if (localStorage.getItem('popular')) {
			setPopular(JSON.parse(localStorage.getItem('popular')));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=10`
			);

			const data = await api.json();
			localStorage.setItem('popular', JSON.stringify(data.recipes));
			setPopular(data.recipes);
		}
	};

	return (
		<Wrapper>
			<h3>Popular picks</h3>
			<Splide
				options={{
					perPage: 3,
					arrows: false,
					pagination: false,
					drag: 'free',
					gap: '2rem',
				}}
			>
				{popular.map(recipe => (
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
