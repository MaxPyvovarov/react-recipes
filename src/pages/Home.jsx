import Veggie from '../components/Veggie';
import Popular from '../components/Popular';
import {motion} from 'framer-motion';

import React from 'react';

export default function Home() {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			transition={{duration: 0.5}}
		>
			<Veggie />
			<Popular />
		</motion.div>
	);
}
