Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});


Router.route('/cars/create', {
  name: 'createCar',
  controller: 'CarsController',
  action: 'create',
  where: 'client'
});


Router.route('/cars', {
  name: 'carsList',
  controller: 'CarsController',
  action: 'list',
  where: 'client'
});

Router.route('/cars/:_id', {
  name: 'editCar',
  controller: 'CarsController',
  action: 'edit',
  where: 'client'
});
