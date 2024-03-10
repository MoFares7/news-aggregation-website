import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import colors from '../../../../assets/theme/base/colors';
import borders from '../../../../assets/theme/base/borders';
import Appbar from '../../../../components/Appbar/appar';
import avatar from '../../../../assets/images/education.svg';
import HeadPages from '../../../../components/HeadLine/head_pages';
import SpecializedCardNews from '../../../../components/Cards/specialized_card_news';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksNews } from '../../services/book_news_slice';
import education_image from '../../../../assets/images/news_education.jpg';
import FilterSection from '../components/filter_section';
import ShimmerCard from '../../../../components/Cards/shimmar_card';
import EmptyCard from '../../../../components/Cards/empty_card';

const EducationsPage = () => {
        const dispatch = useDispatch();
        const [filteredResults, setFilteredResults] = useState([]);
        const [initialLoad, setInitialLoad] = useState(true);

        useEffect(() => {
                dispatch(fetchBooksNews());
        }, [dispatch]);

        const booksNews = useSelector((state) => state.booksNews);
        const { results, loading, error } = booksNews;

        //! Set initial data for rendering
        useEffect(() => {
                setFilteredResults(results);
        }, [results]);

        //? Search function
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

        const handleRefresh = () => {
                dispatch(fetchBooksNews());
                setInitialLoad(true);
        };

        return (
                <Box sx={{ justifyContent: 'center' }}>
                        <FilterSection onSearch={handleSearch} onRefresh={handleRefresh} />

                        <Appbar
                                children={
                                        <>
                                                <Box sx={{ justifyContent: 'center' }}>
                                                        <HeadPages title={'Education'} images={avatar} />
                                                        <Box
                                                                sx={{
                                                                        display: 'flex',
                                                                        justifyContent: 'center',
                                                                }}
                                                        >
                                                                <Box
                                                                        sx={{
                                                                                maxWidth: {
                                                                                        xs: 300,
                                                                                        sm: 300,
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
                                                                                <CardError
                                                                                        errorMessage="ouccred error please try again"
                                                                                />
                                                                        ) : (filteredResults && filteredResults.length > 0) || initialLoad ? (
                                                                                (filteredResults ? filteredResults : results)?.map((tec, index) => (
                                                                                        <SpecializedCardNews
                                                                                                key={index}
                                                                                                image={education_image}
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

export default EducationsPage;
