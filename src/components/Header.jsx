import React from 'react';
import {Brand, HomeLink} from './Styled/Styled';
import {GiKnifeFork} from 'react-icons/gi';

export default function Header() {
	return (
		<HomeLink to={'/react-recipes/'}>
			<GiKnifeFork />
			<Brand>Delicioussss</Brand>
		</HomeLink>
	);
}
