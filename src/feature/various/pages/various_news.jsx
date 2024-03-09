// VariousNewPage.js

import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import colors from '../../../assets/theme/base/colors';
import borders from '../../../assets/theme/base/borders';
import Appbar from '../../../components/Appbar/appar';
import avatar from '../../../assets/images/lamp.svg';
import HeadPages from '../../../components/HeadLine/head_pages';
import SpecializedCardNews from '../../../components/Cards/specialized_card_news';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVariousNews } from '../services/various_news_slice';
import ShimmerCard from '../../../components/Cards/shimmar_card';
import CardError from '../../../components/Cards/error_card';
import image_new from './../../../assets/images/news.jpg';
import SearchComponent from '../../education/components/s';

const VariousNewPage = () => {
        const dispatch = useDispatch();

        useEffect(() => {
                dispatch(fetchVariousNews());
        }, [dispatch]);

        const variousNews = useSelector((state) => state.variousNews);
        const { results, loading, error } = variousNews;

        console.log('Results:', results);

        return (
                <Box sx={{ justifyContent: 'center' }}>
                        <SearchComponent  />
                <Appbar
                                children={
                                        <>
                                                <Box sx={{ justifyContent: 'center' }}>
                                                        <HeadPages title={'Technology'} images={avatar} />
                                                        <Box
                                                                sx={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                }}
                                                        >
                                                                <Box
                                                                        sx={{
                                                                                maxWidth: {
                                                                                        xs: 320,
                                                                                        sm: 576,
                                                                                        md: 600,
                                                                                        lg: 992,
                                                                                        xl: 1280,
                                                                                },
                                                                                p: 2,
                                                                                boxShadow: 'none',
                                                                                overflow: 'visible',
                                                                                borderRadius: borders.borderRadius.lg,
                                                                                backgroundColor: colors.primary.main,
                                                                                color: colors.white.main,
                                                                                ml: 5,
                                                                                mr: 5,
                                                                                mt: 2,
                                                                        }}
                                                                >
                                                                        {loading ? (
                                                                                <Box
                                                                                        sx={{
                                                                                                width: '100%',
                                                                                                display: 'flex',
                                                                                                alignItems: 'center',
                                                                                                justifyContent: 'center',
                                                                                        }}
                                                                                >
                                                                                        <ShimmerCard width={'800px'} />
                                                                                </Box>
                                                                        ) : error ? (
                                                                                <CardError errorMessage="Failed to fetch news. Please try again later." />
                                                                        ) : (
                                                                                results &&
                                                                                results.map((tec, index) => (
                                                                                        <SpecializedCardNews
                                                                                                key={index}
                                                                                                image={image_new}
                                                                                                title={tec.pillarName}
                                                                                                createdAt={tec.webPublicationDate}
                                                                                                description={tec.webTitle}
                                                                                                content={tec.apiUrl}
                                                                                        />
                                                                                ))
                                                                        )}
                                                                </Box>
                                                        </Box>
                                                </Box>
                                                <Box sx={{ p: 3 }} />
                                        </>
                                }
                        />
                </Box>
        );
};

export default VariousNewPage;