import { CodeAnswer } from "@/domain/core/entities";
import { api } from "../../configs/api-configs";
import { AnswerModel } from "../models";

export const getAnswerOne = async (): Promise<CodeAnswer | null> => {
    try {
        const { data } = await api.get<AnswerModel>(
            "/dayone/readResultsByNumbersOnly"
        );

        return {
            answer: data.result,
        };
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getAnswerTwo = async (): Promise<CodeAnswer | null> => {
    try {
        const { data } = await api.get<AnswerModel>(
            "/dayone/readResultsByWordsAndNumbers"
        );

        return {
            answer: data.result,
        };
    } catch (error) {
        console.log(error);
        return null;
    }
};
