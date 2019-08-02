import Granim from 'granim';

var granimInstance = new Granim({
    element: '#canvas-granim',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    image: {
        source: 'images/hero.png',
        blendingMode: 'color'
    },
    states: {
        "default-state": {
            gradients: [
                ['#3ec7f3', '#0d6aff'],
                ['#144c8c', '#4f2d8a'],
                ['#3ec7f3', '#50f0bd']
            ]
        }
    }
});