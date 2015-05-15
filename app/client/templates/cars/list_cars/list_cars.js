/*****************************************************************************/
/* ListCars: Event Handlers */
/*****************************************************************************/
Template.ListCars.events({
});

/*****************************************************************************/
/* ListCars: Helpers */
/*****************************************************************************/
Template.ListCars.helpers({
  cars: function() {
    return Cars.find();
  }
});

/*****************************************************************************/
/* ListCars: Lifecycle Hooks */
/*****************************************************************************/
Template.ListCars.created = function () {
};

Template.ListCars.rendered = function () {
};

Template.ListCars.destroyed = function () {
};

AutoForm.addHooks(null, {
  onSuccess: function(operation, result, template) {
    Router.go('carsList');
  }
});
