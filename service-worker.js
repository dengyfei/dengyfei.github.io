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
    "revision": "af650a818ff4ec6083abe94e03bf701d"
  },
  {
    "url": "algorithm/algorithm.html",
    "revision": "9f6100ffc33e65ef3d8df0bb590ba838"
  },
  {
    "url": "assets/css/0.styles.9cc53e28.css",
    "revision": "51a5ee3938c2d3c479c29128eaa8a384"
  },
  {
    "url": "assets/img/apply.47b3bccc.png",
    "revision": "47b3bccc2cea5f6ac39adb870c440fee"
  },
  {
    "url": "assets/img/BST.dd1d7a1e.png",
    "revision": "dd1d7a1ef71e6b07e559fd3b23c446ac"
  },
  {
    "url": "assets/img/cached.f1f5a6b0.png",
    "revision": "f1f5a6b0cdc941c4378bd34ff78c2568"
  },
  {
    "url": "assets/img/caniuse.20622b33.png",
    "revision": "20622b33c867114a00d7df6c170db7f8"
  },
  {
    "url": "assets/img/centralized.c433d8eb.png",
    "revision": "c433d8ebd0b215633544479315f0ab3c"
  },
  {
    "url": "assets/img/component.98cf5b40.png",
    "revision": "98cf5b40faebf7beb01e4b0734d55fcc"
  },
  {
    "url": "assets/img/contentBase.ae51fb03.png",
    "revision": "ae51fb030e87fd2a532a768b07e061db"
  },
  {
    "url": "assets/img/css.2ef9f77a.png",
    "revision": "2ef9f77a9f24307420b0f9034133fc8d"
  },
  {
    "url": "assets/img/delete_origin.654573b7.png",
    "revision": "654573b723bf1577394f2f86f5095489"
  },
  {
    "url": "assets/img/delete.b35d4c3e.gif",
    "revision": "b35d4c3e90648c70411d043bf3c00fbf"
  },
  {
    "url": "assets/img/dev_server.c5a8e594.png",
    "revision": "c5a8e594161a9956688f942dd04403dd"
  },
  {
    "url": "assets/img/distributed.92672c9d.png",
    "revision": "92672c9d35a3337d4784b28b68804ad0"
  },
  {
    "url": "assets/img/drop.3ac82d41.png",
    "revision": "3ac82d4171f699e7b232f6f4f13290ad"
  },
  {
    "url": "assets/img/earn.a09bff75.png",
    "revision": "a09bff754ecc3ac66ba3a9717e970ae5"
  },
  {
    "url": "assets/img/end.fa98f7da.png",
    "revision": "fa98f7daec8cbb0da9ffbe216b1c5236"
  },
  {
    "url": "assets/img/gulp_series.0cf8829c.png",
    "revision": "0cf8829c09c8658e4192690b8c131335"
  },
  {
    "url": "assets/img/gzip.55741bb4.png",
    "revision": "55741bb4d1a06d6abd21f543355a3d3a"
  },
  {
    "url": "assets/img/happy.2a591093.jpg",
    "revision": "2a591093cb877f42a79ef395ebebf513"
  },
  {
    "url": "assets/img/hash_link.7bc1abff.png",
    "revision": "7bc1abffffad95362c80e7f2731134bc"
  },
  {
    "url": "assets/img/HMR.3e35db37.svg",
    "revision": "3e35db377cd9a2d5bc43c1232f1c4cf8"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/hooks.71697389.png",
    "revision": "716973892e3fd37e7ee17cfaac3e6ccb"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/img/img.2e729448.png",
    "revision": "2e729448bacd4ab2cb6a8ea167b6afbe"
  },
  {
    "url": "assets/img/index_html.a429fd99.png",
    "revision": "a429fd996afd733950ae553b4a143a2e"
  },
  {
    "url": "assets/img/life_cycle.3fadb6ff.png",
    "revision": "3fadb6ff982e68b265fe91971e7251d1"
  },
  {
    "url": "assets/img/merge1.680cc79e.png",
    "revision": "680cc79ef933daf874c7f0ef665a3b31"
  },
  {
    "url": "assets/img/merge2.58285798.png",
    "revision": "5828579880db74fe049431ddd04d764c"
  },
  {
    "url": "assets/img/merge3.68a4c969.png",
    "revision": "68a4c96978d118c32ca6e82199a7a17a"
  },
  {
    "url": "assets/img/merge4.cb4b4e5f.png",
    "revision": "cb4b4e5f0221f67e44d1f790dfd1d63a"
  },
  {
    "url": "assets/img/multi_components.834bb12d.png",
    "revision": "834bb12d99e4d573ed2911a901c05929"
  },
  {
    "url": "assets/img/no_found_error.7e0b561b.png",
    "revision": "7e0b561b6fc63ab54410a0574922e827"
  },
  {
    "url": "assets/img/now.fa2b9ae6.png",
    "revision": "fa2b9ae694942c96c3ec1bda1a9addd3"
  },
  {
    "url": "assets/img/polyfill.eeb6ffff.png",
    "revision": "eeb6ffff60cd0b06cb6cf1caf6a62bb4"
  },
  {
    "url": "assets/img/polyfill2.3e74ec48.png",
    "revision": "3e74ec48214bfb417ae577793d0f006f"
  },
  {
    "url": "assets/img/pop.01f23ffd.png",
    "revision": "01f23ffd2b295e559b6c0e5b19394c45"
  },
  {
    "url": "assets/img/preset.afb6aef5.png",
    "revision": "afb6aef59652c466457c215102af3322"
  },
  {
    "url": "assets/img/process.3cd22eb0.png",
    "revision": "3cd22eb070b138f45cc7185dbca94342"
  },
  {
    "url": "assets/img/process.b0dd9295.png",
    "revision": "b0dd9295edc65a1665cf7357c5671fea"
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
    "url": "assets/img/push_error.96a7e602.png",
    "revision": "96a7e6029436a03571ea4ed3ae8cf7df"
  },
  {
    "url": "assets/img/push.3c68d388.png",
    "revision": "3c68d388bc93d2d58cd25c87f111d5a6"
  },
  {
    "url": "assets/img/query_combiner.620ce4c3.png",
    "revision": "620ce4c3b13762360e840f1e4f5de623"
  },
  {
    "url": "assets/img/react_error.462def45.png",
    "revision": "462def45fd6fa8cbaf9a4df67e939472"
  },
  {
    "url": "assets/img/rebase.4c1096a5.png",
    "revision": "4c1096a5863c4bd6ad7c1022b527cd2c"
  },
  {
    "url": "assets/img/red_black_tree.28e1529c.png",
    "revision": "28e1529c54511df5375f2d2129b49b57"
  },
  {
    "url": "assets/img/reset.cc6fb41d.png",
    "revision": "cc6fb41ddc901c6bc42fa9f657475851"
  },
  {
    "url": "assets/img/response.4adbaa79.png",
    "revision": "4adbaa79e67edfd1d60fbdc9a05e0fc7"
  },
  {
    "url": "assets/img/script.a7fb18d4.png",
    "revision": "a7fb18d4dbcb344634912483f11d8f62"
  },
  {
    "url": "assets/img/scss.faa3d302.png",
    "revision": "faa3d302c654422f3aa278493bec659f"
  },
  {
    "url": "assets/img/stack.6d41ca5f.png",
    "revision": "6d41ca5fbd63467da4ed639bb9788ba3"
  },
  {
    "url": "assets/img/start.4e70a555.png",
    "revision": "4e70a555d3258891bceabaa47e21002d"
  },
  {
    "url": "assets/img/stash.7b0e0b69.png",
    "revision": "7b0e0b6944c7dcd7c4c09834b6dfdb7c"
  },
  {
    "url": "assets/img/this_error.3819a91c.png",
    "revision": "3819a91ca91809ccf1e41c35869309ba"
  },
  {
    "url": "assets/img/thread.dc45390d.png",
    "revision": "dc45390d22fb53bf4a5e3b4a20d12b0f"
  },
  {
    "url": "assets/img/transform.91aa7a6b.png",
    "revision": "91aa7a6b4c6191be39551a23f1f6b149"
  },
  {
    "url": "assets/img/turn_left.fdb18297.png",
    "revision": "fdb18297f7733935a0258b19d42122ec"
  },
  {
    "url": "assets/img/turn_right.8e2a6bc0.png",
    "revision": "8e2a6bc023ad7f8bb148a2ce8b392fc7"
  },
  {
    "url": "assets/img/unbalanced.6c315557.png",
    "revision": "6c315557477c7b0df72441896700f4db"
  },
  {
    "url": "assets/img/webpack.c4112a74.png",
    "revision": "c4112a74a58c899fffed46d64aeed44d"
  },
  {
    "url": "assets/img/what.c17fb841.jpg",
    "revision": "c17fb841848bdbe889102b2224195b42"
  },
  {
    "url": "assets/js/1.9d26e7c2.js",
    "revision": "644043f702aba1836a7df2cfc15cb188"
  },
  {
    "url": "assets/js/10.a2a3a23e.js",
    "revision": "36d7c02ca25d73bbf275985cf1033bd4"
  },
  {
    "url": "assets/js/11.98134433.js",
    "revision": "448999b29eee9a66b6870e2bacf545a7"
  },
  {
    "url": "assets/js/12.61792e8a.js",
    "revision": "3a1477c72c0d4b2f377a1687537d2cfa"
  },
  {
    "url": "assets/js/13.193f9307.js",
    "revision": "9991d7426d302477cd04b31bfcf30d4e"
  },
  {
    "url": "assets/js/14.4f55412f.js",
    "revision": "946d6fcb29614c2de9d6817faa0a7a78"
  },
  {
    "url": "assets/js/15.312bab3c.js",
    "revision": "9834be93f4b9d5ed275461cd33e0e446"
  },
  {
    "url": "assets/js/16.d6e6d53e.js",
    "revision": "f43a8ff0ab41eedf74b8ef5d29af5624"
  },
  {
    "url": "assets/js/17.f15a0a2d.js",
    "revision": "e10d54052117b66f79e153b9dca5eaf4"
  },
  {
    "url": "assets/js/18.77f54671.js",
    "revision": "104a5fb49f6e54b250f5feee682b1c10"
  },
  {
    "url": "assets/js/19.b653579d.js",
    "revision": "f762c1b5ecd12ce584fa978dd7898f75"
  },
  {
    "url": "assets/js/20.e191a925.js",
    "revision": "46651520656a268d32ca95992fe273bb"
  },
  {
    "url": "assets/js/21.405c21a4.js",
    "revision": "7db7cc3b176f90fca09de47b1dca7ae9"
  },
  {
    "url": "assets/js/4.b7ac1ab4.js",
    "revision": "55bd6f7252efffa9e970c88ebf8ded1a"
  },
  {
    "url": "assets/js/5.75731db2.js",
    "revision": "295dec24e298d2916c88a0367e630649"
  },
  {
    "url": "assets/js/6.6027367b.js",
    "revision": "e1c9cae6991cc233c3bd42728846d396"
  },
  {
    "url": "assets/js/7.f626a356.js",
    "revision": "2860b13cfa0f11e72f6feeb9544055e1"
  },
  {
    "url": "assets/js/8.9cf2c28d.js",
    "revision": "ea45a52df70e3945d6497f59a286ae32"
  },
  {
    "url": "assets/js/9.f39c5c6b.js",
    "revision": "a49f24d28171c889b890c4556b47b79a"
  },
  {
    "url": "assets/js/app.b627ab70.js",
    "revision": "8bce24a5cf68612cefa778e866c4ac1d"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "5e531c8203c137050051b7eabfedadb7"
  },
  {
    "url": "assets/js/vendors~flowchart.7646b3f8.js",
    "revision": "cbf78f264c55604d80ae8238f3d50751"
  },
  {
    "url": "avatar.png",
    "revision": "9e9bc9348ad2729ea7d2aedf5dd2de88"
  },
  {
    "url": "basic/babel/babel.html",
    "revision": "8704a0b973edc9a91dc7794c71e8e7ee"
  },
  {
    "url": "basic/css/sass.html",
    "revision": "947fd78bd63333e121037b08c12b19bd"
  },
  {
    "url": "basic/git/git.html",
    "revision": "f1c84fea8439e01ff2d69fba5dbb40dd"
  },
  {
    "url": "basic/webpack/webpack.html",
    "revision": "fe051284e5db71e4c31fb894bde7de7f"
  },
  {
    "url": "categories/babel/index.html",
    "revision": "ea362f46752f8bab080d5d1e6adec98f"
  },
  {
    "url": "categories/css/index.html",
    "revision": "b632cb83042c3bfd70ef2d3b66ed432e"
  },
  {
    "url": "categories/git/index.html",
    "revision": "0a12425154ec02a959c8efb19571b88d"
  },
  {
    "url": "categories/index.html",
    "revision": "fd94d2bc70f544d1152487c920cdbf89"
  },
  {
    "url": "categories/react router/index.html",
    "revision": "f3ff7f489a90ebebe01a6d8f256e7891"
  },
  {
    "url": "categories/react/index.html",
    "revision": "0406dd3e54661acda0315b65489b0695"
  },
  {
    "url": "categories/webpack/index.html",
    "revision": "515980d71dc74cc5f3ffcc0efff43dbe"
  },
  {
    "url": "categories/数据结构与算法/index.html",
    "revision": "b45ecf0b9fe045ebb43f3a3a230855df"
  },
  {
    "url": "categories/浏览器/index.html",
    "revision": "35a2716a0b0007c47fe41c027241d8ea"
  },
  {
    "url": "categories/网络/index.html",
    "revision": "0bd1a77a8dbf5f8fd40bf84ec0cb9616"
  },
  {
    "url": "css/style.css",
    "revision": "9d9351d9a01feec2d120610bc0dee857"
  },
  {
    "url": "essay/multiprocessBrowser/multiprocessBrowser.html",
    "revision": "256616b5ef9cdc54f5ae29348ce64f09"
  },
  {
    "url": "frame/react/react/react.html",
    "revision": "61da63800b63375942786cedd503af66"
  },
  {
    "url": "frame/react/redux/redux.html",
    "revision": "12d361098894bf2cf9e5adce1f754020"
  },
  {
    "url": "frame/react/router/router.html",
    "revision": "5f31eb29c580a354e20a76d3a4b46017"
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
    "revision": "327886f198d52ba5005fd4e89e13d183"
  },
  {
    "url": "js/custom.js",
    "revision": "7eaea0e4f442f7f552e183b69a8700c2"
  },
  {
    "url": "tag/index.html",
    "revision": "23667c4a1197f3ab13a2f3d5baf88a6f"
  },
  {
    "url": "tags/babel/index.html",
    "revision": "e79a83f8bd2c096642214d96b9beb4be"
  },
  {
    "url": "tags/css/index.html",
    "revision": "055cbcaf60f8a28544a95ccf86451eef"
  },
  {
    "url": "tags/react router/index.html",
    "revision": "63268760e27176208c74fa9b1a942cac"
  },
  {
    "url": "tags/react/index.html",
    "revision": "b2f1acebb728f8f4d249d894a1a57a03"
  },
  {
    "url": "tags/redux/index.html",
    "revision": "03800cd4e9b72ad9d09494fcd8fd28cb"
  },
  {
    "url": "tags/scss/index.html",
    "revision": "e348766a6a9472f15841e944de68b222"
  },
  {
    "url": "tags/webpack/index.html",
    "revision": "0db852721fdfd3e5286855b3a0d8cd7f"
  },
  {
    "url": "tags/数据结构与算法/index.html",
    "revision": "9dde0cf318c44ce2946758209c729a77"
  },
  {
    "url": "tags/浏览器/index.html",
    "revision": "a4ce671538f318f42f2561f115d54da2"
  },
  {
    "url": "tags/网络/index.html",
    "revision": "5eeec0b990c70dd20a4bbbc029c53d42"
  },
  {
    "url": "timeline/index.html",
    "revision": "eb7132aced1ac776ebb896b6c3790d74"
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
