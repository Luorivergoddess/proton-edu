export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  points: number;
  level: number;
  continuousSignIn: number;
  lastSignIn: string | null;
  progress: {
    completedCourses: number;
    totalCourses: number;
  };
}

export interface SignInResponse {
  success: boolean;
  points: number;
  message: string;
}

export interface User {
  username: string;
  email: string;
  isLoggedIn: boolean;
}
