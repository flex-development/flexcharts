/// <reference types='vite/client' />

interface ImportMetaEnv extends Readonly<import('vite').ImportMetaEnv> {
  readonly CI: 'false' | 'true'
  readonly MODE: import('@flex-development/tutils').AppEnv
  readonly NODE_ENV: import('@flex-development/tutils').NodeEnv
  readonly STORYBOOK?: boolean
  readonly VITE_ROOT: string
  readonly VITE_USER_NODE_ENV?: ImportMetaEnv['NODE_ENV']
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
