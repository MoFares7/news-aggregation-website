// HomePage.js
import React, { useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import colors from '../../../assets/theme/base/colors';
import HeadLineTitle from '../../../components/HeadLine/head_line_title';
import ScrollCard from '../components/scroll_card';
import BestTopicCard from '../components/best_topic_card';
import Appbar from '../../../components/Appbar/appar';
import world from '../../../assets/images/world.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../services/us_service/us_news_slice';
import ShimmerCard from '../../../components/Cards/shimmar_card';
import { fetchGetTechCrunch } from '../services/techCrunch_service/tech_crunch_slice';

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchGetTechCrunch());
  }, []);

  const usNews = useSelector((state) => state.usNews);
  const { articles, loading, error } = usNews;

  const getTechCrunch = useSelector((state) => state.getTechCrunch);
  const { articles: techCrunchArticles, loading: techCrunchLoading, error: techCrunchError } = getTechCrunch;

  // Check for error state
  if (error) {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <p>Error fetching data. Please try again later.</p>
      </Box>
    );
  }

  console.log('usNews:', usNews);
  console.log('getTechCrunch:', getTechCrunch);

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
            {loading ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShimmerCard />
              </Box>
            ) : (
              articles && <ScrollCard newsData={articles} />
            )}

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
            {techCrunchLoading ? (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ShimmerCard />
              </Box>
            ) : (
              techCrunchArticles && <ScrollCard newsData={techCrunchArticles} />
            )}
            <Box sx={{ pt: 5 }} />
          </>
        }
      />
    </>
  );
};

export default HomePage;
