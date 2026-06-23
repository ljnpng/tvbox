# TVBox NSFW Source

TVBox/FongMi compatible configuration for personal NSFW video sources.

## Config URL

Use this raw config URL in a TVBox-compatible client:

```text
https://raw.githubusercontent.com/ljnpng/tvbox/main/nsfw.json
```

## Tested Client

This config was verified on:

- App: FongMi TV
- Version: `5.5.2`
- Package: `com.fongmi.android.tv`
- Device: Android TV emulator

Other TVBox-compatible apps may work, but should be tested on the target device
because JavaScript runtime behavior and WebView sniffing differ across builds.

## Current Sources

### MissAV

- Site key: `missav`
- Rule file: `js/Missav.js`
- Runtime type: `type: 3` JavaScript source
- Home/recommend page: `https://missav.ai/cn/new?page=1`
- Category pages: `https://missav.ai/cn/{category}?page={page}`
- Playback: returns the MissAV watch page with `parse: 1`; the player should use
  WebView sniffing to capture the real HLS request from page context.

## Upstream Components

This repository is a small assembled TVBox source package. It depends on these
upstream pieces:

- FongMi TV: tested with the Android TV build from `FongMi/Release`.
- drpy2 runtime: pinned to the `3.9.51beta6 20241126` runtime line for FongMi
  QuickJS compatibility.
- JavaScript dependencies: `cheerio`, `crypto-js`, `gbk`, `jinja`, `jsencrypt`,
  `json5`, `node-rsa`, `pako`, and `模板.js`.

The runtime is kept inside `lib/` so the raw config is self-contained. The config
does not use a global `spider.jar`.

## Layout

```text
nsfw.json          Main TVBox/FongMi config
js/               Site rules
lib/              drpy2 runtime and JavaScript dependencies
```

## Notes

- Direct HTTP requests to `missav.ai`, `surrit.com`, or `fourhoi.com` may hit
  Cloudflare or regional network behavior; verify on the target TV/device.
- If a client caches an old config, refresh the source or clear app data before
  testing a new raw URL.
- This repository is intended as a collection; additional 18+ sources can be
  added as new `sites` entries and matching files under `js/`.
