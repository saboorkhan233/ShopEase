// Install the necessary dependencies
// npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LoopIcon from '@mui/icons-material/Loop';
import PaymentIcon from '@mui/icons-material/Payment';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const features = [
  {
    icon: <LocalShippingIcon fontSize="large" />,
    title: 'Free Delivery',
    description: 'from $50',
  },
  {
    icon: <ChatBubbleOutlineIcon fontSize="large" />,
    title: '99% Customer',
    description: 'Feedbacks',
  },
  {
    icon: <LoopIcon fontSize="large" />,
    title: '365 Days',
    description: 'for free return',
  },
  {
    icon: <PaymentIcon fontSize="large" />,
    title: 'Payment',
    description: 'Secure System',
  },
  {
    icon: <StarOutlineIcon fontSize="large" />,
    title: 'Only Best',
    description: 'Brands',
  },
];

const Feature = ({ icon, title, description }) => (
  <Grid item xs>
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border={1}
      borderRadius={0} 
      padding={2}
      textAlign="center"
      height="100%"
      cursor = "pointer"
    >
      {icon}
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  </Grid>
);

const FeatureList = () => (
  <Box padding={2}>
    <Grid container spacing={0}>
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </Grid>
  </Box>
);

export default FeatureList;
