/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('cars', function (/* args */) {
  return Cars.find();
});
