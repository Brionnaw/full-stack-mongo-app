namespace app.Controllers {
  // HomeController
  export class HomeController {

    constructor() {

    }
  }

  // addMovieController
  export class AddMovieController {
      public movie;
      public save() {
      this.movieServie.save(this.

        movie);
      }
      constructor (
        private movieServie: app.Services.MovieServie
      ) {
      }
  }
  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('AddMovieController', AddMovieController);
}
