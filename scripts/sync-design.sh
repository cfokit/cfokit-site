#!/bin/sh
# Copies the CFOKit design system (theme, fonts, brand marks) from a checkout of cfokit/cfokit into
# src/design, and records the commit it came from. The site never edits these files: change the
# design system in cfokit/cfokit, then run this again.
#
#   npm run design:sync -- ../cfokit
set -eu
src="${1:?usage: npm run design:sync -- <path to a cfokit/cfokit checkout>}"
dest="$(dirname "$0")/../src/design"
commit="$(git -C "$src" rev-parse HEAD)"
rm -rf "$dest"
mkdir -p "$dest/fonts" "$dest/brand"
cp "$src/web/design/theme.css" "$dest/theme.css"
cp "$src/web/design/fonts/"*.woff2 "$dest/fonts/"
cp "$src/web/design/brand/"*.svg "$dest/brand/"
printf 'cfokit/cfokit %s\n' "$commit" > "$dest/SOURCE"
echo "Design system synced from cfokit/cfokit $commit"
