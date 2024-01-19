import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
    typography: {
        fontFamily: "Roboto, sans-serif",
    },
    palette: {
        mode: "light",
        primary: {
            main: "#04609b",
        },
        secondary: {
            main: "#284161",
        },
        text: {
            primary: "#000000",
        },
    },
    components: {
        MuiLink: {
            defaultProps: {
                underline: "none",
            },
        },
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
                position: "fixed",
            },
            styleOverrides: {
                root: {
                    backgroundColor: "white",
                    height: 60,
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 30,
                    fontWeight: 600,
                },
                h2: {
                    fontSize: 20,
                    fontWeight: 400,
                },
                subtitle1: {
                    fontSize: 18,
                    fontWeight: 600,
                },
            },
        },

        MuiButton: {
            defaultProps: {
                variant: "contained",
                size: "medium",
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: 10,
                    color: "#ffffff",
                    ":hover": {
                        backgroundColor: "#284161",
                        transition: "all 0.3s ease-in-out",
                    },
                },
            },
        },

        MuiCard: {
            defaultProps: {
                elevation: 0,
            },
            styleOverrides: {
                root: {
                    boxShadow: "0px 5px 5px rgba(0,0,0,0.05)",
                    borderRadius: "10px",
                },
            },
        },
    },
});
