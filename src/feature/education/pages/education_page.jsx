import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import colors from '../../../assets/theme/base/colors';
import borders from '../../../assets/theme/base/borders';
import Appbar from '../../../components/Appbar/appar';
import avatar from '../../../assets/images/education.svg';
import HeadPages from '../../../components/HeadLine/head_pages';
import SpecializedCardNews from '../../../components/Cards/specialized_card_news';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksNews } from '../services/book_news_slice';
import education_image from '../../../assets/images/news_education.jpg';
import SearchComponent from '../components/s';
import ShimmerCard from '../../../components/Cards/shimmar_card';

const EducationsPage = () => {
        const dispatch = useDispatch();
        const [filteredResults, setFilteredResults] = useState([]);

        useEffect(() => {
                dispatch(fetchBooksNews());
        }, [dispatch]);

        const booksNews = useSelector((state) => state.booksNews);
        const { results, loading, error } = booksNews;

        // Search function
        const handleSearch = ({ searchTerm, nameFilter, dateFilter }) => {
                const filteredResults = results.filter((tec) => {
                        return (
                                tec.webTitle.toLowerCase().includes(searchTerm.toLowerCase()) &&
                                tec.pillarName.includes(nameFilter) &&
                                tec.webPublicationDate.includes(dateFilter)
                        );
                });
                setFilteredResults(filteredResults);
        };

        return (
                <Box sx={{ justifyContent: 'center' }}>
                        <SearchComponent onSearch={handleSearch} />
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

                                                                        {
                                                                                loading ? (
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
                                                                                )
                                                                                        :
                                                                                        (filteredResults.length > 0 ? filteredResults : results) &&
                                                                                        (filteredResults.length > 0 ? filteredResults : results).map((tec, index) => (
                                                                                                <SpecializedCardNews
                                                                                                        key={index}
                                                                                                        image={education_image}
                                                                                                        title={tec.pillarName}
                                                                                                        createdAt={tec.webPublicationDate}
                                                                                                        description={tec.webTitle}
                                                                                                        content={tec.apiUrl}
                                                                                                />
                                                                                        ))}
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
