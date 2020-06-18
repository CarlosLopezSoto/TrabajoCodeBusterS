class Router {
    constructor(app,currVersion){
        this.app = app;
        this.currentVersion = currVersion;
    }


    configureRoutes(){
        this.app.get("/api/version",(req,res) => {

            try {
                res.status(200).send(this.currentVersion);
            } catch (error) {
                error => res.status(400).json('Error: '+ error);
            }
        });

        // PARA LA DEMO: 
        // DURANTE LA DEMO 
        this.app.get("/api/nueva",(req,res) => {
        // ANTES DE ARRANCAR 
        //this.app.get("api/nueva",(req,res) => {
            res.status(200).send('Nueva Ruta')
        });

        return this.app;
    }
    

}

module.exports = Router;