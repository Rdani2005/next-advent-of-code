import { CodeChallenge } from "./../../../core/entities/code-challenge";
export const getAll = (): CodeChallenge[] => [
    {
        title: "Day 1",
        description:
            "This is the first challenge. Here, we got a introduction for the anual challenging, and needed to filter numbers by words and digits for this puzzle.",
        link: "/one",
    },
    {
        title: "Day 2",
        description:
            "This is the second challenge. Here, we go to heaven to figure out that snow is not being produced because of a lake of water, We play some games with an Elf, and need to filter some color cubes",
        link: "/two",
    },
    {
        title: "Day 3",
        description:
            "This is the third challenge. We need to go to the water source. But the problem is that we need to go with a Gondola, that it is not working anymore.",
        link: "/third",
    },
];
