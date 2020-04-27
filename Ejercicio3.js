
//const blogs= [
    //matriz de objetos
   // {title:'La orca asesina', likes: 100},
    //{title:'La orca cristiana', likes: 500}
//];

//console.log(blogs);
let user = {
    name: 'Jesus',
    age: 30,
    email: 'jesusalejandro2199@gmail.com',
    location: 'chetumal',
    blogs:[
        {title:'La orca asesina', likes: 100},
    {title:'La orca cristiana', likes: 500}
    ],
    login(){
        console.log('El usuario ingreso');
    },

    logout(){
        console.log('El usuario salio');
    },
    logBlogs(){
        //registrar diferentes blogs en la consola
        //para esto necesitamos acceder a esta función 
        console.log('este usuario se registro en este blog');
        
    
            //se refiere a este objeto de usuario
            //this es un objeto de contexto
            this.blogs.forEach(blog => {
            console.log(blog.title,blog.likes);
            
        });

    }
      
};

user.logBlogs();