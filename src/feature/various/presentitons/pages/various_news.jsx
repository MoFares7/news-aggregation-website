import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import colors from '../../../../assets/theme/base/colors';
import borders from '../../../../assets/theme/base/borders';
import Appbar from '../../../../components/Appbar/appar';
import avatar from '../../../../assets/images/lamp.svg';
import HeadPages from '../../../../components/HeadLine/head_pages';
import SpecializedCardNews from '../../../../components/Cards/specialized_card_news';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVariousNews } from '../../services/various_news_slice';
import ShimmerCard from '../../../../components/Cards/shimmar_card';
import image_new from './../../../../assets/images/news.jpg';
import FilterSection from '../../../education/presentitons/components/filter_section';
import EmptyCard from '../../../../components/Cards/empty_card';

const VariousNewPage = () => {
        const dispatch = useDispatch();
        const [filteredResults, setFilteredResults] = useState([]);
        const [initialLoad, setInitialLoad] = useState(true);

        useEffect(() => {
                dispatch(fetchVariousNews());
        }, [dispatch]);

        const variousNews = useSelector((state) => state.variousNews);
        const { results, loading, error } = variousNews;

        useEffect(() => {
                setFilteredResults(results);
        }, [results]);

        const handleSearch = ({ searchTerm, nameFilter, dateFilter }) => {
                const filteredResults = results.filter((tec) => {
                        return (
                                tec.pillarName.toLowerCase().includes(searchTerm.toLowerCase()) &&
                                tec.webTitle.includes(nameFilter) &&
                                tec.webPublicationDate.includes(dateFilter)
                        );
                });

                setFilteredResults(filteredResults);
                setInitialLoad(false);
        };
        const handleRefreshVarious = () => {
                dispatch(fetchVariousNews());
                setInitialLoad(true);
        };

        return (
                <Box sx={{ justifyContent: 'center' }}>
                        <FilterSection onSearch={handleSearch} onRefresh={handleRefreshVarious} />
                        <Appbar
                                children={
                                        <>
                                                <Box sx={{ justifyContent: 'center' }}>
                                                        <HeadPages title={'Various'} images={avatar} />
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
                                                                        ) : (filteredResults && filteredResults.length > 0) || initialLoad ? (
                                                                                (filteredResults ? filteredResults : results)?.map((tec, index) => (
                                                                                        <SpecializedCardNews
                                                                                                key={index}
                                                                                                image={image_new}
                                                                                                title={tec.pillarName}
                                                                                                createdAt={tec.webPublicationDate}
                                                                                                description={tec.webTitle}
                                                                                                content={tec.apiUrl}
                                                                                        />
                                                                                ))
                                                                        ) : (
                                                                                <Box
                                                                                        sx={{
                                                                                                textAlign: 'center',
                                                                                                padding: '20px',
                                                                                                color: colors.white.main,
                                                                                        }}
                                                                                >
                                                                                        <EmptyCard
                                                                                                message="not founded any result"
                                                                                        />
                                                                                </Box>
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
