import React from 'react';
import Header from '../components/header';
import { Grid, Typography } from '@material-ui/core';
import Footer from '../components/footer';
import {
	PricingCardWhiteFree,
	PricingCardWhiteBasic,
	PricingCardProfessional,
	PricingCardWhitePremium,
} from '../components/pricingcards';

const Pricing = () => {
	return (
		<div style={{ overflow: 'hidden' }}>
			<Grid container>
				<Grid item xs={12}>
					<Header />
				</Grid>
				<Grid
					container
					xs={12}
					justify="center"
					alignItems="center"
					spacing={2}
					style={{
						margin: '4rem 0 0 0',
						overflow: 'hidden',
					}}
				>
					<Grid item xs={4}></Grid>
					<Grid item xs={4}>
						<Typography variant="h5" align="center">
							Cursos ilimitados en todos los planes
						</Typography>
						<Typography
							variant="subtitle1"
							align="center"
							style={{
								margin: '1rem 0 1.5rem 0',
							}}
						>
							Proba Pizarra con abono totalmente gratis por 15 dias
						</Typography>
					</Grid>
					<Grid item xs={4}></Grid>
				</Grid>
				<Grid
					item
					container
					xs={12}
					direction="row"
					justify="center"
					alignItems="center"
					spacing={4}
					style={{ margin: '0px', overflow: 'hidden', marginBottom: '3rem' }}
				>
					<Grid item xs={1}></Grid>
					<Grid
						item
						xs={2.25}
						style={{ paddingBottom: '3rem', paddingTop: '1.5rem' }}
					>
						<PricingCardWhiteFree></PricingCardWhiteFree>
					</Grid>
					<Grid
						item
						xs={2.25}
						style={{ paddingBottom: '3rem', paddingTop: '1.5rem' }}
					>
						<PricingCardWhiteBasic></PricingCardWhiteBasic>
					</Grid>
					<Grid
						item
						xs={2.25}
						style={{ paddingBottom: '3rem', paddingTop: '1.5rem' }}
					>
						<PricingCardProfessional></PricingCardProfessional>
					</Grid>
					<Grid
						item
						xs={2.25}
						style={{ paddingBottom: '3rem', paddingTop: '1.5rem' }}
					>
						<PricingCardWhitePremium></PricingCardWhitePremium>
					</Grid>

					<Grid item xs={1}></Grid>
				</Grid>
			</Grid>
			<Footer />
		</div>
	);
};

export default Pricing;
