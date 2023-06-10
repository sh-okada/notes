export interface UserResponse {
  id: string;
  name: string;
}

export interface NoteResponse {
  id: string;
  title: string;
  body: string;
  created_at: Date;
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
