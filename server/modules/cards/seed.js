/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */
/* eslint-disable */
var Sequelize = require('sequelize');

exports.seedModel = function (model) {
  model.bulkCreate([
  { name: 'Accountability', value: 4, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Community', value: 1, suit: 'circle',  color: "#008000", reputation: 60,      description: 'A group of people living in the same place or having a particular characteristic in common.'},
  { name: 'Communication', value: 2, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Control', value: 2, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'the power to influence or direct people\'s behavior or the course of events.'},
  { name: 'Compassion', value: 3, suit: 'square', color: "#008000", reputation: 0,          description: 'sympathetic consciousness of others\' distress together with a desire to alleviate it.'},
  { name: 'Creativity', value: 5, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'the use of the imagination or original ideas, especially in the production of an artistic work.'},
  { name: 'Diversity', value: 1, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Empathy', value: 3, suit: 'circle', color: "#CD5C5C", reputation: 0.5,          description: 'the ability to understand and share the feelings of another.'},
  { name: 'Flexibility', value: 5, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'the quality of bending easily without breaking.'},
  { name: 'Greed', value: 1, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'just behavior or treatment.'},
  { name: 'Happiness', value: 2, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Instant Gratification', value: 2, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'just behavior or treatment.'},
  { name: 'Integrity', value: 4, suit: 'circle', color: "#CD5C5C", reputation: 0.5,          description: 'the quality of being honest and having strong moral principles; moral uprightness.'},
  { name: 'Loyalty', value: 5, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Justice', value: 1, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Nonjudgmental', value: 3, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Relationships', value: 2, suit: 'circle', color: "#CD5C5C", reputation: 0.5,       description: 'just behavior or treatment.'},
  { name: 'Power', value: 1, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'just behavior or treatment.'},
  { name: 'Persistence', value: 5, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Person', value: 0, suit: 'star', color: "FFA07A", reputation: 1.5,          description: 'An individual human being.'},
  { name: 'Respect', value: 2, suit: 'square', color: "#008000", reputation: 0,         description: 'just behavior or treatment.'},
  { name: 'Patience', value: 3, suit: 'square', color: "#008000", reputation: 0,          description: 'the condition, state, or quality of being free or as free as possible from all flaws or defects.'},
  { name: 'Perfection', value: 3, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'the condition, state, or quality of being free or as free as possible from all flaws or defects.'},
  { name: 'Security', value: 1, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Being Right', value: 3, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'The belief that your position is justified due to correctness of facts.'},
  { name: 'Transparency', value: 4, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
  { name: 'Order', value: 5, suit: 'circle', color: "#CD5C5C", reputation: 0.5,          description: 'just behavior or treatment.'},
  { name: 'Structure', value: 5, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'}
  ])
  .then(affectedRows => {
    // affectedRows will be 2
    return model.findAll();
  })
  .then(() => console.log('finished populating cards'))
  .catch(err => console.log('error populating cards', err));

      //
      //   model.sync({ force: true })
      //   .then(function (model) {
      //   console.log("inside sync in  seed model for card");
      //
      //   // name:       value: suit color:    reputation: description
      //
      // { name: 'Community', value: 1, suit: 'circle',  color: "#008000", reputation: 60,      description: 'A group of people living in the same place or having a particular characteristic in common.'}).then();
      // { name: 'Justice', value: 1, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'}).then();
      // { name: 'Security', value: 1, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'}).then();
      // { name: 'Diversity', value: 1, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'}).then();
      // { name: 'Power', value: 1, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'just behavior or treatment.'}).then();
      //   return model.create({ name: 'Greed', value: 1, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'just behavior or treatment.'}).then();
      //   // model.create({ name: 'Relationships', value: 2, suit: 'circle', color: "#CD5C5C", reputation: 0.5,       description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Communication', value: 2, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Happiness', value: 2, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Respect', value: 2, suit: 'square', color: "#008000", reputation: 0,         description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Instant Gratification', value: 2, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Control', value: 2, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'the power to influence or direct people\'s behavior or the course of events.'},
      //   // model.create({ name: 'Empathy', value: 3, suit: 'circle', color: "#CD5C5C", reputation: 0.5,          description: 'the ability to understand and share the feelings of another.'},
      //   // model.create({ name: 'Compassion', value: 3, suit: 'square', color: "#008000", reputation: 0,          description: 'sympathetic consciousness of others\' distress together with a desire to alleviate it.'},
      //   // model.create({ name: 'Patience', value: 3, suit: 'square', color: "#008000", reputation: 0,          description: 'the condition, state, or quality of being free or as free as possible from all flaws or defects.'},
      //   // model.create({ name: 'Nonjudgmental', value: 3, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Perfection', value: 3, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'the condition, state, or quality of being free or as free as possible from all flaws or defects.'},
      //   // model.create({ name: 'Being Right', value: 3, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'The belief that your position is justified due to correctness of facts.'},
      //   // model.create({ name: 'Integrity', value: 4, suit: 'circle', color: "#CD5C5C", reputation: 0.5,          description: 'the quality of being honest and having strong moral principles; moral uprightness.'},
      //   // model.create({ name: 'Transparency', value: 4, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Justice', value: 4, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Accountability', value: 4, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Being Right', value: 4, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Instant Gratification', value: 4, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Order', value: 5, suit: 'circle', color: "#CD5C5C", reputation: 0.5,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Structure', value: 5, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Loyalty', value: 5, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Persistence', value: 5, suit: 'square', color: "#008000", reputation: 0,          description: 'just behavior or treatment.'},
      //   // model.create({ name: 'Flexibility', value: 5, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'the quality of bending easily without breaking.'},
      //   // model.create({ name: 'Creativity', value: 5, suit: 'triangle-up', color: "#0000FF", reputation: 1,          description: 'the use of the imagination or original ideas, especially in the production of an artistic work.'},
      //   // model.create({ name: 'Person', value: 0, suit: 'star', color: 75, reputation: 1.5,          description: 'An individual human being.'},
      // })
};



// sequalizeModel.sync({ force: true }).then(function (model) {
//     var names = ['Bailey', 'Lucy', 'Charlie', 'Rocky', 'Cooper', 'Sam', 'Zeus'], cardPhrases = ['Such Wow Angular2', 'Amaz app with Typescript', 'Much NodeJs', 'Such amaze Sequalize ORM', 'Such wow PostgreSQL'], randomName = function () {
//         return names[Math.floor(Math.random() * names.length)];
//     }, randomPhrase = function () {
//         return cardPhrases[Math.floor(Math.random() * cardPhrases.length)];
//     };
//     for (var i = 0; i < 20; i++) {
//       {
//             firstName: randomName() + i,
//             lastName: randomName() + i,
//             favoritecardPhrase: randomPhrase(),
//             reputation: 5
//         });
//       {
//             firstName: randomName() + i,
//             lastName: randomName() + i,
//             favoritecardPhrase: randomPhrase(),
//             reputation: 4
//         });
//     }
// });
