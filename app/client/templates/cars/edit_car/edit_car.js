/*****************************************************************************/
/* EditCar: Event Handlers */
/*****************************************************************************/
Template.EditCar.events({
});

/*****************************************************************************/
/* EditCar: Helpers */
/*****************************************************************************/
Template.EditCar.helpers({
  beforeRemove: function () {
      return function (collection, id) {
        var doc = collection.findOne(id);
        if (confirm('Really delete car: "' + doc.brand + " " + doc.model + '"?')) {
          this.remove();
          Router.go('carsList');
        }
      };
    }
});

/*****************************************************************************/
/* EditCar: Lifecycle Hooks */
/*****************************************************************************/
Template.EditCar.created = function () {
};

Template.EditCar.rendered = function () {
};

Template.EditCar.destroyed = function () {
};
