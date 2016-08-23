/// <reference path="./typings" />

namespace viz {
    export class VpcVisualizer {
        root: puck.Layer;

        constructor() {
            var canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            document.body.appendChild(canvas);

            this.root = new puck.Layer()
                .attach(canvas.getContext('2d'))
                .activate();

            this.getData(topo => this.createVisuals(topo));
        }

        getData(callback: (topo: IVpcTopology) => any) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", (ev) => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    callback(JSON.parse(xhr.responseText));
                }
            });
            xhr.open("GET", "/api/vpcs/vpc-23b56f44", true);
            xhr.send();
        }

        createVisuals(topo: IVpcTopology) {
            var el = new viz.components.Vpc();
            el.x = 5;
            el.y = 5;
            el.width = 800 - 10;
            el.height = 600 - 10;
            el.attach(this.root);
        }
    }
}