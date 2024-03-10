import React, { useState, useEffect, useRef } from 'react';
import { Box, Button } from '@mui/material';
import NewsCards from '../../../../components/Cards/news_card';
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';

const ScrollSection = ({ newsData }) => {
        const scrollableRef = useRef(null);
        const [isScrollVisible, setIsScrollVisible] = useState(false);

        useEffect(() => {
                checkScroll();
                // Add event listener for resizing
                window.addEventListener('resize', checkScroll);

                return () => {
                        window.removeEventListener('resize', checkScroll);
                };
        }, []);

        const checkScroll = () => {
                if (
                        scrollableRef &&
                        scrollableRef.current &&
                        scrollableRef.current.scrollWidth > scrollableRef.current.clientWidth
                ) {
                        setIsScrollVisible(true);
                } else {
                        setIsScrollVisible(false);
                }
        };

        const onScroll = (direction) => {
                const container = scrollableRef.current;
                const scrollOffset = direction === 'forward' ? container.clientWidth : -container.clientWidth;
                container.scrollLeft += scrollOffset;
        };

        return (
                <Box
                        sx={{
                                display: 'flex',
                                width: '100%',
                                maxWidth: {
                                        xs: 720,
                                        sm: 720,
                                        md: 960,
                                        lg: 1280,
                                        xl: 1920,
                                },
                        }}
                >
                        <Button onClick={() => onScroll('backward')}>
                                <ArrowBackIosNewOutlined />
                        </Button>
                        <Box
                                sx={{
                                        maxWidth: {
                                                xs: 600,
                                                sm: 600,
                                                md: 960,
                                                lg: 1280,
                                                xl: 1920,
                                        },
                                        display: 'flex',
                                        mt: 2,
                                        boxSizing: 'border-box',
                                        overflowX: 'auto',
                                }}
                        >
                                <Box
                                        sx={{
                                                flexWrap: 'nowrap',
                                                display: 'flex',
                                                overflowX: 'auto',
                                                overflow: 'hidden',
                                        }}
                                        ref={scrollableRef}
                                >
                                        {newsData && newsData.map((article, index) => (
                                                <Box
                                                        sx={{
                                                                flex: '0 0 auto',
                                                                width: 300,
                                                                marginRight: 1,
                                                        }}
                                                        key={index}
                                                >
                                                        <NewsCards
                                                                avatar={article.urlToImage}
                                                                author={article.author}
                                                                image={article.urlToImage}
                                                                title={article.title}
                                                                createdAt={article.publishedAt}
                                                                description={article.description}
                                                        />
                                                </Box>
                                        ))}
                                </Box>
                        </Box>
                        <Button onClick={() => onScroll('forward')}>
                                <ArrowForwardIosOutlined />
                        </Button>
                </Box>
        );
};

export default ScrollSection;
