import airtable from 'airtable';

export const getProjects = () => {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    const base = new airtable({ apiKey: 'keyy7pA2Utl55TQ4k' }).base('appT3h2TZQfGBeMmh');

    base('Projects')
      .select({ view: 'Grid view' })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(function (record) {
            const id = record.getId();
            const description = record.get('description');
            const title = record.get('title');
            const tech = record.get('tech');
            const urlTitles = record.get('url_titles');
            const links = record.get('links');

            if (!description || !title || !tech || !urlTitles || !links) return;
            totalRecords.push({
              id,
              description,
              title,
              tech,
              urlTitles,
              links,
            });
          });

          fetchNextPage();
        },
        (err) => {
          if (err) return reject(err);
          return resolve(totalRecords);
        }
      );
  });
};