import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const SliderArrow = styled(Box)(({ theme, hidden }) => ({
  position: 'absolute',
  top: 'calc(50% - 10px)',
  display: hidden ? 'none' : 'flex',
  background: theme.palette.common.white,
  borderRadius: '50%',
  cursor: 'pointer',
  boxShadow: '0 1px 12px 0 rgb(0 0 0 / 12%)',
  zIndex: 10,
  padding: 3,
  transition: 'transform 0.3s',
}));

export const SliderItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: '1px solid rgba(0,0,0,.05)',
  borderBottom: '1px solid rgba(0,0,0,.05)',
  '&:hover': {
    borderColor: 'rgba(0,0,0,.12)',
    boxShadow: '0 0 0.8125rem 0 rgb(0 0 0 / 5%)',
  },
  cursor: 'pointer',
}));
