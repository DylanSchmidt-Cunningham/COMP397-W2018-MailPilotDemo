module managers {
    export class ScoreBoard {
        // private instance variables
        private _lives:number;
        private _score:number;
        private _highScore:number;

        // public Instance variables
        public LivesLabel:objects.Label;
        public ScoreLabel:objects.Label;
        public HighScoreLabel:objects.Label;
       
        // public properties

        // getter and setter throw Lint fit in newest version of
        // TypeScript, but I'm told it will work fine anyway
        // the problem is it ignores tsconfig.json, so doesn't know
        // that it is indeed targetting ECMAScript 5
        // but it is, so it's fine

        // well, guess what?
        // it's NOT fine

        get Lives(): number {
            return this._lives;
        }

        set Lives(newLives:number) {
            this._lives = newLives;
            this.LivesLabel.text = "Lives: " + this._lives;
        }

        get Score(): number {
            return this._score;
        }

        set Score(newScore:number) {
            this._score = newScore;
            this.ScoreLabel.text = "Score: " + this._score;
        }

        get HighScore(): number {
            return this._highScore;
        }

        set HighScore(newHighScore:number) {
            this._highScore = newHighScore;
            this.HighScoreLabel.text = "High Score: " + this._highScore;
        }

        // constructors
        constructor() {
            this._initialize();
        }

        // private methods
        private _initialize():void {
            this.LivesLabel = new objects.Label("Lives: 0",
             "20px", "Consolas", "#FFFF00", 10, 10, false);
            this.ScoreLabel = new objects.Label("Score: 99999",
             "20px", "Consolas", "#FFFF00", 500, 10, false);
            this.ScoreLabel = new objects.Label("High Score: 99999",
             "40px", "Consolas", "#FFFF00", 320, 240, true);

             this.Lives = 5;
             this.Score = 0;
             this.HighScore = 0;
        }

        // public methods
    }
}