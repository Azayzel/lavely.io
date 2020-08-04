'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     */
    try {
    const hash = bcrypt.hashSync('@@BBrutu$$1987', 10);
     await queryInterface.bulkInsert('Users', [
       {
          email: 'josh@lavely.io',
          name: 'Josh Lavely',
          password: hash,
          avatar: null,
          emailConfirmed: false,
          role: 'admin',
     }
    ], {});

    await queryInterface.bulkInsert('Articles', [
       {
          title: 'test article 1',
          author: "Josh Lavely",
          normalizedUrl: "test-article-1",
          innerHtml: `<h1>This is a test</h1> <p> Some testing was done here</p>`,
          likes: 25,
          responses: null,
          image: ''
     }
    ], {});
  } catch (err) {
    console.log(err)
  }
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('User', null, {});
    await queryInterface.bulkDelete('Article', null, {});
  }
};
