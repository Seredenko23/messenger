export const required: (value: string) => string | null = (value) => {
  return value ? null : "Required"
};

const maxLength: (length: number) => (value: string) => string | null = (length) =>  {
  return (value) => {
    return value.length > length ? `Length must be shorter then ${length}` : null
  }
};

const minLength: (length: number) => (value: string) => string | null = (length) =>  {
  return (value) => {
    return value.length < length ? `Length must be longer then ${length}` : null
  }
};

export const minLength6: (value: string) => string | null = minLength(6);
export const maxLength10: (value: string) => string | null = maxLength(10);

export const email : (value: string) => string | null = (value) => {
    const regExp = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return  regExp.test(value) ? null : 'Invalid email';
};

