'use strict';
var mysql = require('mysql');
class Repository {
  constructor(connection) {
    this.connection = connection;
  }
  getUsers() {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT UID, Name, Tel, CreateDT FROM Users', (err, results) => {
        if (err) {
          return reject(new Error("An error occured getting the users: " + err));
        }
        resolve((results || []).map((user, id) => {
          // console.log(user)
          return {
            UID: results[id].UID,
            Name: results[id].Name,
            Tel: results[id].Tel,
            CreateDT: results[id].CreateDT
          };
        }));
      });

    });
  }

  getUserByTel(userTel) {
    return new Promise((resolve, reject) => {
      this.connection.query('SELECT Name, Tel FROM Users WHERE Tel = ?', [userTel], (err, results) => {
        if (err) {
          return reject(new Error("An error occured getting the user: " + err));
        }
        if (results.length === 0) {
          resolve(undefined);
        } else {
          resolve({
            Name: results[0].Name,
            Tel: results[0].Tel,
          });
        }
      });

    });
  }
  addUser(userName, userTel) {
    return new Promise((resolve, reject) => {
      this.connection.query(`CALL adduser('${userName}','${userTel}'); `, (err, results) => {
        if (err) {
          return reject(new Error("An error occured getting the user: " + err));
        }
        if (results.length === 0) {
          resolve(undefined);
        } else {
          resolve({
            Message: results[0][0].Message,
          });
        }
      });

    });
  }
  updateUser(userName, userTel) {
    return new Promise((resolve, reject) => {
      this.connection.query(`CALL updateuser('${userName}','${userTel}'); `, (err, results) => {
        if (err) {
          return reject(new Error("An error occured getting the user: " + err));
        }
        if (results.length === 0) {
          resolve(undefined);
        } else {
          resolve({
            Message: results[0][0].Message,
          });
        }
      });

    });
  }
  deleteUser(userName) {
    return new Promise((resolve, reject) => {
      this.connection.query(`CALL deleteuser('${userName}'); `, (err, results) => {
        if (err) {
          return reject(new Error("An error occured getting the user: " + err));
        }
        if (results.length === 0) {
          resolve(undefined);
        } else {
          resolve({
            Message: results[0][0].Message,
          });
        }
      });

    });
  }
  disconnect() {
    this.connection.end();
  }
}

module.exports.connect = (connectionSettings) => {
  return new Promise((resolve, reject) => {
    if (!connectionSettings.host) throw new Error("A host must be specified.");
    if (!connectionSettings.user) throw new Error("A user must be specified.");
    if (!connectionSettings.password) throw new Error("A password must be specified.");
    if (!connectionSettings.port) throw new Error("A port must be specified.");

    resolve(new Repository(mysql.createConnection(connectionSettings)));
  });
};


