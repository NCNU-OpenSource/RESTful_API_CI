'use strict';

module.exports = (app, options) => {

  app.get('/users', (req, res, next) => {
    options.repository.getUsers().then((users) => {
      res.status(200).send(users.map((user) => { 
        return {
        UID: user.UID,
        Name: user.Name,
        Tel: user.Tel,
        CreateDT: user.CreateDT
        };
      }));
    })
    .catch(next);
  });

  app.get('/users/:tel', (req, res, next) => {

    //  Get the Tel.
    // var Tel = req.query.Tel;
    const Tel = (req.params.tel);
    if (!Tel) {
      throw new Error("When searching for a user, the Tel must be specified, e.g: '/search?Tel=0977333444'.");
    }

    //  Get the user from the repo.
    options.repository.getUserByTel(Tel).then((user) => {

      if(!user) { 
        res.status(404).send('User not found.');
      } else {
        res.status(200).send({
            Name: user.Name,
            Tel: user.Tel,
        });
      }
    })
    .catch(next);

  });

  app.post('/users/:name/:tel', (req, res, next) => {
    //  Get the Tel.
    const userName = (req.params.name);
    const Tel = (req.params.tel);
    if (!Tel) {
      throw new Error("When searching for a user, the Tel must be specified, e.g: '/search?Tel=0977333444'.");
    }
    //  Get the user from the repo.
    options.repository.addUser(userName, Tel).then((user) => {

      if (!user) {
        res.status(404).send('User not found.');
      } else {
        res.status(200).send(
          {
          Message: user.Message
        });
      }
    })
      .catch(next);
  });
  app.put('/users/:name/:tel', (req, res, next) => {
    //  Get the Tel.
    const userName = (req.params.name);
    const Tel = (req.params.tel);
    if (!Tel) {
      throw new Error("When searching for a user, the Tel must be specified, e.g: '/search?Tel=0977333444'.");
    }
    //  Get the user from the repo.
    options.repository.updateUser(userName, Tel).then((user) => {

      if (!user) {
        res.status(404).send('User not found.');
      } else {
        res.status(200).send(
          {
          Message: user.Message
        });
      }
    })
      .catch(next);
  });
  app.delete('/users/:name', (req, res, next) => {
    //  Get the Tel.
    const userName = (req.params.name);

    if (!userName) {
      throw new Error("When searching for a user, the Tel must be specified, e.g: '/search?Tel=0977333444'.");
    }
    //  Get the user from the repo.
    options.repository.deleteUser(userName).then((user) => {

      if (!user) {
        res.status(404).send('User not found.');
      } else {
        res.status(200).send(
          {
          Message: user.Message
        });
      }
    })
      .catch(next);
  });
};