#!/bin/sh

# Vercel Ignored Build Step
#
# If the workflow exits with 0, build step will be skipped.
# If the workflow exits with 1 or greater, a new build will be issued.
#
# References:
#
# - https://vercel.com/docs/platform/projects#ignored-build-step

[ $(git rev-list --count HEAD) == 1 ] && exit 1

git diff HEAD^ HEAD --quiet \
  public \
  scripts/vercel-build.sh \
  scripts/vercel-ignored-build-step.sh \
  src \
  typings \
  .babel-plugin-macrosrc.json \
  .browserslistrc \
  .env.development \
  .env.production \
  .env.staging \
  .vercelignore \
  .vite.config.common.ts \
  .yarnrc.yml \
  loader.mjs \
  package.json \
  'tsconfig.*' \
  vercel.json \
  vitest.config.ts
