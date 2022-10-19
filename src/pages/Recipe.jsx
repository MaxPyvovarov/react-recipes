import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {DetailWrapper, Button, Info} from '../components/Styled/Styled';

export default function Recipe() {
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState('instructions');
	const params = useParams();

	useEffect(() => {
		fetchDetails();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [params.name]);

	const fetchDetails = async () => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
		);
		const detailData = await data.json();
		setDetails(detailData);
		console.log(detailData);
	};

	return (
		<DetailWrapper>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt={details.title} />
			</div>
			<Info>
				<Button
					className={activeTab === 'instructions' ? 'active' : ''}
					onClick={() => setActiveTab('instructions')}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => setActiveTab('ingredients')}
				>
					Ingredients
				</Button>
				{activeTab === 'instructions' ? (
					<>
						<p dangerouslySetInnerHTML={{__html: details.summary}}></p>
						<p dangerouslySetInnerHTML={{__html: details.instructions}}></p>
					</>
				) : (
					<ul>
						{details.extendedIngredients.map(i => (
							<li key={i.id}>{i.original}</li>
						))}
					</ul>
				)}
			</Info>
		</DetailWrapper>
	);
}
