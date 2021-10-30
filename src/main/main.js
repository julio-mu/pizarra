import React from 'react';
import Header from '../components/header';
import { Button, Typography, Grid } from '@material-ui/core';
import HorizontalStepper from '../components/steps';

const Main = () => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid
				container
				xs={12}
				style={{
					padding: '5rem 0 10rem 0',
				}}
			>
				<Grid item xs={1}></Grid>
				<Grid
					item
					xs={6}
					style={{
						marginTop: '5rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'flex-start',
					}}
				>
					<Typography variant="h3" style={{ color: '#3C4858' }}>
						Crea, vende y gestiona tus cursos online con Pizarra
					</Typography>
					<Typography
						variant="h6"
						style={{ color: '#999999', marginTop: '1.5rem' }}
					>
						Tus habilidades y experiencias son unicas y valiosas. Gestiona
						facilmente tus cursos, workshops y capacitaciones. Construí un
						e-commerce para tus cursos y obtene beneficios de tus conocimientos!
					</Typography>
					<Button
						variant="contained"
						color="primary"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginTop: '3rem',
							color: '#ffffff',
							fontSize: '11px',
							fontWeight: 'bold',
							lineHeight: '2rem',
							width: '150px',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Probar gratis
					</Button>
				</Grid>
				<Grid item xs={5}></Grid>
			</Grid>
			<Grid
				container
				xs={12}
				justify="center"
				style={{
					padding: '5rem 0',
					background: '#e0e0e0',
				}}
			>
				<Grid item xs={1}></Grid>
				<Grid item xs={10}>
					<HorizontalStepper />
				</Grid>
				<Grid item xs={1}></Grid>
			</Grid>
			<Grid
				container
				xs={12}
				style={{
					padding: '5rem 0 10rem 0',
				}}
			>
				<Grid item xs={2}></Grid>
				<Grid
					item
					xs={8}
					style={{
						marginTop: '5rem',
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<Typography variant="h3" style={{ color: '#3C4858' }}>
						Tener tu propio instituto nunca fue tan facil
					</Typography>
					<Typography
						variant="h6"
						style={{ color: '#999999', marginTop: '1.5rem' }}
					>
						Unicamente esforzate en llegar a tus alumnos, dejale el resto a
						Pizarra
					</Typography>
					<Button
						variant="contained"
						color="primary"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginTop: '3rem',
							color: '#ffffff',
							fontSize: '11px',
							fontWeight: 'bold',
							lineHeight: '2rem',
							width: 'inherit',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Comenzar mi prueba gratis
					</Button>
				</Grid>
				<Grid item xs={2}></Grid>
			</Grid>
		</div>
	);
};

export default Main;
