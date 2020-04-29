import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	CssBaseline,
	Drawer,
	AppBar,
	Toolbar,
	List,
	Divider,
	ListItem,
	Typography,
	ListItemIcon,
	ListItemText,
	Avatar,
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
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import Panel from '../admin/panel';
import Eventos from '../admin/eventos';

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
		'&:active': {
			background: '#00ACC1',
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
		padding: theme.spacing(10),
	},
}));

export function PermanentDrawerLeft() {
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
								src="../images/yosydney.jpg"
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
				<div className={classes.toolbar} />
				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
					dolor purus non enim praesent elementum facilisis leo vel. Risus at
					ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
					quisque non tellus. Convallis convallis tellus id interdum velit
					laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
					adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
					integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
					eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
					quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
					vivamus at augue. At augue eget arcu dictum varius duis at consectetur
					lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
					faucibus et molestie ac.
				</Typography>
				<Typography paragraph>
					Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
					ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
					elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
					sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
					mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
					risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
					purus viverra accumsan in. In hendrerit gravida rutrum quisque non
					tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
					morbi tristique senectus et. Adipiscing elit duis tristique
					sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
					eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
					posuere sollicitudin aliquam ultrices sagittis orci a.
				</Typography>
			</main>
		</div>
	);
}
