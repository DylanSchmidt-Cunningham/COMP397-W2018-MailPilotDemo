module objects {
    export class GameObject extends createjs.Bitmap {
        // private instance variables
        protected _dx:number;
        protected _dy:number;

        // public properties
        public width: number;
        public height:number;
        public halfwidth:number;
        public halfheight:number;

        // constructors
        constructor(assetManager:createjs.LoadQueue, imageString:string) {
           super(assetManager.getResult(imageString));
           this.name = imageString;
           this._initialize();
       }

        // private methods
        private _initialize():void {
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.halfwidth = this.width * 0.5;
            this.halfheight = this.height * 0.5;
            this.regX = this.halfwidth;
            this.regY = this.halfheight;
        }

        // public methods
        public Start():void {
    
        }

        public Update():void {

        }

        public Reset():void {

        }

        public CheckBounds():void {

        }

        public Move():void {
            
        }
    }
}