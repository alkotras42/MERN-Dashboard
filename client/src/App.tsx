import {CssBaseline, ThemeProvider} from '@mui/material';
import {createTheme} from '@mui/material/styles';
import {themeSettings} from 'theme';
import {useSelector} from 'react-redux';
import {useMemo} from 'react';
import {State} from 'types/state';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {Dashboard} from 'components/dashboard';
import {Layout} from 'components/layout';

function App() {
  const mode = useSelector((state: State) => state.global.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path='/' element={<Navigate to='/dashboard' replace />} />
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
