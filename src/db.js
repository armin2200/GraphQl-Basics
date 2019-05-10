const users = [
  {
    id: '1',
    name: 'Alix',
    email: 'Alix@tensoriot.com',
    age: '35'
  },
  {
    id: '2',
    name: 'Armin',
    email: 'Armin@tensoriot.com',
    age: '43'
  },
  {
    id: '3',
    name: 'Moon',
    email: 'Moon@tensoriot.com'
  }
];
const posts = [
  {
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
  },
  {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
  },
  {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: true,
    author: '2'
  }
];

const comments = [
  {
    id: '102',
    text: 'This worked well for me. Thanks!',
    author: '3',
    post: '10'
  },
  {
    id: '103',
    text: 'Glad you enjoyed it.',
    author: '1',
    post: '10'
  },
  {
    id: '104',
    text: 'This did no work.',
    author: '2',
    post: '12'
  },
  {
    id: '105',
    text: 'Never mind. I got it to work.',
    author: '1',
    post: '12'
  }
];

const db = {
  users,
  posts,
  comments
};

export { db as default };
