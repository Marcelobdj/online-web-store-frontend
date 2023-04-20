// src/theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#F2F2F2',
            paper: '#A2A685',
        },
        text: {
            primary: '#0460D9',
        },
        primary: {
            main: '#117CD9',
        },
        secondary: {
            main: '#F2F2F2',
        },
        navbarFooter: {
            background: '#A2A685',
            text: '#F2F2F2',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#0D0D0D',
            paper: '#40012F',
        },
        text: {
            primary: '#A65424',
        },
        primary: {
            main: '#F2913D',
        },
        secondary: {
            main: '#0D0D0D',
        },
        navbarFooter: {
            background: '#40012F',
            text: '#0D0D0D',
        },
    },
});

export { lightTheme, darkTheme };