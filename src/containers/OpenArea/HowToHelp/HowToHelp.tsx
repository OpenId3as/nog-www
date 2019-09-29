import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import ExpansionPanel, {
  ExpansionItem,
} from '../../../components/ExpansionPanel/ExpansionPanel'
import useStyles from './HowToHelp.style'

const expansion: ExpansionItem[] = [
  {
    heading: 'Adotando um cão ou gato em nossos eventos',
    details: 'A parte mais importante de nosso trabalho é a adoção. Somente ela permite que outros animais sejam resgatados, uma vez que temos um limite físico em nosso abrigo que não pode ser ultrapassado. Por isso, realizamos dezenas de eventos de adoção ao ano, sempre divulgados através de nossas mídias sociais, como a nossa página no Facebook ou Instagram. Ao adotar, você não apenas dá a oportunidade de um cãozinho ou gatinho que já sofreu muito ser feliz, como também permite que outro seja resgatado.',
  },
  {
    heading: 'Comprando produtos #adotei',
    details: 'Possuímos uma linha de produtos, como camisetas e acessórios cuja renda é inteira revertida para custear nosso trabalho. Ao adquirir um produto #adotei, você não só ajuda nossa causa financeiramente, como a divulga usando o produto. Para ver nosso portifólio, visite nossa loja.',
  },
  {
    heading: 'Doando qualquer valor',
    details: `Caso queira, você pode fazer sua doação agora, utilizando seu cartão de crédito:

    PayPal - A maneira fácil e segura de enviar pagamentos online!
    Ou, diretamente em nossas contas:
    
    Instituto Luisa Mell de Assistência aos Animais
    CNPJ: 21.877.796/0001-35
    
    Banco do Brasil Agência 1817-1 Conta Corrente 120.000-3
    Bradesco Agência 1974 Conta Corrente 288-7
    Itau Agência 0772 Conta Corrente 09021-3`,
  },
]

const HowToHelp = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.container}>
      <Grid item md={6} sm={12} className={classes.gridContainter}>
        <Typography variant="body1">
          Sem ajuda, nosso trabalho é inviável
          <br />
          <br />
          Todo o trabalho no Instituto Luisa Mell é voluntário. De acordo com o nosso Estatuto, nenhum associado do Instituto pode receber salário ou qualquer tipo de remuneração pelo trabalho realizado, exceto médicos(as) veterinários(as).
          <br />
          <br />
          100% do que recebemos como doação é destinado aos animais e auditado por um contador independente. Além disso, todas as nossas despesas e contas são públicas e podem ser consultadas.
          No quadro ao lado, maneiras de ajudar nosso trabalho.
      </Typography>
      </Grid>
      <Grid item md={6} sm={12} className={classes.gridContainter}>
        <ExpansionPanel items={expansion} />
      </Grid>
    </Grid>
  )
}

export default HowToHelp
