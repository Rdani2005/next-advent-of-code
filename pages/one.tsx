import { MainLayout } from "@/domain/app/components/layout";
import { ChallengeHeader } from "@/domain/app/components/shared";
import { ResultButton } from "@/domain/app/components/shared/ResultButton";
import { CodeAnswer } from "@/domain/core/entities";
import { FistDayChallengesRepository } from "@/domain/services/data/repository";
import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const One = () => {
    const [answer, setAnswer] = useState<CodeAnswer | null>(null);
    const [answerTwo, setAnswerTwo] = useState<CodeAnswer | null>(null);

    const onClickAnswerOne = async () => {
        const response = await FistDayChallengesRepository.getAnswerOne();
        setAnswer(response);
    };

    const onClickAnswerTwo = async () => {
        const response = await FistDayChallengesRepository.getAnswerTwo();
        setAnswerTwo(response);
    };

    return (
        <MainLayout title="Challenge One" description="Why is not snowing?">
            <Typography variant="h1" component={"h1"}>
                Challenge One. Lake of Snow?
            </Typography>

            <Typography variant="body1">
                It is not snowing in the lake. Why? This is what why we need to
                go to heaven. But, for using the trebuchet, we need to solve two
                problems.
            </Typography>

            <ChallengeHeader
                title="Problem One. Someone wrote some stuff that is hiding The
                Trebuchet codes for calibration."
                subtitle="We need to get them filtering all numbers, and getting the first
                and last number on an Array. After that, wee need to get the sum
                of all of them."
            />

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

            <ResultButton answer={answer} onClick={onClickAnswerOne} />

            <ChallengeHeader
                title="Problem Two. Not the right Trebuchet codes for calibration."
                subtitle="We find out that the codes are not the right ones. We need to
                filter them including words. Lets say, that we have the word
                two. This is a valid number too!"
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

export default One;
