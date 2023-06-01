export interface UserResponse {
  id: string;
  name: string;
}

export interface QuestionResponse {
  id: string;
  title: string;
  body: string;
  posted_user: UserResponse;
}

export interface StrengthResponse {
  strength: "terrible" | "simple" | "medium" | "strong";
}

export interface LoginRequest {
  id: string;
  password: string;
}

export interface UserPostRequest {
  id: string;
  name: string;
  password: string;
}

export interface PostRequest {
  title: string;
  body: string;
}

export interface StrengthRequest {
  password: string;
}
