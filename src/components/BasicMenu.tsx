import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import WindowIcon from '@mui/icons-material/Window';
import { Box, Stack, Typography } from '@mui/material';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import {
  SportsEsportsOutlined,
  ElectricBikeOutlined,
  LaptopChromebookOutlined,
  MenuBookOutlined,
} from '@mui/icons-material';
import type { Theme, SxProps } from '@mui/material';

const MenuItems = [
  { itemName: 'Bikes', Icon: ElectricBikeOutlined },
  { itemName: 'Electronics', Icon: LaptopChromebookOutlined },
  { itemName: 'Books', Icon: MenuBookOutlined },
  { itemName: 'Games', Icon: SportsEsportsOutlined },
];
interface MenuPropsType {
  sx?: {
    Menu?: SxProps<Theme>;
  };
}
export default function BasicMenu({ sx = {} }: MenuPropsType) {
  const { Menu: menuSx } = sx;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const MenuItemsList = MenuItems.map(({ Icon, itemName }) => (
    <MenuItem onClick={handleClose} key={itemName}>
      <ListItemIcon>
        <Icon fontSize="small" />
      </ListItemIcon>
      <ListItemText>{itemName}</ListItemText>
    </MenuItem>
  ));

  return (
    <Box
      sx={theme => ({
        ...(typeof menuSx === 'function' ? menuSx(theme) : menuSx),
      })}
    >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={theme => ({
          width: 222,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: theme.palette.text.secondary,
          bgcolor: theme.palette.BasicMenu.backGround,
        })}
      >
        <Stack direction={'row'} alignItems={'center'}>
          <WindowIcon />
          <Typography
            sx={{
              padding: '0',
              textTransform: 'capitalize',
              mx: 1,
            }}
          >
            Categories
          </Typography>
        </Stack>

        <KeyboardArrowRightOutlinedIcon
          sx={{
            transition: '0.6s',
            rotate: open ? '90deg' : '0deg',
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
        sx={theme => ({
          '.MuiPaper-root': {
            width: 222,
            bgcolor: theme.palette.BasicMenu.backGround,
          },
        })}
      >
        {MenuItemsList}
      </Menu>
    </Box>
  );
}
