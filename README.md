# Default Sizing & Pinning

Small Sketch plugin to migrate **child layers of top-level frames** to post-[Athens](https://www.sketch.com/changelog/2025-1-2/) defaults:

- Sets width/height to Fixed if currently Relative.
- Sets pins to both Top and Left.

The plugin can be run for the current page, or for all pages in the document.

> [!IMPORTANT]
> It’s only necessary to run this on old documents first opened with Athens [v2025.1](https://www.sketch.com/changelog/athens/), [v2025.1.1](https://www.sketch.com/changelog/2025-1-1/), or [v2025.1.2](https://www.sketch.com/changelog/2025-1-2/).
> 
> In documents first opened with [v2025.1.3](https://www.sketch.com/changelog/2025-1-3/) or later, frame contents will already be migrated to these defaults.

## Installation

1. Download `default-sizing-pinning.sketchplugin.zip` from the [latest release page](https://github.com/sketch-hq/default-sizing-pinning-plugin/releases/latest) and extract the archive.
2. Double-click the extracted `.sketchplugin` file, or drag it into Sketch.

## Usage

1. In the **Plugins** menu, choose **Default Sizing and Pinning > Set top-level frame contents to defaults**.
2. Choose whether you want to run the plugin for **This Page** or **All Pages**. Or choose Cancel to do nothing.

You can also run the plugin by using the Command Bar (⌘K).
