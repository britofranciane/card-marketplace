export const logout = () => {
  localStorage.removeItem('token');
};

export const isAuthenticatedUser = (): boolean => {
  const token = localStorage.getItem('token');
  return !!token;
};
