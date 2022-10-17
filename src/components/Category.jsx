import React from 'react';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';
import {NavLink} from 'react-router-dom';
import {List} from './Styled/Styled';

export default function Category() {
	return (
		<List>
			<NavLink to='/cuisine/Italian'>
				<FaPizzaSlice />
				<h4>Italian</h4>
			</NavLink>
			<NavLink to='/cuisine/American'>
				<FaHamburger />
				<h4>American</h4>
			</NavLink>
			<NavLink to='/cuisine/Thai'>
				<GiNoodles />
				<h4>Thai</h4>
			</NavLink>
			<NavLink to='/cuisine/Chinese'>
				<GiChopsticks />
				<h4>Chinese</h4>
			</NavLink>
		</List>
	);
}
