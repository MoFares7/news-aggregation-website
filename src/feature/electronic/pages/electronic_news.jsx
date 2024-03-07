import React from 'react';
import { Avatar, Box, CardMedia, Divider, Grid } from '@mui/material';
import colors from '../../../assets/theme/base/colors';
import borders from '../../../assets/theme/base/borders';
import Appbar from '../../../components/Appbar/appar';
import MDTypography from '../../../items/MDTypography';
import typography from './../../../assets/theme/base/typography';
import SpecializedCardNews from '../components/specialized_card_news';
import avatar from '../../../assets/images/lamp.svg';
import HeadPages from '../../../components/HeadLine/head_pages';

const ElectronicNews = () => {
        const tecNews = [
                {
                        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
                        title: "job is software engineer",
                        createdAt: "Posted at 22 hours ago ",
                        description: "Certainly! Could you please provide more details or specify the topic or context you'd like the text to be about? This will help me generate a more relevant and helpful response for you.",
                        content: "Soft skills refer to a set of personal attributes, communication abilities, and interpersonal qualities that enable individuals to work well with others and navigate their professional and personal lives effectively. Unlike hard or technical skills, which are specific to a particular job or industry, soft skills are more universal and can be applied across various roles and settings.Common soft skills include:"
                },
                {
                        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
                        title: "job is software engineer",
                        createdAt: "Posted at 22 hours ago ",
                        description: "Certainly! Could you please provide more details or specify the topic or context you'd like the text to be about? This will help me generate a more relevant and helpful response for you.",
                        content: "Soft skills refer to a set of personal attributes, communication abilities, and interpersonal qualities that enable individuals to work well with others and navigate their professional and personal lives effectively. Unlike hard or technical skills, which are specific to a particular job or industry, soft skills are more universal and can be applied across various roles and settings.Common soft skills include:"
                },
                {
                        image: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
                        title: "job is software engineer",
                        createdAt: "Posted at 22 hours ago ",
                        description: "Certainly! Could you please provide more details or specify the topic or context you'd like the text to be about? This will help me generate a more relevant and helpful response for you.",
                        content: "Soft skills refer to a set of personal attributes, communication abilities, and interpersonal qualities that enable individuals to work well with others and navigate their professional and personal lives effectively. Unlike hard or technical skills, which are specific to a particular job or industry, soft skills are more universal and can be applied across various roles and settings.Common soft skills include:"
                }
        ]
        return (
                <Appbar children={
                        <>
                                <Box sx={{
                                        justifyContent: 'center'
                                }}>
                                        <HeadPages
                                                title={"Technology"}
                                                images={avatar}
                                        />
                                        {/* <MDTypography typography={typography.caption}>
                                                Recommended based on your interests
                                        </MDTypography> */}
                                        <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                        }}>
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
                                                        {tecNews.map((tec, index) => (
                                                                <>
                                                                       
                                                                        <SpecializedCardNews
                                                                                key={index}
                                                                                image={tec.image}
                                                                                title={tec.title}
                                                                                createdAt={tec.createdAt}
                                                                                description={tec.description}
                                                                                content={tec.content}
                                                                        />
                                                                            </>
                                                        ))}

                                                </Box>
                                        </Box>
                                </Box>
                                <Box sx={{ p: 3 }} />
                        </>
                } />


        );
};

export default ElectronicNews;
