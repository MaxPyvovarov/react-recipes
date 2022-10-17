import React, {useEffect, useState} from 'react';

export default function Popular() {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getPopular = async () => {
		const api = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
		);

		const data = await api.json();
		setPopular(data.recipes);
		console.log(popular);
	};

	return (
		<div>
			{popular.map(recipe => (
				<div key={recipe.id}>
					<p>{recipe.title}</p>
				</div>
			))}
		</div>
	);
}
