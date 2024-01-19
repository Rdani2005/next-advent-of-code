import { Typography } from "@mui/material";
import React from "react";

interface Props {
    title: string;
    subtitle: string;
}

export const ChallengeHeader = ({ title, subtitle }: Props) => {
    return (
        <>
            <Typography
                variant="h2"
                component={"h2"}
                style={{
                    marginTop: 50,
                    marginBottom: 30,
                }}
            >
                {title}
            </Typography>

            <Typography variant="body1">{subtitle}</Typography>
        </>
    );
};
