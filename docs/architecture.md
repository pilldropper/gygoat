# Architecture

Frontend:
- React
- TypeScript

Backend:
- Rust
- Tauri commands

External Tools:
- yt-dlp
- FFmpeg

Data Flow:

React
→ Tauri invoke
→ Rust command
→ yt-dlp
→ Rust result
→ React UI