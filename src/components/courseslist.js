import React from 'react';
import { Grid } from '@material-ui/core';
import CourseCard from '../components/coursecard';

const CoursesList = () => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Grid
				item
				container
				xs={12}
				direction="row"
				justify="center"
				alignItems="center"
				spacing={2}
				style={{
					margin: '0px',
					overflow: 'hidden',
					background: 'e0e0e0',
				}}
			>
				<Grid item xs={1}></Grid>
				<Grid item xs={2} style={{ paddingBottom: '1.5rem' }}>
					<CourseCard />
				</Grid>
				<Grid item xs={2} style={{ paddingBottom: '1.5rem' }}>
					<CourseCard />
				</Grid>
				<Grid item xs={2} style={{ paddingBottom: '1.5rem' }}>
					<CourseCard />
				</Grid>
				<Grid item xs={2} style={{ paddingBottom: '1.5rem' }}>
					<CourseCard />
				</Grid>
				<Grid item xs={2} style={{ paddingBottom: '1.5rem' }}>
					<CourseCard />
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
		</div>
	);
};

export default CoursesList;
