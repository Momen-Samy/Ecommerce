import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  styled,
  Badge,
  useTheme,
  Drawer,
} from '@mui/material';
import ModeIcon from '../components/ChangeModeIcon';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SelectedMenu from '../components/SelectedMenu';
import Logo from '../assets/Logo';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SearchBar from '../components/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { Close } from '@mui/icons-material';
import BasicMenu from '../components/BasicMenu';
import NavBar from './NavBar';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { LangListOptions } from './Data';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Links } from './Data';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function Header() {
  const theme = useTheme();
  const showSearchBar = useMediaQuery('(min-width:1100px)');

  const [drawerState, setDrawerState] = useState([
    {
      drawerName: 'search',
      alighment: {
        top: false,
        left: false,
        bottom: false,
        right: false,
      },
    },
    {
      drawerName: 'menu',
      alighment: {
        top: false,
        left: false,
        bottom: false,
        right: false,
      },
    },
  ]);

  const toggleDrawer =
    (anchor: Anchor, name: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      const UpdatedArray = drawerState.map(item =>
        name === item.drawerName
          ? { ...item, alighment: { ...item.alighment, [anchor]: open } }
          : item
      );

      setDrawerState(UpdatedArray);
    };

  return (
    <Box component={'header'}>
      <Box
        sx={{
          bgcolor: '#2B3445',
          borderBottomRightRadius: 4,
          borderBottomLeftRadius: 4,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            minHeight: '40px',
          }}
        >
          <Stack direction={'row'} alignItems={'center'}>
            <Typography
              variant="h1"
              sx={{
                fontSize: '14px',
                borderRadius: '16px',
                bgcolor: '#D23F57',
                color: 'white',
                p: '4px 10px',
                mr: 2,
                fontWeight: 'bold',
              }}
            >
              Hot
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: '12px',
                fontWeight: 300,
                color: 'white',
              }}
            >
              Free Express Shipping
            </Typography>
          </Stack>
          <Stack direction={'row'} alignItems={'center'}>
            <ModeIcon />

            <SelectedMenu
              options={LangListOptions}
              sx={{
                ListItemText: {
                  '.MuiTypography-root': {
                    color: 'white',
                    fontSize: '11px',
                  },
                },
                Icon: {
                  color: 'white',
                },
              }}
              ListName={'LangList'}
            />

            <TwitterIcon
              sx={{
                fontSize: '16px',
                color: '#fff',
              }}
            />
            <FacebookIcon
              sx={{
                fontSize: '16px',
                mx: 1,
                color: '#fff',
              }}
            />
            <InstagramIcon
              sx={{
                fontSize: '16px',
                color: '#fff',
              }}
            />
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          mt: 5,
        }}
      >
        <Container>
          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <IconButton
              sx={{
                [theme.breakpoints.up(1100)]: {
                  display: 'none',
                },
              }}
              onClick={toggleDrawer('top', 'menu', true)}
            >
              <MenuIcon />
            </IconButton>

            <Logo />

            {showSearchBar && <SearchBar />}

            <Drawer
              anchor={'top'}
              open={drawerState[0].alighment.top}
              onClose={toggleDrawer('top', 'search', false)}
              sx={{
                '.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16': {
                  height: '100vh !important',
                },
              }}
            >
              <Box
                sx={{
                  mx: 'auto',
                  mt: 6,
                  position: 'relative',
                  pt: 10,
                }}
              >
                <IconButton
                  sx={{
                    ':hover': {
                      color: 'red',
                      rotate: '180deg',
                      transition: '0.3s',
                    },
                    position: 'absolute',
                    top: 0,
                    right: 0,
                  }}
                  onClick={toggleDrawer('top', 'search', false)}
                >
                  <Close />
                </IconButton>
                <SearchBar />
              </Box>
            </Drawer>

            <Drawer
              anchor={'top'}
              open={drawerState[1].alighment.top}
              onClose={toggleDrawer('top', 'menu', false)}
              sx={{
                '.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16': {
                  height: '100vh',
                },
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  minHeight: '200px',
                  m: '50px 10% 0',
                  pt: '50px',
                }}
              >
                <IconButton
                  sx={{
                    ':hover': {
                      color: 'red',
                      rotate: '180deg',
                    },
                    transition: '0.3s',
                    position: 'absolute',
                    top: 0,
                    right: '5px',
                  }}
                  onClick={toggleDrawer('top', 'menu', false)}
                >
                  <Close />
                </IconButton>

                {Links.map(({ mainLink, categories }) => {
                  return (
                    <Accordion
                      sx={{
                        bgcolor: 'inherit',
                      }}
                    >
                      <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                      >
                        <Typography component="span">{mainLink}</Typography>
                      </AccordionSummary>
                      {categories.map(category =>
                        typeof category === 'string' ? (
                          <AccordionDetails
                            sx={{
                              pl: '35px',
                              bgcolor: 'inherit',
                            }}
                          >
                            {category}
                          </AccordionDetails>
                        ) : (
                          <Accordion
                            elevation={0}
                            sx={{
                              pl: '20px',
                              bgcolor: 'inherit',
                            }}
                          >
                            <AccordionSummary
                              expandIcon={<ArrowDropDownIcon />}
                              aria-controls="panel1-content"
                              id="panel1-header"
                            >
                              <Typography component="span">
                                {category.label}
                              </Typography>
                            </AccordionSummary>
                            {category.items.map(item => (
                              <AccordionDetails sx={{ pl: '30px' }}>
                                {item}
                              </AccordionDetails>
                            ))}
                          </Accordion>
                        )
                      )}
                    </Accordion>
                  );
                })}
              </Box>
            </Drawer>

            <Stack direction={'row'} alignItems={'center'}>
              <IconButton
                sx={{
                  [theme.breakpoints.up(1100)]: {
                    display: 'none',
                  },
                }}
                onClick={toggleDrawer('top', 'search', true)}
              >
                <SearchIcon />
              </IconButton>

              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="primary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>

              <IconButton>
                <Person2OutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box
        sx={{
          mt: 5,
        }}
      >
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <BasicMenu
            sx={{
              Menu: theme => ({
                [theme.breakpoints.down(1100)]: {
                  display: 'none',
                },
              }),
            }}
          />
          <NavBar
          // sx={{
          //   Nav: theme => ({
          //     [theme.breakpoints.down(1100)]: {
          //       display: 'none',
          //     },
          //   }),
          // }}
          />
        </Container>
      </Box>
    </Box>
  );
}
