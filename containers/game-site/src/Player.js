class Player {
    constructor() {
        this.sprite = new PIXI.Sprite(PIXI.loader.resources["assets/spaceship.png"].texture);

        this.sprite.anchor.set(0.5, 0.5);
        this.sprite.position.set(renderer.width * 0.2, renderer.height * 0.4);
        this.sprite.scale.set(0.4, 0.4);

        this.keyState = {
            32: false,
            37: false,
            38: false,
            39: false,
            40: false
        };
        this.keyCodes = {
            37: -1,
            38: -1,
            39: 1,
            40: 1
        };

        this.directionX = 0;
        this.directionY = 0;
        this.speed = 10;

        this.arbiterApi = "http://localhost:2999"
        this.defenseApi = "http://localhost:3000"
        this.offenseApi = "http://localhost:3001"

        this.fireSpeed = 10;
        this.fireCooldown = 0;

        stage.addChild(this.sprite);

        window.addEventListener('keydown', this.onKeyDown.bind(this));
        window.addEventListener('keyup', this.onKeyUp.bind(this));
    }

    update() {
        let nextX = this.sprite.position.x + this.directionX * this.speed;
        let nextY = this.sprite.position.y + this.directionY * this.speed;

        // Prevent from leaving the screen
        if (nextX > 0 && nextX < renderer.width) {
            this.sprite.position.x = nextX;
        }
        if (nextY > 0 && nextY < renderer.height) {
            this.sprite.position.y = nextY;
        }

        this.updateFire();
    }

    updateFire() {
        if (this.fireCooldown < this.fireSpeed)
            this.fireCooldown++;

        if (this.keyState[32] && this.fireCooldown >= this.fireSpeed) {
            let rocket = new Rocket(this.sprite.position.x, this.sprite.position.y);
            this.fireCooldown = 0;
        }
    }

    onKeyDown(key) {
        this.keyState[key.keyCode] = true;

        if (key.keyCode == 37 || key.keyCode == 39)
            this.directionX = this.keyCodes[key.keyCode];
        else if (key.keyCode == 38 || key.keyCode == 40)
            this.directionY = this.keyCodes[key.keyCode];
    }

    onKeyUp(key) {
        this.keyState[key.keyCode] = false;

        if (!this.keyState[37] && this.keyState[39])
            this.directionX = this.keyCodes[39];
        else if (this.keyState[37] && !this.keyState[39])
            this.directionX = this.keyCodes[37];
        else this.directionX = 0;

        if (!this.keyState[38] && this.keyState[40])
            this.directionY = this.keyCodes[40];
        else if (this.keyState[38] && !this.keyState[40])
            this.directionY = this.keyCodes[38];
        else this.directionY = 0;
    }

}
