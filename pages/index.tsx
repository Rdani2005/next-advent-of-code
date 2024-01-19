import NextLink from "next/link";
import { MainLayout } from "@/domain/app/components/layout";
import { CodeChallenge } from "@/domain/core/entities";
import { CodeChallengeRepository } from "@/domain/services/data/repository";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Typography,
    Link,
} from "@mui/material";

const paragraphs = [
    `Welcome to the Advent of Code 2023 Solutions page! This platform
  serves as a concise guide to the answers for each daily
  challenge presented during the Advent of Code event in 2023. As
  you embark on this coding journey, you'll find solutions to
  the intricate puzzles that have been carefully crafted to test
  your problem-solving skills and algorithmic thinking.`,
    `Advent of Code is an annual coding event that unfolds throughout
  December, offering a series of daily programming challenges.
  These challenges span a spectrum of difficulty levels, ensuring
  there's something for everyone, from beginners to seasoned
  coders.`,
    `In this collection of solutions, you'll discover the key
  insights and approaches needed to crack each day's puzzle.
  We aim to provide clear and concise answers without revealing
  the entire code, allowing you to grasp the solution conceptually
  while still having the opportunity to implement it yourself.`,
    `Whether you're here to validate your own solutions, gain
  new perspectives, or simply satisfy your curiosity, we're
  thrilled to have you on board. Let the exploration of these
  coding conundrums commence, and may your problem-solving skills
  shine brightly throughout this festive coding season.`,
];

export default function Home() {
    const challenges: CodeChallenge[] = CodeChallengeRepository.getAll();

    return (
        <MainLayout title="Home" description="Home page">
            <Typography variant="h1">Introduction</Typography>
            <br />
            {paragraphs.map((paragraph, index) => (
                <Typography
                    key={index}
                    variant="body1"
                    style={{ marginBottom: 20 }}
                >
                    {paragraph}
                </Typography>
            ))}

            <Typography
                variant="h2"
                style={{ marginTop: 50, marginBottom: 30 }}
            >
                Challenges
            </Typography>

            <Grid container spacing={2}>
                {challenges.map((challenge, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardContent>
                                <Typography
                                    sx={{ fontSize: 14 }}
                                    color="text.secondary"
                                    gutterBottom
                                >
                                    Challenge #{index + 1}
                                </Typography>
                                <Typography variant="h5" component="div">
                                    {challenge.title}
                                </Typography>
                                <Typography variant="body1">
                                    {challenge.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <NextLink
                                    href={challenge.link}
                                    legacyBehavior
                                    passHref
                                >
                                    <Link>
                                        <Button
                                            rel="noopener noreferrer"
                                            color="primary"
                                        >
                                            See Challenge
                                        </Button>
                                    </Link>
                                </NextLink>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </MainLayout>
    );
}
