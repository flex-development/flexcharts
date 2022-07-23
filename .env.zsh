# ENVIRONMENT VARIABLES - ZSH
#
# References:
#
# - https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/dotenv
# - https://github.com/storybookjs/builder-vite/issues/282

BROWSERSLIST_CONFIG=.browserslistrc
FORCE_COLOR=3
NODE_NO_WARNINGS=1
NODE_OPTIONS='--es-module-specifier-resolution=node --max-old-space-size=6144'
PROJECT_CWD=$(node -e "console.log(path.resolve('.'))")
TS_NODE_PROJECT=tsconfig.tsnode.json

if [[ -f $PROJECT_CWD/node_modules/ts-node/esm.mjs ]]; then
  NODE_OPTIONS="$NODE_OPTIONS --loader=$PROJECT_CWD/loader"
fi
