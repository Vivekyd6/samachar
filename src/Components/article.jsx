/* eslint-disable jsx-a11y/alt-text */
import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles(theme => ({
  component: {
    boxShadow: '-2px 9px 5px 2px rgb(0 0 0 / 67%), 3px 2px 10px 0px rgb(0 0 0 / 24%)',
    marginBottom: 20
  },
  container: {
    display: 'flex',
    padding: 10,
    paddingBottom: '5px!important'
  },
  image: {
    height: 268,
    width: '88%',
    borderRadius: 5,
    objectFit: 'cover'
  },
  rightContainer: {
    margin: '5px 0px 0 -25px',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      margin: '5px 0'
    }
  },
  title: {
    fontWeight: 300,
    color: '#44444d',
    fontSize: 22,
    lineHeight: '27px'
  },
  author: {
    color: '#808290',
    fontSize: 12,
    lineHeight: '22px'
  },
  description: {
    lineHeight: '22px',
    color: '#44444d',
    marginTop: 5,
    fontFamily: "'Roboto',sans-serif",
    fontWeight: 300
  },
  short: {
    color: '#44444d',
    fontFamily: "'Convergence', sans-serif"
  },
  publisher: {
    fontSize: 12,
    marginTop: 'auto',
    marginBottom: 10,
    '& > *': {
      textDecoration: 'none',
      color: '#000',
      fontWeight: 900
    }
  }
}))
const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <Card className={classes.component}>
      <CardContent className={classes.container}>
        <Grid container>
          <Grid lg={5} md={5} sm={5} xs={12} item>
            <img src={article.url} className={classes.image} />
          </Grid>
          <Grid lg={7} md={7} sm={7} xs={12} item className={classes.rightContainer}>
            <Typography className={classes.title}>{article.title}</Typography>
            <Typography className={classes.author}>
              <b className={classes.short}>short</b> by {article.author} / {new Date(article.timestamp).toDateString()}
            </Typography>
            <Typography className={classes.description}>{article.description}</Typography>
            <Typography className={classes.publisher}>
              read more at <a href={article.link} target='_blank' rel="noreferrer">{article.publisher}</a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}


export default Article;