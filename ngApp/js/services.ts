namespace app.Services {
  export class MovieServie{
    public MovieResource;
      public save(movie) {
        return this.MovieResource.save(movie).$promise; // api call
      }
      constructor(private $resource: ng.resource.IResourceService) {
        this.MovieResource = $resource('/api/movies/:id')

      }
    }

angular.module('app').service('movieServie', MovieServie);
  }
