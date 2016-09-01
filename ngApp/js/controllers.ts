namespace app.Controllers {
  // HomeController
  export class HomeController {
    public movies;
    constructor(
      private movieServie: app.Services.MovieServie

    ) {
      this.movies = this.movieServie.getAll();
      console.log(this.movies);
    }
  }

  // addMovieController
  export class AddMovieController {
      public movie;
      public save() {
      this.movieServie.save(this.movie).then(() => {
        this.$state.go('Home');
      })

    }
      constructor (
        private movieServie: app.Services.MovieServie,
        public $state:ng.ui.IStateService
      ) {
      }
  }
  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('AddMovieController', AddMovieController);
}
