import { Box, Container, Link, Typography, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import CreditScoreOutlinedIcon from '@mui/icons-material/CreditScoreOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import AccessAlarmOutlinedIcon from '@mui/icons-material/AccessAlarmOutlined';

import SwiperBar from '../components/Swiper';
export default function Hero() {
  interface CaptionProps {
    title: string;
    body: string;
    link: string;
  }

  const Caption = ({ title, body, link }: CaptionProps) => {
    return (
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 31,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: '#2B3445',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: '#2B3445',
            lineHeight: 1.5,
          }}
        >
          {body}
        </Typography>
        <Link
          underline="none"
          href="#"
          sx={{
            color: '#2B3445',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            transition: '0.2s',
            cursor: 'pointer',
            '&:hover': {
              color: '#D23F57',
            },
          }}
        >
          {link}
          <ArrowForwardIcon sx={{ fontSize: '13px' }} />
        </Link>
      </Box>
    );
  };

  const FooterBoxsDetails = [
    {
      icon: ElectricBoltIcon,
      title: 'Fast Delivery',
      subTitle: 'Start from $10',
    },
    {
      icon: CreditScoreOutlinedIcon,
      title: 'Money Guarantee',
      subTitle: '7 Days Back',
    },
    {
      icon: WorkspacePremiumOutlinedIcon,
      title: '365 Days',
      subTitle: 'For free return',
    },
    {
      icon: AccessAlarmOutlinedIcon,
      title: 'Payment',
      subTitle: 'Secure system',
    },
  ];

  const FooterBoxList = FooterBoxsDetails.map((box, indx: number) => {
    const theme = useTheme();
    return (
      <Box
        key={indx}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'flex-start', sm: 'center' },
          gap: '1rem',
          [theme.breakpoints.down(600)]: {
            paddingLeft: '20px',
          },
        }}
      >
        <box.icon />
        <Box sx={{ width: '150px' }}>
          <Typography
            variant="h4"
            sx={{
              lineHeight: '1.3',
              fontSize: '17px',
              fontWeight: 500,
            }}
          >
            {box.title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#7d879c' }}>
            {box.subTitle}
          </Typography>
        </Box>
      </Box>
    );
  });

  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.mainBackground.primary,
      }}
    >
      <Container
        sx={{
          pb: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          mt: 4,
        }}
      >
        <Box
          sx={{ pt: 2, mt: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}
        >
          <SwiperBar />

          <Box sx={{ display: { xs: 'none', md: 'block', minWidth: '26.6%' } }}>
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <img src="public\Images\banner-17.jpg" alt="" width={'100%'} />
              <Caption
                title={'NEW ARRIVALS'}
                body={'SUMMER SALE 20% OFF'}
                link={'shop now'}
              />
            </Box>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '5px',
                overflow: 'hidden',
                display: 'flex',
              }}
            >
              <img src="public\Images\banner-16.jpg" alt="" />
              <Caption
                title={'GAMING 4K'}
                body={'DESKTOPS & LAPTOPS'}
                link={'shop now'}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            bgcolor: 'white',
            width: '100%',
            p: '1rem 0px',
            gap: '20px',
            borderRadius: '0.5rem',
            color: theme.palette.grey[900],
            [theme.breakpoints.between(600, 900)]: {
              gridTemplateColumns: 'repeat(2,1fr)',
              '& > .MuiBox-root:nth-of-type(odd)': {
                borderRight: '1px solid #dae1e7',
              },
            },
            [theme.breakpoints.up(900)]: {
              gridTemplateColumns: 'repeat(4,1fr)',
              '& > .MuiBox-root:not(:last-child)': {
                borderRight: '1px solid #dae1e7',
              },
            },
          }}
        >
          {FooterBoxList}
        </Box>
      </Container>
    </Box>
  );
}
