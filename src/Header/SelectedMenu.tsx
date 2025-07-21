import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { ExpandMore } from '@mui/icons-material';

interface ListPropsType {
  options: string[];
  ListName?: string;
  sx?: {
    ListBorderRadius?: string;
    ListBorderLeft?: string;
    ListWidth?: string;
    ListBackGroundColor?: string;
    ExpandIconColor?: string;
    ListItemTextColor?: string;
    ListItemTextFontSize?: string;
  };
}

export default function SelectedMenu({ options, sx = {} }: ListPropsType) {
  const {
    ListBorderRadius,
    ListWidth,
    ListBorderLeft,
    ExpandIconColor,
    ListItemTextColor,
    ListItemTextFontSize,
  } = sx;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{
          width: ListWidth,
          borderRadius: ListBorderRadius,
          borderLeft: ListBorderLeft,
          p: 0,
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
            px: 1,
          }}
        >
          <ListItemText
            secondary={options[selectedIndex]}
            sx={{
              '.MuiTypography-root': {
                fontSize: ListItemTextFontSize,
                color: ListItemTextColor,
              },
              textAlign: 'center',
            }}
          />
          <ExpandMore
            sx={{
              fontSize: '16px',
              color: ExpandIconColor,
              transition: '0.3s',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
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
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={event => handleMenuItemClick(event, index)}
            sx={{ fontSize: '11px', p: '3px 10px', minHeight: '10px' }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
