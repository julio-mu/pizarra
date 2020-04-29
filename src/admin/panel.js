import React from 'react';
import HeaderAdmin from '../components/header-admin';
import { PermanentDrawerLeft } from '../components/sidebar.js';

export default function Panel() {
	return (
		<div>
			<HeaderAdmin />
			<PermanentDrawerLeft />
		</div>
	);
}
