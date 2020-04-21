import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[800]
    },
    success: {
      main: '#222831'
    }
  },
});

export default theme