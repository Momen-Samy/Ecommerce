import { useContext } from 'react';
import { ColorModeContext } from '../theme';
import { IconButton, useTheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const ModeIcon = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <div>
      {theme.palette.mode === 'light' ? (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              'mode',
              theme.palette.mode === 'dark' ? 'light' : 'dark'
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <LightModeOutlinedIcon sx={{ fontSize: '16px', color: '#fff' }} />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => {
            localStorage.setItem(
              'mode',
              theme.palette.mode === 'dark' ? 'light' : 'dark'
            );
            colorMode.toggleColorMode();
          }}
          color="inherit"
        >
          <DarkModeOutlinedIcon sx={{ fontSize: '16px' }} />
        </IconButton>
      )}
    </div>
  );
};

export default ModeIcon;
