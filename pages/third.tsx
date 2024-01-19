import { MainLayout } from "@/domain/app/components/layout";
import { ChallengeHeader } from "@/domain/app/components/shared";
import { ResultButton } from "@/domain/app/components/shared/ResultButton";
import { CodeAnswer } from "@/domain/core/entities";
import { ThirdDayChallengesRepository } from "@/domain/services/data/repository";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Three = () => {
    const [answer, setAnswer] = useState<CodeAnswer | null>(null);
    const [answerTwo, setAnswerTwo] = useState<CodeAnswer | null>(null);

    const onClickAnswerOne = async () => {
        const response = await ThirdDayChallengesRepository.getAnswerOne();
        setAnswer(response);
    };

    const onClickAnswerTwo = async () => {
        const response = await ThirdDayChallengesRepository.getAnswerTwo();
        setAnswerTwo(response);
    };

    return (
        <MainLayout
            title="Challenge Three"
            description="Why is the gondola not working?"
        >
            <Typography variant="h1" component={"h1"}>
                Challenge Three. Gondolas?
            </Typography>

            <Typography variant="body1">
                We need to go to the water source. But, the gondola is not
                working? Why?
            </Typography>

            <ChallengeHeader
                title="Problem One. Missing parts on Engine."
                subtitle="We need to find the missing part of the gondola's engine, but
                how? We need to find the missing parts on the Engine map, by
                getting valid numbers and sum them all."
            />

            <Typography
                variant="h2"
                component={"h2"}
                style={{
                    marginTop: 50,
                    marginBottom: 30,
                }}
            >
                Try It
            </Typography>

            <ResultButton answer={answer} onClick={onClickAnswerOne} />
            <ChallengeHeader
                title="Problem Two. Gondola is too slow"
                subtitle="The gondola is too slow. We need to find out wich gear is is
                wrong. To do it, we need to filter on map some * and find the
                adjacent number."
            />

            <Typography
                variant="h2"
                component={"h2"}
                style={{
                    marginTop: 50,
                    marginBottom: 30,
                }}
            >
                Try It
            </Typography>

            <ResultButton answer={answerTwo} onClick={onClickAnswerTwo} />
        </MainLayout>
    );
};

export default Three;
