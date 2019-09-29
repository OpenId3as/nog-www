import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: '100vh',
    height: '100%',
    width: '100vw',
  },
  loginButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  languageAndHamburgerSection: {
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
      width: '100%',
    },
  },
  languageSection: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  flag: {
    padding: '12px 5px 0px 0px',
  },
  toolbarButtons: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  toolbarLogo: {
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    //marginTop: theme.spacing(8),
    padding: theme.spacing(3, 0),
  },
}))

export default useStyles
