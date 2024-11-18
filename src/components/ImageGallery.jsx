import React from 'react';

const ImageGallery = () => {
  return (
    <>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mx-3">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/736x/b7/19/34/b7193463c785628c2878b31b7a8ba885.jpg"
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
            src="https://i.pinimg.com/736x/d6/7a/0c/d67a0cd99847767a9b53a7c9b7b801a6.jpg"
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
            src="https://i.pinimg.com/736x/f4/03/96/f403968065cac820b612d6a506127b3a.jpg"
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
            src="https://i.pinimg.com/736x/2a/52/99/2a5299bfd4a3f023d5a31460f675eb82.jpg"
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
     <div className='text-center my-20'>
          <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
          <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Learn more
              <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </a>
          </div>

    </>
  );
};

export default ImageGallery;
