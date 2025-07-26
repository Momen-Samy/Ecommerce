import {
  Box,
  Button,
  CircularProgress,
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
import { forwardRef, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { type TransitionProps } from '@mui/material/transitions';
import { Close } from '@mui/icons-material';
import ProductDetails from './ProductDetails';
import { type Product } from '../services/types';
import supabase from '../services/supabaseClient';

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Main() {
  const [alignment, setAlignment] = useState<string | null>('allProducts');
  const [open, setOpen] = useState(false);
  const [products, setProducts] = useState<any[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [clickedProduct, setclickedProduct] = useState<Product>({
    id: 0,
    product_title: '',
    product_description: '',
    product_rating: 0,
    product_price: 0,
    product_category: 'men',
    product_images: [],
  });

  const theme = useTheme();

  useEffect(() => {
    async function getData() {
      setLoading(true); // Start loading

      const { data, error } =
        alignment === 'allProducts'
          ? await supabase.from('products').select('*')
          : await supabase
              .from('products')
              .select()
              .eq('product_category', alignment);
      if (error) {
        console.error('Error fetching users:', error.message);
      } else {
        setProducts(data);
      }
      setLoading(false); // Stop loading
    }

    getData();
  }, [alignment]);

  const handleAlignment = (event: React.MouseEvent<HTMLElement>) => {
    setAlignment(event.currentTarget.ariaLabel);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setclickedProduct({
      id: 0,
      product_title: '',
      product_description: '',
      product_rating: 0,
      product_price: 0,
      product_category: 'men',
      product_images: [],
    });
  };

  if (loading) {
    return (
      <Box sx={{ py: 11, textAlign: 'center' }}>
        <CircularProgress />
      </Box>
    );
  }

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
                value="allProducts"
                aria-label="allProducts"
                sx={{
                  border: `1px solid ${theme.palette.toggleMenu.border}!important`,
                  borderRadius: '5px !important',
                }}
              >
                All product
              </ToggleButton>
              <ToggleButton
                value="men"
                aria-label="men"
                sx={{
                  border: `1px solid ${theme.palette.toggleMenu.border}!important`,
                  borderRadius: '5px !important',
                }}
              >
                MEN category
              </ToggleButton>
              <ToggleButton
                value="woman"
                aria-label="woman"
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
            gridTemplateColumns: 'repeat(auto-fit,minmax(200px, 350px))',
            justifyContent: 'space-around',
            gap: '20px',
            my: '20px',
          }}
        >
          {products ? (
            products.map((item: Product) => (
              <Card
                key={item.id}
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
                  sx={{ height: 400 }}
                  image={item.product_images[0]}
                  title="green iguana"
                />

                <CardContent>
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.product_title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      component={'p'}
                      color="textPrimary"
                    >
                      ${item.product_price}
                    </Typography>
                  </Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.product_description}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: 'space-between',
                    px: '16px',
                  }}
                >
                  <Button
                    size="small"
                    color="primary"
                    sx={{
                      gap: '10px',
                      alignItems: 'center',
                    }}
                    onClick={() => {
                      handleClickOpen();
                      setclickedProduct(item);
                    }}
                  >
                    <ShoppingCartOutlinedIcon /> Add To Chart
                  </Button>
                  <Rating
                    name="read-only"
                    precision={0.5}
                    value={item.product_rating}
                    readOnly
                    size="small"
                  />
                </CardActions>
              </Card>
            ))
          ) : (
            <Box sx={{ py: 11, textAlign: 'center' }}>
              <CircularProgress />
            </Box>
          )}
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
          <ProductDetails clickedProduct={clickedProduct} />
        </Dialog>
      </Container>
    </Box>
  );
}
