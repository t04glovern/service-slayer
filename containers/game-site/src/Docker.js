class Docker
{
    constructor()
    {
        this.dockerWhaleList = [];

        window.setInterval(function()
        {
            this.docker = new PIXI.Sprite(PIXI.loader.resources["assets/docker.png"].texture);
            this.docker.anchor.set(0.5, 0.5);
            this.docker.position.set(renderer.width * 1.1, renderer.height * Math.random());

            // Diversify dockers size
            let minScale = 0.2;
            let maxScale = 1.2;
            let scale = Math.random() * (maxScale - minScale) + minScale;
            this.docker.scale.set(scale, scale);

            stage.addChildAt(this.docker, 0);
            this.dockerWhaleList.push(this.docker);
        }.bind(this), 2000);
    }

    update()
    {
        this.dockerWhaleList.forEach(function(element, index, array) {
            element.position.x -= 4;

            if (element.position.x < -renderer.width * 0.3) {
                element.destroy();
                array.splice(0, 1);
            }
        });
    }
}
