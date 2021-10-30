import React from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, List, ListItem } from '@material-ui/core';
import { MonetizationOn, ViewList, ExitToApp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: '#ffffff',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	listItems: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		textDecoration: 'none',
	},
	menuItem: {
		fontFamily: 'Roboto',
		color: '#000000',
		fontSize: '12px',
		fontWeight: '500',
		lineHeight: '20px',
		textTransform: 'uppercase',
		width: 'max-content',
	},
}));

const HeaderAdmin = () => {
	const classes = useStyles();
	return (
		<div>
			<AppBar position="static">
				<Toolbar className={classes.root}>
					<List className={classes.listItems}>
						<ListItem>
							<Link to="/pricing" className={classes.listItems}>
								<MonetizationOn
									style={{
										color: '#000000',
										marginRight: '5px',
										height: '20px',
									}}
								/>
								<Typography className={classes.menuItem}>
									Mejorar Plan
								</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="cursos" className={classes.listItems}>
								<ViewList
									style={{
										color: '#000000',
										marginRight: '5px',
										height: '20px',
									}}
								/>
								<Typography className={classes.menuItem}>Ver Cursos</Typography>
							</Link>
						</ListItem>
						<ListItem>
							<Link to="/" className={classes.listItems}>
								<ExitToApp
									style={{
										color: '#000000',
										marginRight: '5px',
										height: '20px',
									}}
								/>
								<Typography className={classes.menuItem}>LogOut</Typography>
							</Link>
						</ListItem>
					</List>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default HeaderAdmin;
