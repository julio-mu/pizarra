import React from 'react';
import Header from '../components/header';
import { Grid, Typography, Avatar } from '@material-ui/core';
import Footer from '../components/footer';
import CoursesList from '../components/courseslist';

const Cursos = () => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Grid
				container
				style={{
					background: '#e0e0e0',
					paddingBottom: '3rem',
				}}
			>
				<Grid item xs={12}>
					<Header />
				</Grid>
				<Grid
					container
					xs={12}
					justify="flex-start"
					alignItems="flex-start"
					spacing={4}
					style={{
						backgroundColor: 'e0e0e0',
						margin: '4rem 0 0 0',
					}}
				>
					<Grid item xs={1} />
					<Grid item xs={10}>
						<Typography
							variant="h5"
							align="flex-start"
							style={{
								backgroundColor: 'e0e0e0',
								marginBottom: '1rem',
							}}
						>
							Categorias
						</Typography>
					</Grid>
					<Grid item xs={1} />
				</Grid>
				<Grid
					container
					xs={12}
					justify="flex-start"
					alignItems="flex-start"
					spacing={4}
					style={{
						backgroundColor: 'e0e0e0',
					}}
				>
					<Grid item container xs={12}>
						<Grid item xs={1}></Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1} spacing={1}>
							<Avatar
								src="../images/yosydney.jpg"
								style={{ height: '70px', width: '70px', margin: 'auto' }}
							></Avatar>
							<Typography
								variant="subtitle1"
								align="center"
								style={{ margin: '1rem 0 1.5rem 0' }}
							>
								Deportes
							</Typography>
						</Grid>
						<Grid item xs={1}></Grid>
					</Grid>
				</Grid>
				<Grid
					container
					xs={12}
					justify="flex-start"
					alignItems="flex-start"
					spacing={4}
					style={{
						margin: '2rem 0 0 0',
					}}
				>
					<Grid item xs={1}></Grid>
					<Grid
						item
						xs={6}
						style={{
							backgroundColor: 'e0e0e0',
						}}
					>
						<Typography variant="h5" align="flex-start">
							Cursos de nuestras e-schools
						</Typography>
						<Typography
							variant="subtitle1"
							align="flex-start"
							style={{
								margin: '1rem 0 1.5rem 0',
							}}
						>
							Aprende con los creadores mas experimentados de habla hispana
						</Typography>
					</Grid>
					<Grid item xs></Grid>
				</Grid>
				<CoursesList />
				<CoursesList />
				<CoursesList />
			</Grid>
			<Footer />
		</div>
	);
};

export default Cursos;
