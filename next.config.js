module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: "/pets",
        destination: "/",
        permanent: true,
      },
    ];
  },
};
