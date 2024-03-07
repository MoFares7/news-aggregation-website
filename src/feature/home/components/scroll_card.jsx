import React, { useState, useEffect, useRef } from 'react';
import { Box, Button } from '@mui/material';
import NewsCards from '../../../components/Cards/news_card_home';
import { ArrowBackIosNewOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';
const ScrollCard = () => {
        const newsData = [
                {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 0",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                }, {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 1",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                }, {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 2",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                }, {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 3",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                }, {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 4",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                }, {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 14",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                }, {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 14",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                }, {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 11",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                }, {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 12",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                }, {
                        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        author: "fares dabbas",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4A224fVYcQVau6NcpaI2X3dmbeyJgMoB_Vo4xv2WWA&s",
                        title: "First 12",
                        createdAt: "12/2/2024",
                        description: "saddas dsf sdfd gf fghg fhf ghf gh fgh fh g fg hfg  tr et er te rteterter ffd"
                },
        ];

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
                <Box sx={{
                        display: 'flex',
                        width: '100%',
                }}>
                        <Button onClick={() => onScroll('backward')}><ArrowBackIosNewOutlined /></Button>
                        <Box sx={{
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
                        }}>
                                <Box sx={{
                                        flexWrap: 'nowrap',
                                        display: 'flex',
                                        overflowX: 'auto',
                                        overflow: 'hidden'
                                }}
                                        ref={scrollableRef}>
                                        {newsData.map((news, index) => (
                                                <Box sx={{
                                                        flex: '0 0 auto',
                                                        width: 300,
                                                        marginRight: 1,
                                                }}>
                                                        <NewsCards
                                                                key={index}
                                                                avatar={news.avatar}
                                                                author={news.author}
                                                                image={news.image}
                                                                title={news.title}
                                                                createdAt={news.createdAt}
                                                                description={news.description}
                                                        />
                                                </Box>
                                        ))}
                                </Box>
                        </Box>
                        <Button onClick={() => onScroll('forward')}><ArrowForwardIosOutlined /></Button>
                </Box>
        );
};

export default ScrollCard;
