
import { Box, makeStyles } from '@material-ui/core';
import Header from './Components/Header';
import Articles from './Components/articles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 100,
    width: '70%',
    margin: '0 auto',
    [theme.breakpoints.down('md')]: {
      width: '75%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '85%'
    }
  }
}))

function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.container}>
        <Articles />
      </Box>
    </Box>
      );
}

      export default App;
