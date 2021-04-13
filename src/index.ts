interface CreateSizeChartParams {
    targetImageID: string;
    image: {
        url: string;
        width: number;
        height: number;
    };
    positions: [
        {
            x: number;
            y: number;
            size: string;
        }
    ];
    lazy: boolean;
}

function createSizeChart(options: CreateSizeChartParams) {
    const {
        image: { width, height, url },
        positions,
        targetImageID,
        lazy = false,
    } = options;

    const canvas = createACanvas(width, height);
    const context = createContext(canvas);

    if (context === null) {
        console.error('Could not get canvas context');
        return;
    }

    const image = new Image();
    image.crossOrigin = '*';

    image.onload = (event) => {
        context.drawImage(image, 0, 0);

        positions.forEach(({ size, x, y }) => {
            context.fillText(size, x, y);
        });

        const imageWithSizes = canvas.toDataURL();
        setTargetImageURL(targetImageID, imageWithSizes);
    };

    console.log(lazy);

    if (lazy) {
        return function () {
            image.src = url;
        };
    } else {
        image.src = url;
    }
}

function createACanvas(width: number, height: number) {
    const canvas = document.createElement('canvas');

    canvas.width = width;
    canvas.height = height;

    return canvas;
}

function createContext(canvas: HTMLCanvasElement) {
    const context = canvas.getContext('2d');

    if (context === null) {
        return null;
    }

    context.font = '14px system-default';
    context.textAlign = 'center';

    return context;
}

function setTargetImageURL(target: string, url: string) {
    const targetEl = document.getElementById(target);

    if (targetEl === null) {
        console.error('Could not find target image');
        return null;
    }

    if (!(targetEl instanceof HTMLImageElement)) {
        console.error('Target element is not an img tag');
        return null;
    }

    targetEl.src = url;
}

export default createSizeChart;
