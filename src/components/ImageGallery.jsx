import React from 'react';

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-3">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/736x/8c/b4/da/8cb4da9fbc1748838c1424e4906fe4fc.jpg"
            alt="Gallery Image 1"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/89/e0/c3/89e0c3343c82bff9ac279fe4a1e78370.jpg"
            alt="Gallery Image 2"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/17/e2/fe/17e2fe5e386898041b91f1b126957691.jpg"
            alt="Gallery Image 3"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/48/79/12/487912005d7ce66464e00b176c6bc24b.jpg"
            alt="Gallery Image 4"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/4c/a7/5a/4ca75a2c31a9b967142696c421c36b5f.jpg"
            alt="Gallery Image 5"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/29/e6/e7/29e6e7be55a25b0cfa33e95591f74142.jpg"
            alt="Gallery Image 6"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/f5/88/ef/f588ef4dd9c6da3dd11bcf04a94d3108.jpg"
            alt="Gallery Image 7"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/62/97/1b/62971b2cd502b918ca523b22c42b59fd.jpg"
            alt="Gallery Image 8"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/f2/9d/f0/f29df0b573c84ca49e4930545bb3dc1b.jpg"
            alt="Gallery Image 9"
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/b1/30/36/b1303682ca53af455e7086a6b27abbd2.jpg"
            alt="Gallery Image 10"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/1e/76/5c/1e765ce530a1cc7740e9fe6fcd5e175c.jpg"
            alt="Gallery Image 11"
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/564x/99/c8/84/99c8841948667bdf5fadcdbf32003763.jpg"
            alt="Gallery Image 12"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
