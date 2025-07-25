import { Divider, IconButton, styled } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import SelectedMenu from './SelectedMenu';
import { CatSearchListOptions } from '../Header/Data';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  flexGrow: 0.5,
  border: `1px solid ${theme.palette.searchBarAndList.ListBorder}`,
  '&:hover': {
    border: `1px solid ${theme.palette.searchBarAndList.ListBorderAtHover}`,
  },
  height: '40px',
  borderRadius: '7px',
  backgroundColor: theme.palette.searchBarAndList.backgroundSearchBar,
  marginLeft: 0,
  [theme.breakpoints.down(1000)]: {
    width: '600px',
  },
  [theme.breakpoints.down(620)]: {
    width: '300px',
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

export default function SearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
        <Divider
          orientation="vertical"
          flexItem
          sx={theme => ({
            borderColor: theme.palette.searchBarAndList.SearchIcon,
            p: '0 2px',
          })}
        />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
      />

      <SelectedMenu
        options={CatSearchListOptions}
        sx={{
          List: theme => ({
            width: '160px',
            borderRadius: '0 7px 7px 0',
            borderLeft: `1px solid ${theme.palette.searchBarAndList.ListBorderLeft}`,
            [theme.breakpoints.down(1100)]: {
              display: 'none',
            },
          }),

          ListItemText: theme => ({
            color: theme.palette.searchBarAndList.ListText,
            fontSize: '13px',
          }),
        }}
        ListName="SearchList"
      />

      <IconButton
        sx={theme => ({
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
          backgroundColor: theme.palette.searchBarAndList.searchButton,
          [theme.breakpoints.up(1000)]: {
            display: 'none',
          },
        })}
      >
        Search
      </IconButton>
    </Search>
  );
}
