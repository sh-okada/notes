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

export const getNotes = () => customAxios.get<NoteResponse[]>("/notes");

export const getNote = (id: string) =>
  customAxios.get<NoteResponse>(`notes/${id}`);

export const postNote = (postRequest: PostRequest) =>
  customAxios.post<NoteResponse>("/notes", postRequest);

export const login = (loginRequest: LoginRequest) =>
  customAxios.post<UserResponse>("/auth/login", loginRequest);

export const postUser = (userPostRequest: UserPostRequest) =>
  customAxios.post<UserResponse>("/users", userPostRequest);

export const validToken = () => customAxios.get("/auth/validation");

export const passwordStrength = (strengthRequest: StrengthRequest) =>
  customAxios.post<StrengthResponse>("/password/strength", strengthRequest);
