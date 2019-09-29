import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  gutters: {
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  divider: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    display: 'flex',
    width: '100%',
  },
  atCenter: {
    justifyContent: 'center',
  },
  atFlexend: {
    justifyContent: 'right',
  },
  atSpaceBetween: {
    justifyContent: 'space-between',
  },
}))

export default useStyles
