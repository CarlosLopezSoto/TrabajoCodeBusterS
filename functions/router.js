class Router {
    constructor(app,currVersion){
        this.app = app;
        this.currentVersion = currVersion;
    }


    configureRoutes(){
        this.app.get("/version",(req,res) => {

            try {
                res.status(200).send(this.currentVersion);
            } catch (error) {
                error => res.status(400).json('Error: '+ error);
            }
            
        
        });

        return this.app;
    }


}

module.exports = Router;