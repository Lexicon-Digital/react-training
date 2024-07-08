const getData = async <T>(): Promise<T> => {
  const response = await fetch("https://intro-lemon.vercel.app/api/posts");
  const data = await response.json();

  return data as T;
};

export { getData };
