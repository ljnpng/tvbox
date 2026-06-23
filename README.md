# TVBox MissAV Source

TVBox source for `missav.ai`.

Use this raw config URL in TVBox:

```text
https://raw.githubusercontent.com/ljnpng/tvbox/main/jsm.json
```

Notes:

- Playback intentionally returns the MissAV watch page with `parse: 1`.
- TVBox should use WebView sniffing to capture the real HLS request from the page context.
- Direct HTTP requests to `missav.ai` and `surrit.com` may hit Cloudflare challenges; test on the target TVBox device/network.
- This repo includes the `drpy2.min.js` runtime and `spider.jar` copied from `qist/tvbox`.
