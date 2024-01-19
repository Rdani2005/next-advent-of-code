import { CodeAnswer } from "@/domain/core/entities";
import { Button, Typography } from "@mui/material";
import React from "react";

interface Props {
    answer: CodeAnswer | null;
    onClick: () => Promise<void>;
}

export const ResultButton = ({ answer, onClick }: Props) => {
    return answer ? (
        <Typography variant="body1">Answer: {answer.answer}</Typography>
    ) : (
        <Button onClick={() => onClick()}>Get Answer</Button>
    );
};
