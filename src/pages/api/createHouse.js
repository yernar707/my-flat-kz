import { GraphQLClient } from 'graphql-request';

export default async ({ body }, res) => {
  const graphcms = new GraphQLClient(
    'https://api-ap-south-1.graphcms.com/v2/cl2hdu51w41ef01z625ez3rdh/master',
    {
      headers: {
        auth: `Bearer ${process.env.API_KEY}`,
      },
    }
  );

  const { createHouse } = await graphcms.request(
    `mutation createNewHouse($id: ID!) {
      createHouse(data: { house: { connect: { id: $id } } }) {
        id
      }
    }`,
    { id: body.id }
  );
  

  await graphcms.request(
    `mutation publishNewHouse($id: ID!) {
      publishHouse(where: { id: $id }, to: PUBLISHED) {
        id
      }
    }`,
    { id: createHouse.id }
  );

  res.status(201).json({ id: createHouse.id });
};