import React from 'react';
import { Avatar, Box, Grid, Typography, Divider } from '@mui/material';
import colors from '../../../assets/theme/base/colors';
import HeadLineTitle from '../../../components/HeadLine/head_line_title';
import ScrollCard from '../components/scroll_card';
import borders from '../../../assets/theme/base/borders';
import BestTopicCard from '../components/best_topic_card';
import Appbar from '../../../components/Appbar/appar';

const HomePage = () => {
  return (
    <Appbar children={
      <>
        <HeadLineTitle title={"Top business headlines in the US right now"} color={colors.white.main} />
        <ScrollCard />
        <Box sx={{ pt: 5 }} />
        <HeadLineTitle title={"Top headlines from Tesla"} color={colors.white.main} />
        <Box sx={{ pt: 2 }} />
        <BestTopicCard />
        <Box sx={{ pt: 5 }} />
        <HeadLineTitle title={"Top headlines from TechCrunch right now"} color={colors.white.main} />
        <ScrollCard />
        <Box sx={{ pt: 5 }} />
      </>
    } />
  );
};

export default HomePage;
