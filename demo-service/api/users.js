//  users.js
//
//  Defines the users api. Add to a server by calling:
//  require('./users')
'use strict';

//  Only export - adds the API to the app with the given options.
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

  app.get('/search', (req, res, next) => {

    //  Get the Tel.
    var Tel = req.query.Tel;
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
};