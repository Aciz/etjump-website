# Third-Party Licenses

This repository uses and distributes third-party software and assets. Full license texts are available in
[`licenses/`](licenses/).

## Fonts

The site self-hosts these fonts via Fontsource. They are licensed under the SIL Open Font License, Version 1.1.

| Font           | Copyright                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------- |
| Inter          | Copyright 2016 The Inter Project Authors (https://github.com/rsms/inter)                       |
| JetBrains Mono | Copyright 2020 The JetBrains Mono Project Authors (https://github.com/JetBrains/JetBrainsMono) |
| Saira          | Copyright 2020 The Saira Project Authors (https://github.com/Omnibus-Type/Saira)               |

License text: [`licenses/OFL-1.1.txt`](licenses/OFL-1.1.txt)

## Blender MD3 exporter

[`public/tutorials/sourcefiles/io_export_md3.zip`](public/tutorials/sourcefiles/io_export_md3.zip) contains the **MD3
(+shaders)** Blender exporter (`io_export_md3.py`), version 1.6.8 (2019-08-18).

- Authors: Photonic, Xembie, PhaethonH, Bob Holcomb, Damien McGinnes, Robert (Tr3B) Beckebans
- License: GNU General Public License, version 2 or later
- License text: [`licenses/GPL-2.0.txt`](licenses/GPL-2.0.txt)

The archive contains the exporter's source code.

## Site dependencies

These packages are used to build and render the site. Their license notices are included in their published npm
packages.

| Package                        | Version | License    |
| ------------------------------ | ------- | ---------- |
| Astro                          | 7.4.5   | MIT        |
| @astrojs/starlight             | 0.42.8  | MIT        |
| starlight-theme-galaxy         | 1.0.0   | MIT        |
| astro-expressive-code          | 0.44.3  | MIT        |
| @expressive-code/core          | 0.44.3  | MIT        |
| @expressive-code/plugin-frames | 0.44.3  | MIT        |
| shiki                          | 4.6.0   | MIT        |
| @astrojs/mdx                   | 8.1.2   | MIT        |
| @astrojs/sitemap               | 3.7.4   | MIT        |
| @astrojs/rss                   | 4.0.19  | MIT        |
| sharp                          | 0.35.5  | Apache-2.0 |

- MIT license text: [`licenses/MIT.txt`](licenses/MIT.txt)
- Apache-2.0 license text: [`licenses/Apache-2.0.txt`](licenses/Apache-2.0.txt)

### Build-only tooling

These development tools are not distributed in the built site.

| Package               | License    |
| --------------------- | ---------- |
| @astrojs/check        | MIT        |
| @eslint/js            | MIT        |
| eslint                | MIT        |
| eslint-plugin-astro   | MIT        |
| globals               | MIT        |
| prettier              | MIT        |
| prettier-plugin-astro | MIT        |
| typescript            | Apache-2.0 |
| typescript-eslint     | MIT        |
