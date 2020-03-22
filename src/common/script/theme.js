import { createMuiTheme } from '@material-ui/core/styles';
import { yellow } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: yellow[400]
      }
    },
});

export default theme