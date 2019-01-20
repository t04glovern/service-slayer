class Enemy
{
    constructor()
    {
        this.enemiesList = [];

        window.setInterval(function()
        {
            this.enemy = new PIXI.Sprite(PIXI.loader.resources["assets/enemy.png"].texture);
            this.enemy.anchor.set(0.5, 0.5);
            this.enemy.scale.set(0.6, 0.6);
            this.enemy.position.set(renderer.width * 1.3, renderer.height * Math.random());

            stage.addChildAt(this.enemy, 0);
            this.enemiesList.push(this.enemy);
        }.bind(this), 2000);
    }

    update()
    {
        this.enemiesList.forEach(function(element, index, array) {
            element.position.x -= 4;

            if (element.position.x < -renderer.width * 0.3) {
                element.destroy();
                array.splice(0, 1);
            }
        });
    }
}
