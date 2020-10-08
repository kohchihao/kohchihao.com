const title = 'Koh Chi Hao';
const description =
  'Mobile and web development enthusiast';

const SEO = {
  title,
  description,
  canonical: 'https://kohchihao.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://kohchihao.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://kohchihao.vercel.app/api/og?title=Koh%20Chi%20Hao',
        alt: title,
      }
    ]
  }
};

export default SEO;