// SearchComponent.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import colors from './../../../assets/theme/base/colors';
import typography from './../../../assets/theme/base/typography';

const SearchComponent = ({ onSearch }) => {
        const [searchTerm, setSearchTerm] = useState('');
        const [nameFilter, setNameFilter] = useState('');
        const [dateFilter, setDateFilter] = useState('');

        const handleSearch = () => {
                onSearch({ searchTerm, nameFilter, dateFilter });
        };

        return (
                <Box sx={{
                        backgroundColor: colors.white.main,
                        justifyContent: 'center',
                        display: 'flex',
                        p: 1
                }} >
                        <TextField
                                label="Search Term"
                                variant="outlined"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <TextField
                                label="Filter by Name"
                                variant="outlined"
                                value={nameFilter}
                                onChange={(e) => setNameFilter(e.target.value)}
                        />
                        <TextField

                                type="date"
                                variant="outlined"
                                value={dateFilter}
                                onChange={(e) => setDateFilter(e.target.value)}
                        />
                        <Button typography={typography.button.main}  onClick={handleSearch}>
                                Search
                        </Button>
                </Box>
        );
};

export default SearchComponent;
