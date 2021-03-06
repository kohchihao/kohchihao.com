import { getScreenshot } from '@lib/og/chromeApi';
import { getHtml } from '@lib/og/htmlTemplate';
import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Most common OG image size
 */
const DefaultImageSize = {
  height: 630,
  width: 1200,
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const html = getHtml(req.query.title);
    const file = await getScreenshot({
      html,
      width: DefaultImageSize.width,
      height: DefaultImageSize.height,
      isDev: !process.env.IS_PRODUCTION,
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', `max-age=${60 * 60 * 24 * 365}, public, stale-while-revalidate`);
    res.end(file);
  } catch (e) {
    console.error(e);

    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Error, image can not be generated!</h1>');
  }
};
