class MovieShop extends AbstractShop
{

    constructor(game, index) {
        this.game = game;
        this.index = index;

        this.asset = {
            name: "movie-shop"
        };

        this.price = 250000;

        this.profit = 250000;
        this.interval = 750;

        super.constructor();
    }

    update() {
        super.update();
    }
}