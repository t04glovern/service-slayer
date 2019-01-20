/*****************************************************

                    Main.js

*****************************************************/

var stage = new PIXI.Container();
var docker;
var enemy;
var player;

PIXI.loader.add([
    "assets/docker.png",
    "assets/spaceship.png",
    "assets/rocket.png",
    "assets/enemy.png"
]).load(init);


function init()
{
    renderer.backgroundColor = 0x00000;

    docker = new Docker();
    enemy = new Enemy();
    player = new Player();

    renderer.render(stage);

    loop();
}

function loop()
{
    docker.update();
    enemy.update();
    player.update();

    Rocket.list.map((element) =>
    {
        element.update();
    });

    requestAnimationFrame(loop);
    renderer.render(stage);
}
