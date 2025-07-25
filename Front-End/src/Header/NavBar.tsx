import { ExpandMore } from '@mui/icons-material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Paper,
} from '@mui/material';
import { Links } from './Data';

const LinksList = Links.map(({ mainLink, categories }, indx) => (
  <Box
    key={mainLink}
    sx={{
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      alignItems: 'center',
      zIndex: 2,
      '&:hover > nav': {
        opacity: 1,
        visibility: 'visible',
      },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '2.4px',
        fontWeight: '500',
        cursor: 'pointer',
      }}
    >
      {mainLink}
      <ExpandMore
        sx={{
          fontSize: '1.1rem',
        }}
      />
    </Box>

    <Box
      component={'nav'}
      sx={{
        position: 'absolute',
        transition: '0.5s',
        opacity: '0',
        visibility: 'hidden',
        left: '50%',
        transform: 'translateX(-50%)',
        top: '100%',
      }}
    >
      <Paper
        elevation={2}
        sx={{
          bgcolor: 'white',
          color: '#2b3445',
          borderRadius: '12px',
          minWidth: '200px',
          // ----------- //
          mt: '20px',
          p: '8px',
        }}
      >
        {categories.map(category =>
          typeof category === 'string' ? (
            <MenuItem key={category}>
              <ListItemText sx={{ textTransform: 'capitalize' }}>
                {category}
              </ListItemText>
            </MenuItem>
          ) : (
            <MenuItem
              key={category.label}
              sx={{
                position: 'relative',
                '&:hover > nav': {
                  opacity: 1,
                  visibility: 'visible',
                },
              }}
            >
              <ListItemText>{category.label}</ListItemText>
              <ListItemIcon
                sx={{
                  justifyContent: 'flex-end',
                }}
              >
                <KeyboardArrowRightIcon
                  sx={theme => ({
                    fontSize: '11px',
                    color: theme.palette.common.black,
                  })}
                />
              </ListItemIcon>
              {category.items.length === 0 ? (
                <></>
              ) : (
                <Box
                  component={'nav'}
                  sx={{
                    position: 'absolute',
                    visibility: 'hidden',
                    opacity: '0',
                    ...(indx < 4 ? { left: '100%' } : { right: '100%' }),
                    top: '30%',
                    transition: '0.5s',
                    minWidth: '200px',
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      bgcolor: 'white',
                      color: '#2b3445',
                      borderRadius: '12px',
                      minWidth: '140px',
                      ...(indx < 4 ? { ml: '20px' } : { mr: '20px' }),
                      p: '8px',
                    }}
                  >
                    {category.items.map(item => (
                      <MenuItem key={item}>
                        <ListItemText>{item}</ListItemText>
                      </MenuItem>
                    ))}
                  </Paper>
                </Box>
              )}
            </MenuItem>
          )
        )}
      </Paper>
    </Box>
  </Box>
));

export default function NavBar() {
  return (
    <Box
      sx={theme => ({
        display: 'flex',
        flexGrow: '0.5',
        alignItems: 'center',
        gap: '32px',
        justifyContent: 'end',
        [theme.breakpoints.down(1100)]: {
          display: 'none',
        },
      })}
    >
      {LinksList}
    </Box>
  );
}
