import { customAxios } from "@/libs/axios";
import {
  LoginRequest,
  NoteResponse,
  PostRequest,
  StrengthRequest,
  StrengthResponse,
  UserPostRequest,
  UserResponse,
} from "@/types/api";

export const postNote = (postRequest: PostRequest) =>
  customAxios.post<NoteResponse>("/notes", postRequest);

export const login = (loginRequest: LoginRequest) =>
  customAxios.post<UserResponse>("/auth/login", loginRequest);

export const postUser = (userPostRequest: UserPostRequest) =>
  customAxios.post<UserResponse>("/users", userPostRequest);

export const passwordStrength = (strengthRequest: StrengthRequest) =>
  customAxios.post<StrengthResponse>("/password/strength", strengthRequest);
