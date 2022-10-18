import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

const Card = styled.div`
	position: relative;
	min-height: 13rem;
	border-radius: 2rem;
	overflow: hidden;

	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	p {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0;
		transform: translate(-50%, 0%);
		color: #fff;
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

const Gradient = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const List = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0rem;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const CuisineCard = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}

	a {
		text-decoration: none;
	}

	h4 {
		text-align: center;
		padding: 1rem;
	}
`;

const SLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-right: 2rem;
	text-decoration: none;
	background: linear-gradient(35deg, #494949, #313131);
	width: 6rem;
	height: 6rem;
	cursor: pointer;
	scale: 0.8;
	transition: all 0.3s ease-in-out;

	&:hover {
		scale: 0.9;
	}

	&.active {
		background: linear-gradient(to right, #f27121, #e94057);
		scale: 0.9;

		svg {
			color: #fff;
		}

		h4 {
			color: #fff;
		}
	}

	h4 {
		color: #fff;
		font-size: 0.8rem;
		margin-top: 5px;
	}

	svg {
		color: #fff;
		font-size: 1.5rem;
	}
`;

const FormStyle = styled.form`
	margin: 0 auto;
	position: relative;
	width: 100%;

	input {
		border: none;
		width: 100%;
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		color: #fff;
		padding: 1rem 3rem;
		border: none;
		border-radius: 1rem;
		outline: none;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(100%, -50%);
		color: #fff;
	}
`;

export {Wrapper, Card, Gradient, List, Grid, CuisineCard, SLink, FormStyle};
