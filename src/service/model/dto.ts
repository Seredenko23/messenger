export interface DTO<T> {
  tokens: {
    accessToken: string | null;
    refreshToken: string | null;
  }
  response: T;
}
