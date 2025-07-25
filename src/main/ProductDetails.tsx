import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { useState } from 'react';
import { Box, Button, CardMedia, Stack, Typography } from '@mui/material';

export default function ProductDetails() {
  const [alignment, setAlignment] = useState<string | null>('left');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Stack
      sx={{
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <CardMedia
        sx={{ height: 280, width: { xs: '300px', md: '360px' } }}
        image="../../public/images/Jacket/1 (5).jpg"
        title="green iguana"
      />

      <Box
        sx={{
          padding: '50px 10px 20px',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          alignItems: 'flex-start',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textTransform: 'uppercase',
          }}
        >
          Men's Fashion
        </Typography>
        <Typography variant="h6" fontSize={'22px'} color={'crimson'}>
          $13.99
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet hic
          libero perferendis cum cumque natus quas ipsum ex corrupti iusto sint
          doloremque maiores distinctio dolorem aliquam amet, facere ad
          suscipit!
        </Typography>

        <Stack
          direction={'row'}
          gap={2}
          my={2}
          sx={{ justifyContent: { xs: 'center', sm: 'left' } }}
        >
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
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
            <ToggleButton
              value="left"
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
                src="../../public/images/Jacket/1 (5).jpg"
                alt=""
                height={'100%'}
                width={'100%'}
              />
            </ToggleButton>

            <ToggleButton
              value="center"
              aria-label="centered"
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
                src="../../public/images/Jacket/1 (5).jpg"
                alt=""
                height={'100%'}
                width={'100%'}
              />
            </ToggleButton>

            <ToggleButton
              value="right"
              aria-label="right aligned"
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
                src="../../public/images/Jacket/1 (5).jpg"
                alt=""
                height={'100%'}
                width={'100%'}
              />
            </ToggleButton>
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
