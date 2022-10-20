import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {List, SLink} from './Styled/Styled';

export default function Category() {
	return (
		<List>
			<SLink to='/react-recipes/cuisine/Italian'>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</SLink>
			<SLink to='/react-recipes/cuisine/American'>
				<FaHamburger />
				<h4>American</h4>
			</SLink>
			<SLink to='/react-recipes/cuisine/Thai'>
				<GiNoodles />
				<h4>Thai</h4>
			</SLink>
			<SLink to='/react-recipes/cuisine/Chinese'>
				<GiChopsticks />
				<h4>Chinese</h4>
			</SLink>
		</List>
	);
}
