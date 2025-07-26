import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useState } from 'react';
import { Box, Button, CardMedia, Stack, Typography } from '@mui/material';
import type { Product } from '../services/types';
type Props = {
  clickedProduct: Product;
};
export default function ProductDetails({ clickedProduct }: Props) {
  const [selectedImg, setselectedImg] = useState(0);

  return (
    <Stack
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <CardMedia
        sx={{
          height: '280px',
          width: { xs: '300px', md: '360px' },
          backgroundSize: 'contain',
        }}
        image={clickedProduct.product_images[selectedImg]}
        title="green iguana"
      />

      <Box
        sx={{
          padding: '50px 10px 20px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textTransform: 'uppercase',
          }}
        >
          {clickedProduct.product_title}
        </Typography>
        <Typography variant="h6" fontSize={'22px'} color={'crimson'}>
          ${clickedProduct.product_price}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {clickedProduct.product_description}
        </Typography>

        <Stack
          direction={'row'}
          gap={2}
          my={2}
          sx={{ justifyContent: { xs: 'center', sm: 'left' } }}
        >
          <ToggleButtonGroup
            value={selectedImg}
            exclusive
            aria-label="text alignment"
            sx={{
              width: '100%',
              '.Mui-selected': {
                border: '1px solid #aeaeaf !important',
                opacity: '1',
                backgroundColor: 'initial',
              },
            }}
          >
            {clickedProduct.product_images.map((Image, indx) => (
              <ToggleButton
                value={indx}
                aria-label="left aligned"
                sx={{
                  height: '110px',
                  mx: 1,
                  p: '0',
                  opacity: '0.5',
                  overflow: 'hidden',
                  borderRadius: '5px !important',
                }}
              >
                <img
                  src={Image}
                  alt=""
                  height={'100%'}
                  width={'100%'}
                  onClick={() => {
                    setselectedImg(indx);
                  }}
                />
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Stack>

        <Button
          variant="contained"
          size="small"
          sx={{
            gap: '10px',
            textTransform: 'capitalize',
          }}
        >
          <AddShoppingCartIcon />
          Buy Now
        </Button>
      </Box>
    </Stack>
  );
}
