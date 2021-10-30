import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Weekend, DoneAll } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		background: '#535353',
		borderRadius: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '4px 8px 17px -2px rgba(0,0,0,0.3)',
	},
	rootwhite: {
		background: '#ffffff',
		borderRadius: '10px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		boxShadow: '4px 8px 17px -2px rgba(0,0,0,0.3)',
	},
}));

export function PricingCardProfessional() {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardContent>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '11px',
						textTransform: 'uppercase',
						fontWeight: '500',
						margin: '1.5em',
					}}
				>
					Profesional
				</Typography>
				<div
					style={{
						border: '1px solid #ffffff',
						borderRadius: '50%',
						width: '130px',
						height: '130px',
						margin: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Weekend
						style={{ height: '50px', width: '50px', color: '#ffffff' }}
					/>
				</div>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#ffffff',
						fontSize: '1.825em',
						fontWeight: '300',
						lineHeight: '1.5rem',
						marginTop: '1em',
					}}
				>
					$1800
				</Typography>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '12px',
						fontWeight: '300',
						lineHeight: '1.5rem',
						margin: '.5em',
					}}
				>
					Por mes, sin impuestos
				</Typography>
				<div
					style={{
						display: 'flex',
						alignItems: 'flex-start',
						flexDirection: 'column',
						justifyContent: 'center',
						margin: '0 .5rem 0 1rem',
					}}
				>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#ffffff', fontWeight: '300' }}
					>
						Sin comisiónes
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: '#ffffff',
							fontWeight: '300',
						}}
					>
						Hasta 25 fechas activas
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: '#ffffff',
							fontWeight: '300',
							width: 'max-content',
						}}
					>
						Hosting en Google Cloud
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#ffffff', fontWeight: '300' }}
					>
						Certificado SSL incluido
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#ffffff', fontWeight: '300' }}
					>
						Ejecutivo de cuenta
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#ffffff', fontWeight: '300' }}
					>
						Integrá tus cursos en tu web
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#ffffff', fontWeight: '300' }}
					>
						Campos extra en formulario
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#ffffff', fontWeight: '300' }}
					>
						Botón de Whatsapp en tus cursos
					</Button>
				</div>
				<Link
					to="/panel"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						textDecoration: 'none',
					}}
				>
					<Button
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginTop: '3rem',
							background: '#ffffff',
							color: '#999999',
							fontSize: '11px',
							fontWeight: '400',
							lineHeight: '1.5rem',
							width: '70%',
							textTransform: 'uppercase',
						}}
					>
						Contratar
					</Button>
				</Link>
			</CardContent>
		</Card>
	);
}

export function PricingCardWhiteFree() {
	const classes = useStyles();

	return (
		<Card className={classes.rootwhite}>
			<CardContent>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '11px',
						textTransform: 'uppercase',
						fontWeight: '500',
						margin: '1.5em',
					}}
				>
					GRATIS
				</Typography>
				<div
					style={{
						border: '1px solid #999999',
						borderRadius: '50%',
						width: '130px',
						height: '130px',
						margin: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Weekend
						style={{ height: '50px', width: '50px', color: '#999999' }}
					/>
				</div>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '1.825em',
						fontWeight: '300',
						lineHeight: '1.5rem',
						marginTop: '1em',
					}}
				>
					GRATIS
				</Typography>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '12px',
						fontWeight: '300',
						lineHeight: '1.5rem',
						margin: '.5em',
					}}
				>
					Por mes, sin impuestos
				</Typography>
				<div
					style={{
						display: 'flex',
						alignItems: 'flex-start',
						flexDirection: 'column',
						justifyContent: 'center',
						margin: '0 .5rem 0 1rem',
					}}
				>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#999999', fontWeight: '300' }}
					>
						Comision del 10%
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: '#999999',
							fontWeight: '300',
						}}
					>
						Hasta 2 fechas activas
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: '#999999',
							fontWeight: '300',
							width: 'max-content',
						}}
					>
						Hosting en Google Cloud
					</Button>
				</div>

				<Link
					to="/panel"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						textDecoration: 'none',
					}}
				>
					<Button
						variant="contained"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginTop: '3rem',
							color: '#999999',
							fontSize: '11px',
							fontWeight: '400',
							lineHeight: '1.5rem',
							width: '70%',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Contratar
					</Button>
				</Link>
			</CardContent>
		</Card>
	);
}

export function PricingCardWhiteBasic() {
	const classes = useStyles();

	return (
		<Card className={classes.rootwhite}>
			<CardContent>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '11px',
						textTransform: 'uppercase',
						fontWeight: '500',
						margin: '1.5em',
					}}
				>
					$1000
				</Typography>
				<div
					style={{
						border: '1px solid #999999',
						borderRadius: '50%',
						width: '130px',
						height: '130px',
						margin: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Weekend
						style={{ height: '50px', width: '50px', color: '#999999' }}
					/>
				</div>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '1.825em',
						fontWeight: '300',
						lineHeight: '1.5rem',
						marginTop: '1em',
					}}
				>
					$1000
				</Typography>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '12px',
						fontWeight: '300',
						lineHeight: '1.5rem',
						margin: '.5em',
					}}
				>
					Por mes, sin impuestos
				</Typography>
				<div
					style={{
						display: 'flex',
						alignItems: 'flex-start',
						flexDirection: 'column',
						justifyContent: 'center',
						margin: '0 .5rem 0 1rem',
					}}
				>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#999999', fontWeight: '300' }}
					>
						Comision del 5%
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: '#999999',
							fontWeight: '300',
						}}
					>
						Hasta 4 fechas activas
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: '#999999',
							fontWeight: '300',
							width: 'max-content',
						}}
					>
						Hosting en Google Cloud
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#999999', fontWeight: '300' }}
					>
						Certificado SSL incluido
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{ fontSize: '11px', color: '#999999', fontWeight: '300' }}
					>
						Soporte por mail
					</Button>
				</div>

				<Link
					to="/panel"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						textDecoration: 'none',
					}}
				>
					<Button
						variant="contained"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginTop: '3rem',
							color: '#999999',
							fontSize: '11px',
							fontWeight: '400',
							lineHeight: '1.5rem',
							width: '70%',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Contratar
					</Button>
				</Link>
			</CardContent>
		</Card>
	);
}

export function PricingCardWhitePremium() {
	const classes = useStyles();

	return (
		<Card className={classes.rootwhite}>
			<CardContent>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '11px',
						textTransform: 'uppercase',
						fontWeight: '500',
						margin: '1.5em',
					}}
				>
					PREMIUM
				</Typography>
				<div
					style={{
						border: '1px solid #999999',
						borderRadius: '50%',
						width: '130px',
						height: '130px',
						margin: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Weekend
						style={{ height: '50px', width: '50px', color: '#999999' }}
					/>
				</div>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '1.825em',
						fontWeight: '300',
						lineHeight: '1.5rem',
						marginTop: '1em',
					}}
				>
					$3000
				</Typography>
				<Typography
					paragraph
					align="center"
					style={{
						color: '#999999',
						fontSize: '12px',
						fontWeight: '300',
						lineHeight: '1.5rem',
						margin: '.5em',
					}}
				>
					Por mes, sin impuestos
				</Typography>
				<div
					style={{
						display: 'flex',
						alignItems: 'flex-start',
						flexDirection: 'column',
						justifyContent: 'center',
						margin: '0 .5rem 0 1rem',
					}}
				>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: 'rgb(153, 153, 153)',
							fontWeight: '300',
						}}
					>
						Sin comisiónes
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: 'rgb(153, 153, 153)',
							fontWeight: '300',
						}}
					>
						Fechas ilimitadas
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: 'rgb(153, 153, 153)',
							fontWeight: '300',
							width: 'max-content',
						}}
					>
						Hosting en Google Cloud
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: 'rgb(153, 153, 153)',
							fontWeight: '300',
						}}
					>
						Certificado SSL incluido
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: 'rgb(153, 153, 153)',
							fontWeight: '300',
						}}
					>
						Ejecutivo de cuenta
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: 'rgb(153, 153, 153)',
							fontWeight: '300',
						}}
					>
						Integrá tus cursos en tu web
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: 'rgb(153, 153, 153)',
							fontWeight: '300',
						}}
					>
						Campos extra en formulario
					</Button>
					<Button
						variant="text"
						startIcon={<DoneAll />}
						style={{
							fontSize: '11px',
							color: 'rgb(153, 153, 153)',
							fontWeight: '300',
						}}
					>
						Botón de Whatsapp en tus cursos
					</Button>
				</div>
				<Link
					to="/panel"
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						textDecoration: 'none',
					}}
				>
					<Button
						variant="contained"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginTop: '3rem',
							color: '#999999',
							fontSize: '11px',
							fontWeight: '400',
							lineHeight: '1.5rem',
							width: '70%',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Contratar
					</Button>
				</Link>
			</CardContent>
		</Card>
	);
}
