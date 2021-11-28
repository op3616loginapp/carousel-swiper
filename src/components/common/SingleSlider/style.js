import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const SliderArrow = styled(Box)(({ theme }) => ({
  position: 'absolute',
  display: 'flex',
  top: 'calc(50% - 41.5px)',
  background: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  cursor: 'pointer',
  zIndex: 10,
  opacity: 0,
  transition: 'opacity 0.5s',
}));
