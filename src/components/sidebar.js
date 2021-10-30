import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	CssBaseline,
	Drawer,
	List,
	Divider,
	ListItem,
	Typography,
	ListItemIcon,
	Avatar,
	Grid,
	Button,
	Box,
	FormControl,
	Input,
	InputAdornment,
} from '@material-ui/core';
import {
	Dashboard,
	EventNote,
	ViewList,
	PlaylistAdd,
	LocalOffer,
	QuestionAnswer,
	CreditCard,
	Person,
	Email,
	Phone,
	Home,
	LocationCity,
	Public,
	Facebook,
	Instagram,
	LinkedIn,
	Twitter,
	YouTube,
	Web,
} from '@material-ui/icons';
import { Link, matchPath, useLocation } from 'react-router-dom';
import TableList from '../components/tablelist';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'column',
		backgroundColor: '#535353',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	divider: {
		height: '1px',
		backgroundColor: 'hsla(0,0%,100%,.3)',
		width: '80%',
		margin: '0 20px 0 20px',
		opacity: '50%',
	},
	list: {
		padding: '0px',
		margin: '0',
	},
	mainList: {
		padding: '10px 0px 10px 0px',
		margin: '5px 0 5px 0',
	},
	listItem: {
		width: 'initial',
		margin: '5px 15px',
		color: '#ffffff',
		padding: '10px 10px 10px 10px',
		'&:hover': {
			background: 'rgba(200, 200, 200, 0.2)',
			borderRadius: '5px',
			outline: 'none',
		},
	},
	listText: {
		width: 'initial',
		color: '#ffffff',
		fontSize: '14px',
		fontWeight: '300',
		lineHeight: '30px',
		whiteSpace: 'nowrap',
		letterSpacing: 'normal!important',
	},
	listIcon: {
		width: 'initial',
		color: '#ffffff',
		fontSize: '14px',
		fontWeight: '500',
		minWidth: '40px',
	},
	drawerPaper: {
		width: '240px',
		overflow: 'hidden',
		backgroundColor: '#535353',
	},
	// necessary for content to be below app bar
	content: {
		flexGrow: 1,
		backgroundColor: '#EEEEEE',
		padding: theme.spacing(8),
	},
}));

export function PermanentDrawerLeft() {
	let location = useLocation();
	const classes = useStyles();
	const [selectedIndex, setSelectedIndex] = React.useState(1);

	const handleListItemClick = (event, index) => {
		setSelectedIndex(index);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>
				<List
					className={classes.list}
					style={{
						display: 'flex',
						alignItems: 'center',
						minHeight: '64px',
					}}
				>
					{['PIZARRA'].map((text, index) => (
						<ListItem
							className={classes.listItem}
							style={{
								width: '100%',
							}}
							button
							key={text}
						>
							<ListItemIcon className={classes.listIcon}>
								{index % 2 === 0 ? <Dashboard /> : <Dashboard />}
							</ListItemIcon>
							<Typography className={classes.listText} variant="initial">
								{text}
							</Typography>
						</ListItem>
					))}
				</List>
				<Divider className={classes.divider} />
				<List className={classes.list}>
					{['Talk Institute'].map((text, index) => (
						<ListItem className={classes.listItem} button key={text}>
							<Avatar
								style={{ height: '25px', width: '25px', marginRight: '10px' }}
								alt="Company"
								src="/static/images/avatar/1.jpg"
							/>
							<Typography className={classes.listText} variant="initial">
								{text}
							</Typography>
						</ListItem>
					))}
				</List>
				<Divider className={classes.divider} />
				<List className={classes.mainList}>
					{[
						{
							text: 'Panel de control',
							Icon: <Dashboard />,
							Link: '/panel',
						},
						{ text: 'Eventos', Icon: <EventNote />, Link: '/eventos' },
						{ text: 'Reservas', Icon: <ViewList />, Link: '/reservas' },
						{
							text: 'Lista de espera',
							Icon: <PlaylistAdd />,
							Link: '/lista-de-espera',
						},
						{ text: 'Descuentos', Icon: <LocalOffer />, Link: '/descuentos' },
						{ text: 'Consultas', Icon: <QuestionAnswer />, Link: '/consultas' },
					].map((sidebarItem, index) => (
						<Link to={sidebarItem.Link} style={{ textDecoration: 'none' }}>
							<ListItem
								style={{
									background: matchPath(sidebarItem.Link, {
										path: location.pathname,
										exact: true,
									})
										? '#00ACC1'
										: undefined,
									borderRadius: matchPath(sidebarItem.Link, {
										path: location.pathname,
										exact: true,
									})
										? '5px'
										: undefined,
								}}
								className={classes.listItem}
								button
								key={sidebarItem.text}
							>
								<ListItemIcon className={classes.listIcon} variant="initial">
									{sidebarItem.Icon}
								</ListItemIcon>
								<Typography className={classes.listText} variant="initial">
									{sidebarItem.text}
								</Typography>
							</ListItem>
						</Link>
					))}
				</List>
				<Divider className={classes.divider} />
				<List className={classes.list}>
					{['Perfil', 'Mercadopago'].map((text, index) => (
						<ListItem className={classes.listItem} button key={text}>
							<ListItemIcon className={classes.listIcon}>
								{index % 2 === 0 ? <Person /> : <CreditCard />}
							</ListItemIcon>
							<Typography className={classes.listText} variant="initial">
								{text}
							</Typography>
						</ListItem>
					))}
				</List>
			</Drawer>
			<main className={classes.content}>
				<Typography variant="h5" style={{ marginBottom: '1rem' }}>
					Configura tu e-school
				</Typography>
				<Grid
					container
					xs
					justify="flex-start"
					style={{ margin: '0 0 4rem 0' }}
				>
					<Button
						variant="contained"
						color="primary"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginRight: '.5rem',
							color: '#ffffffe6',
							fontSize: '11px',
							fontWeight: 'bold',
							lineHeight: '2rem',
							width: 'auto',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Crear un Curso
					</Button>
					<Button
						variant="contained"
						color="default"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginRight: '.5rem',
							color: '#444444',
							fontSize: '11px',
							fontWeight: 'bold',
							lineHeight: '2rem',
							width: 'auto',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Personalizar mi perfil
					</Button>
					<Button
						variant="contained"
						color="default"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginRight: '.5rem',
							color: '#444444',
							fontSize: '11px',
							fontWeight: 'bold',
							lineHeight: '2rem',
							width: 'auto',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Asociar MercadoPago
					</Button>
				</Grid>
				<Typography variant="h5" style={{ marginBottom: '1rem' }}>
					Tus eventos
				</Typography>
				<Grid
					container
					xs
					justify="space-between"
					style={{ marginBottom: '2rem' }}
				>
					<Button
						variant="contained"
						color="primary"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '15px',
							margin: '0 1rem .5rem 0',
							color: '#ffffffe6',
							fontSize: '11px',
							fontWeight: 'bold',
							lineHeight: '2rem',
							width: '48%',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Proximos cursos
					</Button>
					<Button
						variant="contained"
						color="default"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '15px',
							margin: '0 1rem 0rem .5rem',
							color: '#444444',
							fontSize: '11px',
							fontWeight: 'bold',
							lineHeight: '2rem',
							width: '48%',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Cursos realizados
					</Button>
				</Grid>
				<TableList />
				<Profile />
				<MercadoPago />
			</main>
		</div>
	);
}

function Profile() {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Grid
			container
			xs={12}
			direction="row"
			justify="space-between"
			alignItems="space-between"
			style={{ marginBottom: '4rem' }}
		>
			<Grid
				container
				xs
				direction="column"
				justify="space-between"
				alignItems="center"
				style={{
					background: '#ffffffe6',
					borderRadius: '10px',
					padding: ' 2rem',
				}}
			>
				<Grid item>
					<Typography
						align="center"
						variant="h6"
						style={{ color: '#444444', margin: '1rem 0' }}
					>
						Biografia
					</Typography>
					<Avatar
						style={{ height: '80px', width: '80px', margin: 'auto' }}
					></Avatar>
					<Typography
						align="center"
						variant="subtitle2"
						style={{ color: '#444444', margin: '.5rem 0' }}
					>
						Categoria
					</Typography>
					<Typography
						align="center"
						variant="h5"
						style={{ color: '#444444', margin: '.5rem 0' }}
					>
						Talk Institute
					</Typography>
					<Typography
						align="center"
						variant="paragraph"
						style={{ color: '#444444', margin: '.5rem 0' }}
					>
						Somos un instituto de ingles con mas de 10 años de experiencia
						enseñando a alumnos de todas las eda- des. Prometemos una formación
						integral de ingles{' '}
					</Typography>
				</Grid>
				<Grid item>
					<Button
						variant="contained"
						color="primary"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginRight: '.5rem',
							color: '#ffffffe6',
							fontSize: '11px',
							fontWeight: 'bold',
							lineHeight: '2rem',
							width: 'auto',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Actualizar
					</Button>
				</Grid>
			</Grid>
			<Grid
				item
				container
				xs={9}
				direction="row"
				style={{
					background: '#ffffffe6',
					borderRadius: '10px',
					marginLeft: '1rem',
					padding: '2rem',
				}}
			>
				<Grid item xs={12} style={{ margin: '1rem 0' }}>
					<Typography variant="h6" style={{ color: '#444444' }}>
						Información basica y de contacto
					</Typography>
				</Grid>
				<Grid item xs={12} style={{ margin: '1rem 0' }}>
					<Typography variant="subtitle1" style={{ color: '#444444' }}>
						Información de contacto
					</Typography>
				</Grid>
				<Grid
					item
					xs={12}
					justify="center"
					alignItems="center"
					style={{ margin: '0 0 2rem 0' }}
				>
					<FormControl style={{ margin: '0 1rem' }}>
						<Input
							size="small"
							variant="outlined"
							id="input-with-icon-adornment"
							style={{ color: '444444' }}
							placeholder="E-mail"
							startAdornment={
								<InputAdornment position="start">
									<Email style={{ color: '444444' }} />
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl style={{ margin: '0 1rem' }}>
						<Input
							size="small"
							variant="outlined"
							id="input-with-icon-adornment"
							style={{ color: '444444' }}
							placeholder="Telefono"
							startAdornment={
								<InputAdornment position="start">
									<Phone style={{ color: '444444' }} />
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl style={{ margin: '0 1rem' }}>
						<Input
							size="small"
							variant="outlined"
							id="input-with-icon-adornment"
							style={{ color: '444444' }}
							placeholder="Sitio web"
							startAdornment={
								<InputAdornment position="start">
									<Web style={{ color: '444444' }} />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} style={{ margin: '2rem 0 1rem 0' }}>
					<Typography variant="subtitle1" style={{ color: '#444444' }}>
						Datos de ubicación
					</Typography>
				</Grid>
				<Grid item xs={12} style={{ margin: '0 0 2rem 0' }}>
					<FormControl style={{ margin: '0 1rem' }}>
						<Input
							size="small"
							variant="outlined"
							id="input-with-icon-adornment"
							style={{ color: '444444' }}
							placeholder="Calle"
							startAdornment={
								<InputAdornment position="start">
									<Home style={{ color: '444444' }} />
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl style={{ margin: '0 1rem' }}>
						<Input
							size="small"
							variant="outlined"
							id="input-with-icon-adornment"
							style={{ color: '444444' }}
							placeholder="Ciudad"
							startAdornment={
								<InputAdornment position="start">
									<LocationCity style={{ color: '444444' }} />
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl style={{ margin: '0 1rem' }}>
						<Input
							size="small"
							variant="outlined"
							id="input-with-icon-adornment"
							style={{ color: '444444' }}
							placeholder="Pais"
							startAdornment={
								<InputAdornment position="start">
									<Public style={{ color: '444444' }} />
								</InputAdornment>
							}
						/>
					</FormControl>
				</Grid>
				<Grid item xs={12} style={{ margin: '2rem 0 1rem 0' }}>
					<Typography variant="subtitle1" style={{ color: '#444444' }}>
						Redes sociales
					</Typography>
				</Grid>
				<Grid item xs={12} style={{ margin: '0 0 2rem 0' }}>
					<Button
						startIcon={<Facebook />}
						variant="outlined"
						color="primary"
						onClick={handleClickOpen}
						style={{ width: 'auto', margin: '0 2rem 0 0' }}
					>
						Facebook
					</Button>
					<Button
						startIcon={<Instagram />}
						variant="outlined"
						color="primary"
						onClick={handleClickOpen}
						style={{ width: 'auto', margin: '0 2rem 0 0' }}
					>
						Instagram
					</Button>
					<Button
						startIcon={<Twitter />}
						variant="outlined"
						color="primary"
						onClick={handleClickOpen}
						style={{ width: 'auto', margin: '0 2rem 0 0' }}
					>
						Twitter
					</Button>
					<Button
						startIcon={<LinkedIn />}
						variant="outlined"
						color="primary"
						onClick={handleClickOpen}
						style={{ width: 'auto', margin: '0 2rem 0 0' }}
					>
						LinkedIn
					</Button>
					<Button
						startIcon={<YouTube />}
						variant="outlined"
						color="primary"
						onClick={handleClickOpen}
						style={{ width: 'auto', margin: '0 2rem 0 0' }}
					>
						YouTube
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button
						variant="contained"
						color="primary"
						style={{
							border: '1px solid #e0e0e0',
							borderRadius: '30px',
							marginRight: '.5rem',
							color: '#ffffffe6',
							fontSize: '11px',
							fontWeight: 'bold',
							lineHeight: '2rem',
							width: 'auto',
							textTransform: 'uppercase',
							boxShadow: 'none',
						}}
					>
						Actualizar datos
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

function MercadoPago() {
	return (
		<Box
			style={{
				display: 'flex',
				flexDirection: 'column',
				margin: 'auto',
				justifyContent: 'center',
				width: '400px',
				background: '#ffffffe6',
				borderRadius: '10px',
				padding: '2rem',
			}}
		>
			<Box
				style={{
					display: 'flex',
					flexDirection: 'column',
					margin: 'auto',
					justifyContent: 'center',
					width: '100%',
					background: '#999999',
					borderRadius: '10px',
					padding: '2rem',
				}}
			>
				<Avatar style={{ height: '80px', width: '80px', margin: 'auto' }} />
			</Box>
			<Typography variant="paragraph" style={{ margin: '4rem 0' }}>
				Para poder recibir pagos online vas a necesitar una cuenta de Mercado
				Pago. Podes crearte una gratuitamente haciendo click en el siguiente
				link.
			</Typography>

			<Button
				variant="contained"
				color="primary"
				style={{
					border: '1px solid #e0e0e0',
					borderRadius: '30px',
					marginRight: '.5rem',
					color: '#ffffffe6',
					fontSize: '11px',
					fontWeight: 'bold',
					lineHeight: '2rem',
					width: 'auto',
					textTransform: 'uppercase',
					boxShadow: 'none',
				}}
			>
				Conectar
			</Button>
		</Box>
	);
}
