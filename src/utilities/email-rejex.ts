const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Example usage:
export const isValidEmail = (email: string) => {
  return emailRegex.test(email);
};
