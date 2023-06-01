import { customAxios } from "@/libs/axios";
import {
  PostRequest,
  QuestionResponse,
  StrengthRequest,
  StrengthResponse,
  UserPostRequest,
  UserResponse,
} from "@/types/api";

export const questions = () =>
  customAxios.get<QuestionResponse[]>("/questions");

export const question = (id: string) =>
  customAxios.get<QuestionResponse>(`/questions/${id}`);

export const post = (postRequest: PostRequest) =>
  customAxios.post<QuestionResponse>("/questions", postRequest);

export const postUser = (userPostRequest: UserPostRequest) =>
  customAxios.post<UserResponse>("/users", userPostRequest);

export const passwordStrength = (strengthRequest: StrengthRequest) =>
  customAxios.post<StrengthResponse>("/password/strength", strengthRequest);
