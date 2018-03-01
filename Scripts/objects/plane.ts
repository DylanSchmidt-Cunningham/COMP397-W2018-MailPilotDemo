module objects {
    export class Plane extends objects.GameObject {
        // private instance variables

        // public properties

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
           super(assetManager, "plane");
           this.Start();
        }

        // private methods

        // public methods

        // reset the object's location to some value
        public Reset():void {
        }

        // move the object to some new location
        public Move():void {
            this.x = objects.Game.stage.mouseX;
        }

        // check to see if some boundary has been passed
        public CheckBounds():void {
            // right boundary
            if (this.x >= 640 - this.halfwidth) {
                this.x = 640 - this.halfwidth;
            }

            // left boundary
            if (this.x <= this.halfwidth) {
                this.x = this.halfwidth;
            }
        }

        // Initializes variables and creates new objects
        public Start():void {
            this.y = 430;
        }

        // update the game object every frame
        public Update():void {
            this.Move();
            this.CheckBounds();
        }
    }
}