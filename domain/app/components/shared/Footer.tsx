import React from "react";
import Image from "next/image";
import NextLink from "next/link";
import {
    Box,
    Container,
    Grid,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
// import logo from "@/assets/logo.png";
export const Footer = () => {
    return (
        <footer>
            <section>
                <Container>
                    <Grid
                        container
                        justifyContent={"space-between"}
                        spacing={4}
                    >
                        <Grid
                            item
                            xs={12}
                            md={4}
                            alignContent={"center"}
                            justifyContent={"center"}
                        >
                            <NextLink href={"/"} passHref legacyBehavior>
                                <Link display={"flex"} alignItems={"center"}>
                                    <Typography fontSize={25} component={"h1"}>
                                        AdventSolutions
                                    </Typography>
                                </Link>
                            </NextLink>
                            <Box>
                                <Typography
                                    style={{
                                        marginBottom: 20,
                                    }}
                                >
                                    Project Design by{" "}
                                    <a
                                        href="https://rdani2005.com"
                                        target="_blank"
                                    >
                                        Danny Sequeira
                                    </a>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={4}>
                                <Grid item xs={12} md={4}></Grid>
                                <Grid item xs={12} md={4}>
                                    <List>
                                        <ListItem>
                                            <Typography variant="overline">
                                                Solutions
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                <NextLink
                                                    href={"/one"}
                                                    passHref
                                                    legacyBehavior
                                                >
                                                    <Link
                                                        display={"flex"}
                                                        alignItems={"center"}
                                                        sx={{
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Day One
                                                    </Link>
                                                </NextLink>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                <NextLink
                                                    href={"/two"}
                                                    passHref
                                                    legacyBehavior
                                                >
                                                    <Link
                                                        display={"flex"}
                                                        alignItems={"center"}
                                                        sx={{
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Day Two
                                                    </Link>
                                                </NextLink>
                                            </ListItemText>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText>
                                                <NextLink
                                                    href={"/third"}
                                                    passHref
                                                    legacyBehavior
                                                >
                                                    <Link
                                                        display={"flex"}
                                                        alignItems={"center"}
                                                        sx={{
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        Day Three
                                                    </Link>
                                                </NextLink>
                                            </ListItemText>
                                        </ListItem>
                                    </List>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <List>
                                        <ListItem>
                                            <Typography variant="overline">
                                                Social Media
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <NextLink
                                                href={
                                                    "https://facebook.com/rdani2005"
                                                }
                                                passHref
                                                legacyBehavior
                                                target="_blank"
                                            >
                                                <Link
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                    sx={{
                                                        color: "#000000",
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <Image
                                                            src="https://uploads.divjoy.com/icon-facebook.svg"
                                                            alt="Facebook"
                                                            width={25}
                                                            height={25}
                                                        ></Image>
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        Facebook
                                                    </ListItemText>
                                                </Link>
                                            </NextLink>
                                        </ListItem>

                                        <ListItem>
                                            <NextLink
                                                href={
                                                    "https://instagram.com/rdani2005"
                                                }
                                                passHref
                                                legacyBehavior
                                                target="_blank"
                                            >
                                                <Link
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                    sx={{
                                                        color: "#000000",
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <Image
                                                            src="https://uploads.divjoy.com/icon-instagram.svg"
                                                            alt="Instagram"
                                                            width={25}
                                                            height={25}
                                                        ></Image>
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        Instagram
                                                    </ListItemText>
                                                </Link>
                                            </NextLink>
                                        </ListItem>

                                        <ListItem>
                                            <NextLink
                                                href={
                                                    "https://github.com/rdani2005"
                                                }
                                                passHref
                                                legacyBehavior
                                                target="_blank"
                                            >
                                                <Link
                                                    display={"flex"}
                                                    alignItems={"center"}
                                                    sx={{
                                                        color: "#000000",
                                                    }}
                                                >
                                                    <ListItemIcon>
                                                        <Image
                                                            src="https://uploads.divjoy.com/icon-github.svg"
                                                            alt="Instagram"
                                                            width={25}
                                                            height={25}
                                                        ></Image>
                                                    </ListItemIcon>
                                                    <ListItemText>
                                                        GitHub
                                                    </ListItemText>
                                                </Link>
                                            </NextLink>
                                        </ListItem>
                                    </List>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </footer>
    );
};
