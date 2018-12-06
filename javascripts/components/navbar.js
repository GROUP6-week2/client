Vue.component('navbar', {
    template: `<div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top" style="background-color:lightgrey">
            <a class="navbar-brand ml-3" href="#"><img src="assets/logo_emotionship.png" width="150px"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
      
            <div class="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  
                </li>
                <li class="nav-item">
                  
                </li>
                <li class="nav-item">
             
                </li>
                <li class="nav-item dropdown">
                  
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-primary my-2 my-sm-0" type="submit">LOG OUT</button>
              </form>
            </div>
          </nav>
</div>`,
  props: ['isLogin']
})