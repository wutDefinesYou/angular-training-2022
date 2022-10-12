export const Api = (() => {
    const baseUrl = 'https://randomuser.me/api';
  
    const getRawUser = () =>
      fetchJsonp(baseUrl).then((response) => response.json());
  
    return { getRawUser };
  })();
  