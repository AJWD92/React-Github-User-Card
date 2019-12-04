import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Typography} from '@material-ui/core';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey'

const primary = grey[200];
const secondary = blue[400];

const useStyles = makeStyles({
    card: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: secondary,
        margin: '2% auto',
        width: '70%',
    },
    title: {
        lineHeight: 1.5,
        color: primary,
        fontSize: '1.2rem',
    },
    pos: {
        marginBottom: 12,
    },
});

const UserCard = props => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent>
            <img src={props.user.avatar_url} alt='profile pic' />
            <Typography className={classes.title} component='h1'>{props.user.name}</Typography>
            <Typography className={classes.title} component='h2'>Github name: {props.user.login}</Typography>
            <Typography className={classes.title} component='h3'>{props.user.bio}</Typography>
            </CardContent>
        </Card>
    )
}

export default UserCard;