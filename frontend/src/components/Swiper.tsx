import { Swiper, SwiperSlide } from 'swiper/react';

// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/pagination';

import '../styles/SwiperStyle.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Box, Button, Stack, Typography, useTheme } from '@mui/material';

const mySlider = [
  {
    text: 'MEN',
    link: 'https://snqefyrsepicqljivmym.supabase.co/storage/v1/object/public/product-images//Swiper(2).jpg',
  },
  {
    text: 'WOMEN',
    link: 'https://snqefyrsepicqljivmym.supabase.co/storage/v1/object/public/product-images//Swiper(1).jpg',
  },
];

export default function SwiperBar() {
  const theme = useTheme();

  return (
    <Swiper
      loop={true}
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {mySlider.map(item => {
        return (
          <SwiperSlide key={item.link} className="parent-slider">
            <img src={item.link} alt="" />
            <Box
              sx={{
                [theme.breakpoints.up('sm')]: {
                  position: 'absolute',
                  left: '10%',
                  textAlign: 'left',
                },

                [theme.breakpoints.down('sm')]: {
                  pt: 4,
                  pb: 6,
                },
              }}
            >
              <Typography
                sx={{
                  color: '#222',
                }}
                variant="h5"
              >
                LIFESTYLE COLLECTION
              </Typography>

              <Typography
                sx={{
                  color: '#222',
                  fontWeight: 500,
                  my: 1,
                }}
                variant="h3"
              >
                {item.text}
              </Typography>

              <Stack
                sx={{
                  justifyContent: { xs: 'center', sm: 'left' },
                }}
                direction={'row'}
                alignItems={'center'}
              >
                <Typography
                  color={'#333'}
                  mr={1}
                  variant="h4"
                  sx={theme => ({
                    [theme.breakpoints.down(400)]: {
                      fontSize: '20px',
                    },
                  })}
                >
                  SALE UP TO
                </Typography>
                <Typography
                  color={'#D23F57'}
                  variant="h4"
                  sx={theme => ({
                    [theme.breakpoints.down(400)]: {
                      fontSize: '20px',
                    },
                  })}
                >
                  30% OFF
                </Typography>
              </Stack>
              <Typography
                sx={{
                  color: '#000',
                  fontWeight: 300,
                  my: 1,
                }}
                variant="body1"
              >
                Get Free Shipping on orders over $99.00
              </Typography>

              <Button
                sx={{
                  px: 5,
                  py: 1,
                  mt: 2,
                  backgroundColor: '#222',
                  boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
                  color: '#fff',
                  borderRadius: '1px',
                  '&:hover': {
                    bgcolor: '#151515',
                    boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
                  },
                }}
                variant="contained"
              >
                shop now
              </Button>
            </Box>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
