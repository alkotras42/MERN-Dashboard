import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material';
import {themeSettings} from './theme';
import {useSelector} from 'react-redux';
import {useMemo} from 'react';
import {State} from './types/state';

function App() {
  const mode = useSelector((state: State) => state.global.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className='App'>
      <ThemeProvider theme={theme} >
        <CssBaseline/>
      </ThemeProvider>
    </div>
  );
}

export default App;
