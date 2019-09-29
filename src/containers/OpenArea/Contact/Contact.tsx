import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import useStyles from './Contact.styles'

const Contact = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12} className={classes.gridContainter}>
        <Typography variant="body1">
          Para nos contatar, envie-nos um e-mail. Todos os e-mails são lidos e filtrados. Tenha em mente, no entanto, algumas coisas antes de nos escrever:
          <br />
        </Typography>
        <ul>
          <li>
            Todo o nosso trabalho é voluntário
            </li>
          <li>
            Recebemos centenas de pedidos de ajuda diariamente. Não temos como atender a todos infelizmente e por isso, filtramos os casos mais graves e viáveis
            </li>
          <li>
            Não divulgamos publicamente o endereço do abrigo para evitar abandonos na porta, o que inviabilizaria nosso trabalho. Visitas no entanto, são muito bem-vindas mediante agendamento.
            </li>
          <li>
            Sempre divulgamos nossos próximos eventos em nossas redes sociais. Siga-nos no Facebook para saber quando e onde será o próximo
            </li>
          <li>
            Para denunciar crimes de maus-tratos ou qualquer outro previsto na Lei 9.605/98, Artigo 32, ligue para 181
            </li>
        </ul>
      </Grid>
    </Grid>
  )
}

export default Contact
