import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Carousel from '../../../components/Carousel/Carousel'
import useStyles from './WhoAreWe.style'

import i1 from '../../../assets/images/dog1.jpg'
import i2 from '../../../assets/images/dog2.jpg'
import i3 from '../../../assets/images/dog3.jpg'
import i4 from '../../../assets/images/dog4.jpg'
import i5 from '../../../assets/images/dog5.jpg'
import i6 from '../../../assets/images/dog6.jpg'

const images = [i1, i2, i3, i4, i5, i6]

const WhoAreWe = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item md={6} sm={12} className={classes.gridContainter}>
        <Typography variant="body1">
          Fundado em fevereiro de 2015, o Instituto Luisa Mell atua principalmente no resgate de animais feridos ou em situação de risco, recuperação e adoção. Mantemos um abrigo com cerca de 300 animais, entre cães e gatos, todos resgatados das ruas, onde eles são protegidos, alimentados e aguardam pela chance de serem adotados
          <br />
          <br />
          Nosso trabalho, no entato, não se resume a resgate e adoção. São muitos os objetivos, tais como:
          <br />
        </Typography>
        <ul>
          <li>
            Defender os animais
            </li>
          <li>
            Zelar pelo Meio-Ambiente
            </li>
          <li>
            Acolher cães, gatos ou qualquer animal em situação de risco nas grandes cidades, trata-los e promover sua adoção ou reintegrá-los ao meio-ambiente.
            </li>
          <li>
            Educar crianças e adultos sobre a importância de cuidar do meio-ambiente e respeitar a natureza e os animais
            </li>
          <li>
            Fiscalizar os órgãos públicos no cumprimento da Lei
            </li>
          <li>
            Denunciar crimes de maus-tratos ou qualquer outro previsto na Lei 9.605/98, Artigo 32
            </li>
        </ul>
      </Grid>
      <Grid item md={6} sm={12} className={classes.gridContainter}>
        <Carousel images={images} classes={{ image: classes.image }} />
      </Grid>
    </Grid>
  )
}

export default WhoAreWe
