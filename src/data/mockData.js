import uuid from 'uuid/v4';

const data = [
  {
    id: uuid(),
    task: 'Learn React hooks',
    complete: true,
  },
  {
    id: uuid(),
    task: 'Learn postgreSQL',
    complete: false,
  },
  {
    id: uuid(),
    task: 'Learn GraphQL/Apollo Client',
    complete: false,
  },
];

export default data;
