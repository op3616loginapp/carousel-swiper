import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { grey, red } from '@mui/material/colors';
import Rating from '@mui/material/Rating';

const ProductCard = () => {
  const [value, setValue] = useState(2);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://cf.shopee.vn/file/fa717776991e7ddde792172181b7daab_tn"
        alt="green iguana"
      />
      <CardContent sx={{ '&:last-child': { pb: 1 } }}>
        <Stack spacing={1}>
          <Box sx={{ fontSize: 18, fontWeight: 500 }}>Dây sạc Iphone</Box>
          <Box
            sx={{
              fontSize: 12,
              fontWeight: 600,
              color: 'success.main',
              textTransform: 'uppercase',
            }}
          >
            Còn hàng
          </Box>
          <Rating
            name="simple-controlled"
            value={value}
            size="small"
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                fontSize: 16,
                color: grey[500],
                textDecoration: 'line-through',
              }}
            >
              ₫111.000
            </Box>
            <Box sx={{ fontSize: 20, color: red[500] }}>₫99.000</Box>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
