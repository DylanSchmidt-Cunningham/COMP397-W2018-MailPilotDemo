module scenes {
    export class PlayScene extends objects.Scene {
        // Private Instance Variables
        private _ocean: objects.Ocean;
        private _plane: objects.Plane;
        private _island: objects.Island;
        private _clouds: objects.Cloud[];
        private _cloudNum: number;

        // Public Properties

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);

            this.Start();
        }

        // Private Methods

        
        // Public Methods

        // Initialize Game Variables and objects
        public Start():void {
            this._ocean = new objects.Ocean(this.assetManager);
            this._plane = new objects.Plane(this.assetManager);
            this._island = new objects.Island(this.assetManager);

            // instantiate the cloud array
            this._clouds = new Array<objects.Cloud>();
            this._cloudNum = 3;
            // loop and add each cloud to the array
            for (let count = 0; count < this._cloudNum; count++) {
                this._clouds[count] = new objects.Cloud(this.assetManager);
            }

            this.Main();
        }

        // triggered every frame
        public Update():void {
            this._ocean.Update();
            this._plane.Update();
            this._island.Update();
            
            //check collision between plane and island
            managers.Collision.Check(this._plane, this._island);

            this._clouds.forEach(cloud => {
                cloud.Update();
                // check collision beyween plane and current island
                managers.Collision.Check(this._plane, cloud);
            });
        }

        // This is where the fun happens
        public Main():void {
            // add the ocean to the scene
            this.addChild(this._ocean);

            // add the island to the scene
            this.addChild(this._island);

            // add the plane to the scene
            this.addChild(this._plane);

            // add clouds to the scene
            // for (let count = 0; count < this._cloudNum; count++) {
            //     this.addChild(this._clouds[count]);
            // }
            // or
            this._clouds.forEach(cloud => {
                this.addChild(cloud);
            });

        }
    }
}