# zcc: zendesk comment copy

A Chrome extension that adds a copy button to Zendesk comments and converts them to markdown format using [Turndown.js](https://github.com/mixmark-io/turndown).

## Features

- Adds a copy button to each Zendesk comment
- Converts HTML content to markdown when copying
- Preserves code blocks and line breaks
- Provides visual feedback when copying
- Works with dynamically loaded comments

## Installation

1. Download or clone this repository

   ```bash
   git clone https://github.com/sardonyx001/zcc.git
   ```

2. Open Chrome and go to [`chrome://extensions/`](chrome://extensions/)
3. Enable "Developer mode" in the top right
   - ![Screenshot 2025-06-05 at 16 13 38](https://github.com/user-attachments/assets/e89df832-e907-434a-8f23-6df398f8f3fa)
4. Click "Load unpacked" and select the extension directory
   - ![Screenshot 2025-06-05 at 16 13 48](https://github.com/user-attachments/assets/4c59a76e-0ec0-4a5b-bb5d-6375babb5933)

## Usage

1. Navigate to any Zendesk ticket page
2. Each comment will have a copy button in the top right corner
3. Click the copy button to copy the comment content as markdown
4. The button will show a checkmark when the content is successfully copied
5. Paste the markdown content wherever you need it

## Development

The extension consists of the following files:

- `manifest.json`: Extension configuration
- `content.js`: Main script that adds copy buttons and handles copying
- `styles.css`: Styles for the copy button
- `turndown.js`: The Turndown library for HTML to markdown conversion (from <https://unpkg.com/turndown/dist/turndown.js>)

## Todo

- [ ] add github actions to pack and generate releases
- [ ] add a better icon
- [ ] add a button to copy the entire ticket page as markdown
- [ ] rewrite the extension in [plasmo](https://github.com/PlasmoHQ/plasmo) or [wxt](https://github.com/wxt-dev/wxt) for cross-browser compatibility

## License

MIT
