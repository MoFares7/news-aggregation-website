import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import colors from '../../../assets/theme/base/colors';
import typography from '../../../assets/theme/base/typography';
import borders from '../../../assets/theme/base/borders';
import MDButton from './../../../items/MDButton/index';

const FilterSection = ({ onSearch, onRefresh }) => {
        const [searchTerm, setSearchTerm] = useState('');
        const [nameFilter, setNameFilter] = useState('');
        const [dateFilter, setDateFilter] = useState('');

        const handleSearch = () => {
                onSearch({ searchTerm, nameFilter, dateFilter });
        };

        const handleRefresh = () => {
                onRefresh();
        };

        return (
                <Box
                        sx={{
                                backgroundColor: colors.primary.main,
                                justifyContent: 'center',
                                display: 'flex',
                                pt: 1,
                        }}
                >
                        <MDButton typography={typography.button.main}
                                sx={{
                                        color: colors.white.main,
                                        backgroundColor: colors.success.main,
                                        '&&:hover': {
                                                backgroundColor: colors.success.focus
                                        }

                                }} onClick={handleRefresh}>
                                Refresh
                        </MDButton>
                        <TextField
                                label="Search "
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                InputLabelProps={{
                                        style: {
                                                color: colors.white.main
                                        },
                                }}
                                InputProps={{
                                        style: {
                                                color: colors.white.main,
                                                borderBottom: `2px solid ${colors.white.main}`, // Set the color for the underline
                                                borderTop: 'none',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                                backgroundColor: 'transparent',
                                        },
                                }}
                        />
                        <TextField
                                label="Search Categries"
                                value={nameFilter}
                                onChange={(e) => setNameFilter(e.target.value)}
                                InputLabelProps={{
                                        style: {
                                                color: colors.white.main,
                                        },
                                }}
                                InputProps={{
                                        style: {
                                                color: colors.white.main,
                                                borderBottom: `2px solid ${colors.white.main}`,
                                                borderTop: 'none',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                                backgroundColor: 'transparent',
                                        },
                                }}
                        />
                        <TextField
                                type="date"
                                // label="Search by Date"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                                InputLabelProps={{
                                        style: {
                                                color: colors.white.main,
                                        },
                                }}
                                InputProps={{
                                        style: {
                                                color: colors.white.main,
                                                borderBottom: `2px solid ${colors.white.main}`,
                                                borderTop: 'none',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                                backgroundColor: 'transparent',
                                        },
                                }}
                        />
                        <MDButton typography={typography.button.main}
                                sx={{
                                        color: colors.secondary.main,
                                        backgroundColor: colors.white.main,
                                        '&&:hover': {
                                                color: colors.white.main,
                                                backgroundColor: colors.secondary.focus
                                        }
                                }} onClick={handleSearch}>
                                Search
                        </MDButton>
                </Box>
        );
};

export default FilterSection;
