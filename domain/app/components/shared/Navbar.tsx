import React from "react";
import NextLink from "next/link";
import {
    AppBar,
    Container,
    Menu,
    MenuItem,
    Box,
    IconButton,
    Toolbar,
    Link,
    Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

interface MenuHref {
    title: string;
    href: string;
}

const pages: MenuHref[] = [
    {
        title: "Day One",
        href: "/one",
    },
    {
        title: "Day Two",
        href: "/two",
    },
    {
        title: "Day Three",
        href: "/third",
    },
];

export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky">
            <Container
                maxWidth="xl"
                sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    backgroundColor: "#ffffff",
                }}
            >
                <Toolbar disableGutters>
                    <NextLink href="/" passHref legacyBehavior>
                        <Link>
                            <Typography fontSize={20} component={"h2"}>
                                AdventSolutions
                            </Typography>
                        </Link>
                    </NextLink>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: "block", md: "none" },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.title}
                                    onClick={handleCloseNavMenu}
                                >
                                    <NextLink
                                        key={page.title}
                                        href={page.href}
                                        passHref
                                        legacyBehavior
                                    >
                                        <Link color={"#000000"}>
                                            {page.title}
                                        </Link>
                                    </NextLink>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box flex={1}></Box>
                    <Box
                        sx={{
                            // flexGrow: 1,
                            display: { xs: "none", md: "flex" },
                            marginRight: "0",
                            marginLeft: "auto",
                        }}
                    >
                        {pages.map((page) => (
                            <NextLink
                                key={page.title}
                                href={page.href}
                                passHref
                                legacyBehavior
                            >
                                <Link
                                    sx={{ marginRight: "10px" }}
                                    color={"#000000"}
                                >
                                    <Typography fontSize={16}>
                                        {page.title}
                                    </Typography>
                                </Link>
                            </NextLink>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
