export interface SignUpProps {
  registerUser: (user) => void;
  error: Error;
}

export interface SignUpState {
  [param: string]: string;
}
