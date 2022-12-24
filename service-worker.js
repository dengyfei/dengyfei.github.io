/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "97906403bf162ac53d46b8eabd75e8b8"
  },
  {
    "url": "assets/css/0.styles.9cc53e28.css",
    "revision": "51a5ee3938c2d3c479c29128eaa8a384"
  },
  {
    "url": "assets/img/component.98cf5b40.png",
    "revision": "98cf5b40faebf7beb01e4b0734d55fcc"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/life_cycle.3fadb6ff.png",
    "revision": "3fadb6ff982e68b265fe91971e7251d1"
  },
  {
    "url": "assets/img/multi_components.834bb12d.png",
    "revision": "834bb12d99e4d573ed2911a901c05929"
  },
  {
    "url": "assets/img/process.3cd22eb0.png",
    "revision": "3cd22eb070b138f45cc7185dbca94342"
  },
  {
    "url": "assets/img/protals_css.86fb2667.png",
    "revision": "86fb2667fd15be1a2c097ca22c6de02c"
  },
  {
    "url": "assets/img/protals_parent_dom.f75bb06d.png",
    "revision": "f75bb06da33ae698034d23709358c952"
  },
  {
    "url": "assets/img/react_error.462def45.png",
    "revision": "462def45fd6fa8cbaf9a4df67e939472"
  },
  {
    "url": "assets/img/scss.faa3d302.png",
    "revision": "faa3d302c654422f3aa278493bec659f"
  },
  {
    "url": "assets/img/this_error.3819a91c.png",
    "revision": "3819a91ca91809ccf1e41c35869309ba"
  },
  {
    "url": "assets/img/webpack.c4112a74.png",
    "revision": "c4112a74a58c899fffed46d64aeed44d"
  },
  {
    "url": "assets/js/1.14726a1a.js",
    "revision": "5012be893eaf20b436932b04d080b876"
  },
  {
    "url": "assets/js/10.4de53d59.js",
    "revision": "27183bedf173465852f4a0416cfb90fb"
  },
  {
    "url": "assets/js/11.1d89543c.js",
    "revision": "a94f6c2d19ff5b743bdf6893307ba8e6"
  },
  {
    "url": "assets/js/12.27a5525f.js",
    "revision": "556393936407ab6342bc6ca0823520de"
  },
  {
    "url": "assets/js/13.b6f2ebc2.js",
    "revision": "0e9644fa4e594c7c8da2606aa1863908"
  },
  {
    "url": "assets/js/14.d7fb7fae.js",
    "revision": "309b3d04f725232c8f7655dcd68457bd"
  },
  {
    "url": "assets/js/15.d4a62726.js",
    "revision": "ef8aa2fffe8892281fb79df5bd13100a"
  },
  {
    "url": "assets/js/16.4e72604c.js",
    "revision": "c2948206320ffd6e2d210d4837bfc697"
  },
  {
    "url": "assets/js/17.1b0d349d.js",
    "revision": "4c3636388eb4326d48a69b378e7f7374"
  },
  {
    "url": "assets/js/4.808de003.js",
    "revision": "b762fcf2811b0d93089e648cfdef04bc"
  },
  {
    "url": "assets/js/5.7d07a5bb.js",
    "revision": "369f3d2d46746149b9859e049d9be6a1"
  },
  {
    "url": "assets/js/6.f068a179.js",
    "revision": "55ce602bb9ee477f9ba6c3389bcfe2b5"
  },
  {
    "url": "assets/js/7.f21dc773.js",
    "revision": "d5d217c56d9b53697403a105592ad087"
  },
  {
    "url": "assets/js/8.bf3cc4f8.js",
    "revision": "b04e11d428132594d1d86bc8fba53e97"
  },
  {
    "url": "assets/js/9.0239d1fc.js",
    "revision": "d485da58ee82428f2c6700ec77e884ad"
  },
  {
    "url": "assets/js/app.7c06bb3c.js",
    "revision": "f50b9b327f511a6cca3ea36b6f3c4c9b"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.0550b4d9.js",
    "revision": "dc5aac839cab38d65d1314e4540d64f9"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "basic/css/sass.html",
    "revision": "d4b7a5d56ec05974d8bf814cd45cf275"
  },
  {
    "url": "basic/webpack/webpack.html",
    "revision": "46b74f0245cc553ccbc2cd70998935c6"
  },
  {
    "url": "categories/css/index.html",
    "revision": "3b7bd163d70e29cd9464f7e6f4aee117"
  },
  {
    "url": "categories/index.html",
    "revision": "68e5c38db9653022046f3d6c94c5c1c4"
  },
  {
    "url": "categories/react router/index.html",
    "revision": "15b4e59a514cd87f9e34a3d1c2e620bf"
  },
  {
    "url": "categories/react/index.html",
    "revision": "169cb387639224dda13a2e99a5393c37"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "5b0750c1d2f69a9fa133686882232a10"
  },
  {
    "url": "css/style.css",
    "revision": "9d9351d9a01feec2d120610bc0dee857"
  },
  {
    "url": "frame/react/react/react.html",
    "revision": "faaf7364d4d419354d99614bdd41ccc1"
  },
  {
    "url": "frame/react/redux/redux.html",
    "revision": "270a09f9493901c0d695065bf9152cb9"
  },
  {
    "url": "frame/react/router/router.html",
    "revision": "9ebbe72cf6b982ec59ba66ca3f3a02c0"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "index.html",
    "revision": "833de7665d46635a31bb25a1771e467f"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "ae3cc1d86482505d1f55bb9d6559a2ce"
  },
  {
    "url": "tags/css/index.html",
    "revision": "82f5193974a25b4a4cb78fbf964cab39"
  },
  {
    "url": "tags/react router/index.html",
    "revision": "7bc59720ed50efcd8a0b2e43c70bc3ef"
  },
  {
    "url": "tags/react/index.html",
    "revision": "0eea0a314e88f41cf15ef5d338204ca0"
  },
  {
    "url": "tags/redux/index.html",
    "revision": "8db2e9b3334e4d251cc5aec57b65ba20"
  },
  {
    "url": "tags/scss/index.html",
    "revision": "4b972316403dedaa5caa5fc115aac11e"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "a457acc9ea6aebd02395f4d3ea385f99"
  },
  {
    "url": "timeline/index.html",
    "revision": "e2e84927097cc49f5313b9fc3bc3f575"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
