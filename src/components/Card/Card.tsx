import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import useStyles from './Card.style'
import i1 from '../../assets/images/dog1.jpg'

interface SimpleCardProps {
  title: string
  subtitle: string
  imageTitle: string
}

const SimpleCard = (props: SimpleCardProps) => {
  const classes = useStyles()
  return (
    <div style={{ padding: 10 }}>
      <Card className={classes.card}>
        {/* <CardHeader
            title="title"
            subheader="subtitle"
        /> */}
        <CardMedia
          className={classes.media}
          image={i1}
          title={props.imageTitle}
        />
        <CardContent>
          <Typography variant='subtitle1' color='textPrimary' align='center'>
            <Box fontWeight='bold'>{props.title}</Box>
          </Typography>
          <Typography variant='subtitle1' color='textSecondary' align='center'>
            {props.subtitle}
          </Typography>
        </CardContent>
        {/* <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon />
            </IconButton>
        </CardActions> */}
      </Card>
    </div>
  )
}

export default SimpleCard
