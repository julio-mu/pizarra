import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '10px',
		boxShadow: '4px 8px 17px -2px rgba(0,0,0,0.3)',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
}));

export default function CourseCard() {
	const classes = useStyles();
	return (
		<Card className={classes.root}>
			<CardHeader>
				<IconButton aria-label="share">{/*<ShareIcon />*/}</IconButton>
			</CardHeader>
			<CardMedia
				className={classes.media}
				image="yosydney.jpg"
				title="Paella dish"
			/>
			<CardContent>
				<Typography
					color="textSecondary"
					style={{
						marginBottom: '.5rem',
						textTransform: 'uppercase',
						fontSize: '11px',
					}}
				>
					Deportes
				</Typography>
				<Typography
					variant="subtitle1"
					color="textSecondary"
					style={{ marginBottom: '.5rem' }}
				>
					Perde peso de por vida
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					This impressive paella is a perfect party dish and a fun meal to cook
					together with your guests.
				</Typography>
				<CardActions
					style={{
						justifyContent: 'space-between',
						marginTop: '1rem',
						padding: '0px',
					}}
				>
					<Avatar style={{ height: '30px', width: '30px' }} />
					<Typography variant="h6">$1000</Typography>
				</CardActions>
			</CardContent>
		</Card>
	);
}
