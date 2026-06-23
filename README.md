# TVBox Sources

TVBox/FongMi compatible configuration package with separate normal and NSFW
entrypoints.

## Config URLs

Normal video source, curated from upstream `qist/tvbox` `jsm.json`:

```text
https://raw.githubusercontent.com/ljnpng/tvbox/main/jsm.json
```

NSFW source:

```text
https://raw.githubusercontent.com/ljnpng/tvbox/main/nsfw.json
```

## Upstream Source

The normal source is migrated from:

```text
https://github.com/qist/tvbox/
https://raw.githubusercontent.com/qist/tvbox/master/jsm.json
```

This repository is not a fork because the configs are intentionally curated: we
validate sources, drop broken or low-quality entries, and keep local custom
changes. Upstream `99188.json` is used only as a candidate pool for selected
NSFW sources; entries are added to `nsfw.json` only after validation.

## Verification

Validation was run against:

- App: FongMi TV
- Version: `5.5.2`
- Package: `com.fongmi.android.tv`
- Device: Android TV emulator

Both `jsm.json` and `nsfw.json` were loaded through FongMi's VOD config URL
dialog on the Android TV emulator. The app fetched the raw config files through
the emulator host bridge, showed the retained sites in the in-app source
switcher, and fetched the NSFW runtime libraries from this repository.

Every retained direct collection source was also checked through class, list,
detail, and play URL responses before it was kept. In this FongMi build,
`file://` + `text/plain` imports route to the live-source loader, so VOD configs
should be added through the client's normal config URL flow.

Other TVBox-compatible apps may work, but should be tested on the target device
because JavaScript runtime behavior and WebView sniffing differ across builds.

## Current Sources

### Normal (`jsm.json`)

- Source file: `jsm.json`
- Upstream basis: `qist/tvbox` `jsm.json`
- Current policy: keep only validated, useful normal-video entries.
- Current retained entries are direct collection APIs, so no normal-source
  `jar/` or `js/` companion runtime is required yet. Upstream type-3 sources
  stay out until each one is verified on the target client.

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
- NSFW drpy2 runtime: pinned to the `3.9.51beta6 20241126` runtime line for
  FongMi QuickJS compatibility.
- JavaScript dependencies: `cheerio`, `crypto-js`, `gbk`, `jinja`, `jsencrypt`,
  `json5`, `node-rsa`, `pako`, and `模板.js`.

The NSFW runtime and selected assets are kept inside this repo so raw configs
are self-contained.

## Layout

```text
jsm.json           Normal TVBox/FongMi config
nsfw.json          NSFW TVBox/FongMi config
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
