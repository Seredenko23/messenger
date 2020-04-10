export interface SignUpProps {
  registerUser: (user) => void;
  registerClear: () => void;
  error: Error;
  isPending: boolean;
  registrationSucceed: boolean;
}

export interface SignUpState {
  [param: string]: string;
}
