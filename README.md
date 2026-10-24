# Video Framing

Extracts frames from a video in the browser at a chosen interval, using the HTML5 video element and Canvas. No server involved.

**Live demo:** https://kobtsev-m.github.io/Video-Framing

## How it works
The video is seeked step by step (`currentTime += interval`); on each `seeked` event the current frame is drawn to a canvas and saved as a JPEG data URL, then shown in a frame list.

## Stack
React, TypeScript, Canvas API, Bootstrap / reactstrap

## Run locally
```bash
yarn install
yarn start
```
