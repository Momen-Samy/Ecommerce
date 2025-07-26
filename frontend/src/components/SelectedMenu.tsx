import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import type { Theme, SxProps } from '@mui/material';
import { useTheme } from '@mui/material';

interface ListPropsType {
  options: string[];
  ListName?: string;
  sx?: {
    List?: SxProps<Theme>;
    ListItemButton?: SxProps<Theme>;
    ListItemText?: SxProps<Theme>;
    Icon?: SxProps<Theme>;
    Menu?: SxProps<Theme>;
    MenuItem?: SxProps<Theme>;
  };
}

export default function SelectedMenu({ options, sx = {} }: ListPropsType) {
  const {
    List: listSx,
    ListItemText: listTextSx,
    Icon: iconSx,
    ListItemButton: buttonSx,
    Menu: menuSx,
    MenuItem: menuItemSx,
  } = sx;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    // event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  return (
    <>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{
          p: 0,
          ...(typeof listSx === 'function' ? listSx(theme) : listSx),
        }}
      >
        <ListItemButton
          disableRipple
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
          sx={{
            '&:hover': { cursor: 'pointer' },
            p: '5px',
            ...(typeof buttonSx === 'function' ? buttonSx(theme) : buttonSx),
          }}
        >
          <ListItemText
            secondary={options[selectedIndex]}
            sx={{
              textAlign: 'center',
              ...(typeof listTextSx === 'function'
                ? listTextSx(theme)
                : listTextSx),
            }}
          />
          <ExpandMore
            sx={{
              fontSize: '16px',
              transition: '0.3s',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              ...(typeof iconSx === 'function' ? iconSx(theme) : iconSx),
            }}
          />
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          },
        }}
        sx={{ ...(typeof menuSx === 'function' ? menuSx(theme) : menuSx) }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={() => handleMenuItemClick(index)}
            sx={{
              fontSize: '11px',
              p: '3px 10px',
              minHeight: '10px',
              ...(typeof menuItemSx === 'function'
                ? menuItemSx(theme)
                : menuItemSx),
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
