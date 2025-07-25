import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Rating,
  Slide,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { forwardRef, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { type TransitionProps } from '@mui/material/transitions';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main() {
  const [alignment, setAlignment] = useState<string | null>('left');
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component={'main'}
      sx={{
        bgcolor: theme.palette.mainBackground.primary,
        pb: '100px',
      }}
    >
      <Container>
        <Stack
          direction={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}
          flexWrap={'wrap'}
          gap={3}
          padding={'20px 16px'}
        >
          <Box>
            <Typography variant="h6">Selected Products</Typography>
            <Typography fontWeight={300} variant="body1">
              All our new arrivals in a exclusive brand selection
            </Typography>
          </Box>
          <Box>
            <ToggleButtonGroup
              color="error"
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
              orientation="horizontal"
              sx={{
                '.Mui-selected': {
                  border: '1px solid rgba(233, 69, 96, 0.5) ',
                  color: '#e94560',
                  backgroundColor: 'initial',
                },
                gap: '10px',
              }}
            >
              <ToggleButton
                value="left"
                aria-label="left aligned"
                sx={{
                  border: `1px solid ${theme.palette.toggleMenu.border}!important`,
                  borderRadius: '5px !important',
                }}
              >
                All product
              </ToggleButton>
              <ToggleButton
                value="center"
                aria-label="centered"
                sx={{
                  border: `1px solid ${theme.palette.toggleMenu.border}!important`,
                  borderRadius: '5px !important',
                }}
              >
                MEN category
              </ToggleButton>
              <ToggleButton
                value="right"
                aria-label="right aligned"
                sx={{
                  border: `1px solid ${theme.palette.toggleMenu.border}!important`,
                  borderRadius: '5px !important',
                }}
              >
                Women category
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
        </Stack>

        <Box
          display={'grid'}
          sx={{
            gridTemplateColumns: 'repeat(auto-fit,minmax(250px,1fr))',
            gap: 2,
            my: '20px',
          }}
        >
          {['a', 'b', 'c'].map(item => (
            <Card
              key={item}
              sx={{
                '.MuiCardMedia-root': {
                  transition: '0.5s',
                },
                ':hover .MuiCardMedia-root': {
                  scale: '1.1',
                  rotate: '1deg',
                },
              }}
            >
              <CardMedia
                sx={{ height: 280 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  justifyContent={'space-between'}
                >
                  <Typography gutterBottom variant="h6" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="subtitle1" component={'p'}>
                    $13
                  </Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Necessitatibus architecto vel labore soluta reprehenderit nam,
                  provident facilis beatae, adipisci minus ducimus optio eius
                  qui veritatis quasi ea. Dicta, similique nemo?
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  size="small"
                  color="primary"
                  sx={{
                    gap: '10px',
                    alignItems: 'center',
                  }}
                  onClick={handleClickOpen}
                >
                  <ShoppingCartOutlinedIcon /> Add To Chart
                </Button>
                <Rating
                  name="read-only"
                  precision={0.5}
                  value={4}
                  readOnly
                  size="small"
                />
              </CardActions>
            </Card>
          ))}
        </Box>

        <Dialog
          open={open}
          slots={{
            transition: Transition,
          }}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          sx={{
            '.MuiPaper-root': {
              minWidth: '320px',
              maxWidth: '100%',
              width: '700px',
              position: 'relative',
            },
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
              top: '10px',
              right: '10px',
            }}
            onClick={handleClose}
          >
            <Close />
          </IconButton>
          <ProductDetails />
        </Dialog>
      </Container>
    </Box>
  );
}
