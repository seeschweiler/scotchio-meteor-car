CarsController = RouteController.extend({
  subscriptions: function () {
    this.subscribe('cars');
  },
  data: function () {
    return Cars.findOne({_id: this.params._id});
  },
  create: function() {
    this.render('CreateCar', {});
  },
  list: function() {
    this.render('ListCars', {});
  },
  edit: function() {
    this.render('EditCar', {});
  }
});
