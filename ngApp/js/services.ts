namespace app.Services {
  export class MovieServie{
    public MovieResource;
      public save(movie) {
        return this.MovieResource.save(movie).$promise; // api call // save = .post
      }


      public getAll(){
        return this.MovieResource.query(); // query = get
      }
      public remove (id) {
        return this.MovieResource.remove({id: id}).$promise //remove = delete
      }
      constructor(private $resource: ng.resource.IResourceService) {
        this.MovieResource = $resource('/api/movies/:id')

      }
    }

angular.module('app').service('movieServie', MovieServie);
  }
