// import 'dotenv/config';
// import {
//   S3Client,
//   PutObjectCommand,
//   GetObjectCommand,
// } from '@aws-sdk/client-s3';
// // import { Result } from './types/sweepbot';

// const BUCKET_NAME = process.env.BUCKET_NAME ?? '';
// const OBJECT_NAME = 'results.json';

// const s3Client = new S3Client({
//   region: process.env.SCRAPER_AWS_REGION ?? '',
//   credentials: {
//     accessKeyId: process.env.SCRAPER_AWS_ACCESS_KEY_ID ?? '',
//     secretAccessKey: process.env.SCRAPER_AWS_SECRET_ACCESS_KEY ?? '',
//   },
// });

// const uploadJsonToS3 = async (
//   jsonString: string,
//   bucketName: string,
//   fileName: string
// ) => {
//   const params = {
//     Bucket: bucketName,
//     Key: fileName,
//     Body: jsonString,
//     ContentType: 'application/json',
//   };

//   try {
//     await s3Client.send(new PutObjectCommand(params));
//     console.log(`File uploaded successfully at ${bucketName}/${fileName}`);
//   } catch (error) {
//     console.error(`Error uploading to S3: ${error}`);
//   }
// };

// export const writeResults = async (results: Result[]): Promise<void> => {
//   console.log('--- Writing Results ---');
//   const jsonString = JSON.stringify(results);
//   await uploadJsonToS3(jsonString, BUCKET_NAME, OBJECT_NAME);
// };

// const fetchJsonFromS3 = async (
//   bucketName: string,
//   fileName: string
// ): Promise<string | null> => {
//   const params = {
//     Bucket: bucketName,
//     Key: fileName,
//   };

//   try {
//     const data = await s3Client.send(new GetObjectCommand(params));
//     if (!data.Body) return null;

//     let result = '';
//     for await (const chunk of data.Body as any) {
//       result += chunk.toString();
//     }
//     return result;
//   } catch (error) {
//     console.error(`Error fetching from S3: ${error}`);
//     return null;
//   }
// };

// const getResultKey = (result: Result): string => {
//   return `${result.team1}_${result.team2}_${result.score}`;
// };

// export const updateResults = async (newResults: Result[]): Promise<void> => {
//   const currentResults = await fetchJsonFromS3(BUCKET_NAME, OBJECT_NAME);

//   if (!currentResults) {
//     console.log('No current results in s3.');
//     return;
//   }
//   const parsedResults = JSON.parse(currentResults);

//   const parsedResultsMap = new Map(
//     parsedResults.map((pr: Result) => {
//       return [getResultKey(pr), pr];
//     })
//   );

//   newResults.forEach((result) => {
//     parsedResultsMap.set(getResultKey(result), result);
//   });

//   const updatedResults = Array.from(parsedResultsMap.values()) as Result[];

//   console.log('updatedResults:', updatedResults);
//   await writeResults(updatedResults);
// };
