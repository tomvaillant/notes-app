const faker = require("faker");
const { v4:uuidv4 } = require('uuid');

module.exports = function generateNotes() {
  const notes = [];
  for (let id = 0; id < 10; id += 1) {
    guests.push({
      id: uuidv4(),
      title: faker.lorem.words(4),
      note: faker.lorem.paragraph(),
    });
  }
  return { notes };
};
