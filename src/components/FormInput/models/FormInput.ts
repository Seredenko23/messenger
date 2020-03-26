import React from "react";

export interface FormInputProps {
  type: string;
  placeholder?: string;
  value: string;
  handler?: (event: React.FormEvent<HTMLInputElement>) => void;
  name: string;
  validate?: ((value: string) => string | null)[];
}

export interface FormInputState {
  dirty: boolean;
}
