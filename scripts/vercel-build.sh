#!/bin/sh

# Vercel Build Workflow

NODE_OPTIONS='--es-module-specifier-resolution=node --loader=./loader --max-old-space-size=6144' yarn build:sb