import {Menu as MenuIcon, Search} from '@mui/icons-material';
import {AppBar, IconButton, InputBase, Toolbar, useTheme} from '@mui/material';
import FlexBetween from 'components/FlexBetween';
import {useDispatch} from 'react-redux';
import {themeSettings} from 'theme';

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const dispatch = useDispatch();
  const theme: ReturnType<typeof themeSettings> = useTheme();

  return (
    <AppBar
      sx={{
        position: 'static',
        background: 'none',
        boxShadow: 'none',
      }}>
      <Toolbar>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={() => console.log('open/close sidebar')}>
            <MenuIcon />
          </IconButton>
        </FlexBetween>
        <FlexBetween bgcolor={theme.palette.background.alt} borderRadius='9px' gap='3rem' p='0.1rem 1.5rem'>
          <InputBase placeholder='Search...' />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
        {/* RIGHT SIDE */}
        <FlexBetween gap='1.5rem'></FlexBetween>
      </Toolbar>
    </AppBar>
  );
}
