const getData = async () => {
  const response = await fetch("https://intro-lemon.vercel.app/api/posts");
  const data = await response.json();

  return data;
};

export { getData };
