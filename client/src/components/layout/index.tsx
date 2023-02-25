import {Box} from '@mui/material';
import { Navbar } from 'components/Navbar';
import { Outlet } from 'react-router-dom';

export interface ILayoutProps {}

export function Layout(props: ILayoutProps) {
  return (
    <Box width='100%' height='100%'>
      <Box>
        <Navbar />
        <Outlet /> 
      </Box>
    </Box>
  );
}
