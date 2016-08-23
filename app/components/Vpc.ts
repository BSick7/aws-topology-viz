/// <reference path="../typings" />

namespace viz.components {
    export class Vpc {
        private $container: puck.Container;
        private $border: puck.Rectangle;
        private $inner: puck.Container;

        constructor() {
            var container = this.$container = new puck.Container();

            var img = new puck.Image();
            img.sourceUri = "images/vpc.png";
            img.x = 5;
            img.y = 5;
            img.width = 60;
            img.height = 73;
            img.stretch = puck.Stretch.none;
            container.elements.push(img);

            var border = this.$border = new puck.Rectangle();
            border.stroke = new puck.SolidColorBrush("Black");
            border.strokeThickness = 1;
            container.elements.push(border);

            var inner = this.$inner = new puck.Container();
            inner.x = 5;
            inner.y = 80;
            container.elements.push(inner);
        }

        attach(parent: puck.Container) {
            parent.elements.push(this.$container);
        }

        get x(): number {
            return this.$container.x;
        }

        set x(value: number) {
            this.$container.x = value;
        }

        get y(): number {
            return this.$container.y;
        }

        set y(value: number) {
            this.$container.y = value;
        }

        get width(): number {
            return this.$border.width;
        }

        set width(value: number) {
            this.$border.width = value;
        }

        get height(): number {
            return this.$border.height;
        }

        set height(value: number) {
            this.$border.height = value;
        }
    }
}