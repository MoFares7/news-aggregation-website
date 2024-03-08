import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import colors from '../../../assets/theme/base/colors';
import HeadLineTitle from '../../../components/HeadLine/head_line_title';
import ScrollCard from '../components/scroll_card';
import BestTopicCard from '../components/best_topic_card';
import Appbar from '../../../components/Appbar/appar';
import world from '../../../assets/images/world.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../services/us_service/us_news_slice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const usNews = useSelector((state) => state.usNews);

  console.log(usNews + "fares");


  const { articles } = usNews;

  return (
    <>
      <Box
        sx={{
          backgroundColor: colors.primary.main,
          marginBottom: 2,
          height: {
            xs: '250px',
            sm: '350px',
            md: '450px',
            lg: '500px',
            xl: '550px',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={world}
          alt="World"
          style={{ width: '70%', height: '100%', objectFit: 'fill' }}
        />
      </Box>

      <Appbar
        children={
          <>
            <HeadLineTitle
              title={"Top business headlines in the US right now"}
              color={colors.white.main}
            />
            {articles && <ScrollCard newsData={articles.articles} />}
            <Box sx={{ pt: 5 }} />
            <HeadLineTitle title={"Top headlines from Tesla"} color={colors.white.main} />
            <Box
              sx={{
                pt: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BestTopicCard />
            </Box>
            <Box sx={{ pt: 5 }} />
            <HeadLineTitle
              title={"Top headlines from TechCrunch right now"}
              color={colors.white.main}
            />
            <ScrollCard />
            <Box sx={{ pt: 5 }} />
          </>
        }
      />
    </>
  );
};

export default HomePage;
