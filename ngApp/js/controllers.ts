namespace app.Controllers {
  // HomeController
  export class HomeController {
    public movies;
    constructor(
      private movieServie: app.Services.MovieServie

    ) {
      this.movies = this.movieServie.getAll();
      console.log(this.movies); //
    }
  }

  // addMovieController
  export class AddMovieController {
      public movie;
      public id;
      public save() {
        let params = {
          title: this.movie.title,
          genre: this.movie.genre,
          id : this.id
        }
        
      this.movieServie.save(params).then(() => {
        this.$state.go('Home');
      })

    }
      constructor (
        private movieServie: app.Services.MovieServie,
        public $state:ng.ui.IStateService,
        public $stateParams: ng.ui.IStateParamsService
      ) {
      if($stateParams)  {
        this.id = $stateParams["id"];
        console.log(this.id);
        }
      }
  }
  angular.module('app').controller('HomeController', HomeController);
  angular.module('app').controller('AddMovieController', AddMovieController);
  }
