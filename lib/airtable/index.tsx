import airtable from 'airtable';
import { Project } from '@typed/Project';
import { Featured } from '@typed/Featured';

export const getProjects = (): Promise<Project[]> => {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    const base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE);

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

export const getFeatureds = (): Promise<Featured[]> => {
  const totalRecords = [];

  return new Promise((resolve, reject) => {
    const base = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE);

    base('Featureds')
      .select({ view: 'Grid view' })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach(function (record) {
            const id = record.getId();
            const title = record.get('title');
            const url = record.get('url');

            if (!title || !url) return;

            totalRecords.push({
              id,
              title,
              url,
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
