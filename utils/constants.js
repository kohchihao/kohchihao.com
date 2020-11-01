let BASE_URL = '';

if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://localhost:3000';
} else {
  BASE_URL = 'https://kohchihao.vercel.app';
}

export { BASE_URL };
