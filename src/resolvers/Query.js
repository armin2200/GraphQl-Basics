const Query = {
  users: (parent, args, { db }, info) => {
    if (!args.query) return db.users;

    return db.users.filter(user => {
      return user.name.toLowerCase().includes(args.query.toLowerCase());
    });
  },
  me: () => {
    return {
      id: '2234663',
      name: 'Armin',
      email: 'armin.zohrabi@live.com'
    };
  },
  post: () => {
    return {
      id: '14e22ww',
      title: 'tututush',
      body: 'manucher is very good!',
      published: true
    };
  },
  posts: (parent, args, { db }, info) => {
    if (!args.query) return db.posts;
    return db.posts.filter(post => {
      return (
        post.title
          .toLocaleLowerCase()
          .includes(args.query.toLocaleLowerCase()) ||
        post.body.toLocaleLowerCase().includes(args.query.toLocaleLowerCase())
      );
    });
  },
  comments: (parent, args, { db }, info) => {
    return db.comments;
  }
};

export { Query as default };
