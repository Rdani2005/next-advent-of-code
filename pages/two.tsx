import { MainLayout } from "@/domain/app/components/layout";
import { ChallengeHeader } from "@/domain/app/components/shared";
import { ResultButton } from "@/domain/app/components/shared/ResultButton";
import { CodeAnswer } from "@/domain/core/entities";
import {
    FistDayChallengesRepository,
    SecondDayChallengesRepository,
} from "@/domain/services/data/repository";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Two = () => {
    const [answer, setAnswer] = useState<CodeAnswer | null>(null);
    const [answerTwo, setAnswerTwo] = useState<CodeAnswer | null>(null);

    const onClickAnswerOne = async () => {
        const response = await SecondDayChallengesRepository.getAnswerOne();
        setAnswer(response);
    };

    const onClickAnswerTwo = async () => {
        const response = await SecondDayChallengesRepository.getAnswerTwo();
        setAnswerTwo(response);
    };

    return (
        <MainLayout title="Challenge One" description="Why is not snowing?">
            <Typography variant="h1" component={"h1"}>
                Challenge Two. Water?
            </Typography>

            <Typography variant="body1">
                There is not water. Why? We need to go to water source to figure
                it out. But, first, lets play with the Elf
            </Typography>

            <ChallengeHeader
                title="Problem One. Find out some valid games"
                subtitle="We need to all games that we played with the elf. We need to
                filter them by the colors cube, and figure out wich ones wwere
                valid by the count of its cubes."
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
                title="Problem Two. Power."
                subtitle="After the Elf told us the story about the water, we need to find
                out the power of the sets that we are playing. How? Lets
                multiply every cube count for every game, and then sum all the
                results."
            />

            <Typography
                variant="h2"
                component={"h2"}
                style={{
                    marginTop: 50,
                    marginBottom: 30,
                }}
            ></Typography>

            <Typography variant="body1"></Typography>

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

export default Two;
