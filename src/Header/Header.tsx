import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  styled,
  Badge,
  useTheme,
  Divider,
} from '@mui/material';
import ModeIcon from './ChangeModeIcon';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import SelectedMenu from './SelectedMenu';
import Logo from '../assets/Logo';
import InputBase from '@mui/material/InputBase';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';

import { LangListOptions, CatSearchListOptions } from './Data';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  flexGrow: 0.5,
  border: `1px solid ${theme.palette.searchBarAndList.ListBorder}`,
  '&:hover': {
    border: `1px solid ${theme.palette.searchBarAndList.ListBorderAtHover}`,
  },

  borderRadius: '7px',
  backgroundColor: theme.palette.searchBarAndList.backgroundSearchBar,
  marginLeft: 0,
  [theme.breakpoints.down(800)]: {
    display: 'none',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: '10px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.searchBarAndList.SearchIcon,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.searchBarAndList.ListText,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: '0.3s',
    width: '20ch',
    '&:focus': {
      width: '30ch',
    },
  },
}));

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

  const showSerachButtonAtMobile = useMediaQuery('(min-width:800px)');

  return (
    <header>
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
                ListItemTextColor: 'white',
                ExpandIconColor: 'white',
                ListItemTextFontSize: '11px',
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
                [theme.breakpoints.up(800)]: {
                  display: 'none',
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Logo />

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    borderColor: theme.palette.searchBarAndList.SearchIcon,
                    p: '0 2px',
                  }}
                />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
              {showSerachButtonAtMobile ? (
                <SelectedMenu
                  options={CatSearchListOptions}
                  sx={{
                    ListWidth: '150px',
                    ListBorderRadius: '0 7px 7px 0',
                    ListItemTextColor: theme.palette.searchBarAndList.ListText,
                    ListItemTextFontSize: '13px',
                    ListBorderLeft: `1px solid ${theme.palette.searchBarAndList.ListBorderLeft}`,
                  }}
                  ListName="SearchList"
                />
              ) : (
                <IconButton
                  sx={{
                    ':hover': {
                      bgcolor: '#404f64',
                    },
                    position: 'absolute',
                    right: '0',
                    bgcolor: '#1F2937',
                    fontSize: '14px',
                    color: 'white',
                    height: '100%',
                    borderRadius: ' 0 8px 8px 0',
                    minWidth: '120px',
                    backgroundColor: theme.palette.searchButton.main,
                  }}
                >
                  Search
                </IconButton>
              )}
            </Search>

            <Stack direction={'row'} alignItems={'center'}>
              <IconButton
                sx={{
                  [theme.breakpoints.up(800)]: {
                    display: 'none',
                  },
                }}
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
      <Box></Box>
    </header>
  );
}
