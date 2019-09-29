import { createStyles, StyleRules, Theme } from '@material-ui/core/styles'

const useStyles = (theme: Theme): StyleRules =>
  createStyles({
    imageContainer: {
      height: '100%',
    },
    image: {
      cursor: 'pointer',
      height: 420,
      maxHeight: 520,
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        height: 340,
      },
    },
  })

export default useStyles
