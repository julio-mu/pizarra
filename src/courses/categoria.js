import React from 'react';
import { Grid } from '@material-ui/core';
import Header from '../components/header';

const App = () => {
	return (
		<Grid container direction="column">
			<Grid item container xs={12}>
				<Header />
			</Grid>
			<Grid item container xs={12}>
				<Grid item xs={0} sm={2} />
				<Grid item xs={12} sm={8}>
					contentcontentcontentcontentcontent
				</Grid>
				<Grid item xs={0} sm={2} />
			</Grid>
		</Grid>
	);
};
