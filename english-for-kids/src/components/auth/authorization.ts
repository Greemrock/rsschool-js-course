const admin: { username: string; password: string } = {
  username: "admin",
  password: "12345",
};

export const logIn = (username: string, password: string): Promise<boolean> => {
  return username === admin.username && password === admin.password
    ? Promise.resolve(true)
    : Promise.resolve(false);
};
