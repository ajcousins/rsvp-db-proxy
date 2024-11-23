import { APIGatewayProxyEvent } from 'aws-lambda';
// import { updateResults } from './writeResults';


export const handler = async (event?: APIGatewayProxyEvent) => {
  console.log('--- hello handler ---');
  console.log('Received event:', JSON.stringify(event));

  return {
    statusCode: 200,
    body: JSON.stringify('OK'),
  };
}
