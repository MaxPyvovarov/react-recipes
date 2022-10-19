import styled from 'styled-components';
import {NavLink, Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

const Brand = styled.div`
	font-size: 2rem;
	font-weight: 400;
	font-family: 'Lobster Two', cursive;
`;

const HomeLink = styled(Link)`
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 0.3s ease-in-out;

	svg {
		font-size: 3rem;
	}
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

const Grid = styled(motion.div)`
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
	width: 75%;

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

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;

	.active {
		background: linear-gradient(35deg, #494949, #313131);
		color: #fff;
	}

	h2 {
		margin-bottom: 2rem;
	}

	ul {
		margin-top: 2rem;
	}

	li {
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	color: #313131;
	background: #fff;
	border: 2px solid #000;
	margin-right: 2rem;
	font-weight: 600;
	cursor: pointer;
`;

const Info = styled.div`
	margin-left: 5rem;

	p {
		margin-top: 1rem;
	}
`;

export {
	Wrapper,
	Brand,
	HomeLink,
	Card,
	Gradient,
	List,
	Grid,
	CuisineCard,
	SLink,
	FormStyle,
	DetailWrapper,
	Info,
	Button,
};
