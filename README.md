# Cloudflare Deploy (Workers + Containers)

This repository contains an isolated Cloudflare deployment target for AssppWeb.

## Why Containers

AssppWeb backend needs:

- WebSocket upgrades (`/wisp/`)
- filesystem writes for compiled IPA output
- long-running Node.js runtime behavior

Cloudflare Containers runs the existing Dockerized app with minimal changes.

## Deploy

```bash
npm install
# Use either `npx wrangler login` locally or set CLOUDFLARE_API_TOKEN in CI
npm run deploy
```

`npm run deploy` performs a real deploy when `CLOUDFLARE_API_TOKEN` is present; otherwise it automatically falls back to `wrangler deploy --dry-run` for CI validation.

For local preview on Cloudflare runtime:

```bash
npm install
npm run dev
```

## Notes

- `wrangler.jsonc` points at `./Dockerfile` so this repository can deploy standalone.
- The worker routes all HTTP and WebSocket traffic to one named container instance (`main`) to keep app state consistent.
- Container filesystem is ephemeral. Compiled packages may be lost when the container stops and restarts.
