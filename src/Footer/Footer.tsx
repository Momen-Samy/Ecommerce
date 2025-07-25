import { Box, Button, Typography, useTheme } from '@mui/material';

export default function Footer() {
  const theme = useTheme();
  return (
    <Box component={'footer'}>
      <Box
        sx={{
          bgcolor: '#2B3445',
          py: 1.3,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      >
        <Typography
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          color={'HighlightText'}
          variant="h6"
          sx={theme => ({
            fontSize: 18,
            [theme.breakpoints.down(400)]: {
              flexDirection: 'column',
            },
          })}
        >
          Designed and developed by
          <Button
            sx={{
              mx: 0.5,
              fontSize: '18px',
              textTransform: 'capitalize',
            }}
            variant="text"
            color="primary"
          >
            <Box component={'span'} sx={{ color: '#ff7790' }}>
              {' '}
              Momen S@my
            </Box>
            <Box
              component={'span'}
              sx={{ ml: '10px', color: theme.palette.common.white }}
            >
              ©2025
            </Box>
          </Button>
        </Typography>
      </Box>
    </Box>
  );
}
