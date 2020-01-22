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
        fontSize: '2rem',
    },
    pos: {
        marginBottom: 12,
    },
});

let FollowerCard = props => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardContent>
            <img src={props.follower.avatar_url} alt='profile pic' />
            <Typography className={classes.title} component='h1'>{props.follower.login}</Typography>
            </CardContent>
        </Card>
    )
}

export default FollowerCard;