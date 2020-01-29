export interface LoginState {
  isLoginPending: boolean;
  isLoginSuccess: boolean;
  loginError: Error | null;
}
