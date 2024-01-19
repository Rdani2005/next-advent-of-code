import React, { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../shared";
import { Footer } from "../shared/Footer";

interface Props {
    children?: ReactNode;
    title: string;
    description: string;
}

export const MainLayout: FC<Props> = ({ children, title, description }) => {
    return (
        <>
            <Head>
                <title>{title + " | Advent Of COde Solutions"}</title>
                <meta name="description" content={description} />
                <meta
                    name="keywords"
                    content="Advent Of Code, Code, Challenges, Rdani2005, Advent, Of, Code, AdventOfCode2023"
                />
                <meta name="author" content="Danny Sequeira" />
                <meta
                    property="og:title"
                    content={title + " | Advent Of COde Solutions"}
                ></meta>
                <meta property="og:description" content={description}></meta>
                <meta
                    property="og:image"
                    content="/android-chrome-512x512.png"
                ></meta>
            </Head>
            <Navbar />
            <main
                style={{
                    maxWidth: 1000,
                    marginTop: 100,
                    marginBottom: 100,
                    marginLeft: "auto",
                    marginRight: "auto",
                }}
            >
                {children}
            </main>
            <Footer />
        </>
    );
};
