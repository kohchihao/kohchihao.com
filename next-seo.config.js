const title = 'Koh Chi Hao';
const description =
  'Mobile and web development enthusiast';

const SEO = {
  title,
  description,
  canonical: 'https://kohchihao.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://kohchihao.com',
    title,
    description,
    images: [
      {
        url: 'https://kohchihao.com/api/og?title=Koh%20Chi%20Hao',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  }
};

export default SEO;