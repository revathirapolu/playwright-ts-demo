export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const randomEmail = () =>
  `user_${Date.now()}@example.com`;
