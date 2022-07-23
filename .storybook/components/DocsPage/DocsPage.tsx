/**
 * @file Storybook Components - DocsPage
 * @module storybook/components/DocsPage/DocsPage
 */

import {
  ArgsTable,
  Description,
  DocsContext,
  Primary,
  PRIMARY_STORY,
  Stories,
  Subtitle,
  Title
} from '@storybook/addon-docs'
import type { Meta } from '@storybook/react'
import { useContext, useEffect, useState, type FC } from 'react'

/**
 * Custom Storybook docs page.
 *
 * @see https://storybook.js.org/docs/react/writing-docs/docs-page
 *
 * @return {JSX.Element} Docs page
 */
const DocsPage: FC = (): JSX.Element => {
  // story title
  const { title } = useContext(DocsContext)

  // path to story file
  const [file, setfile] = useState<string>()

  // story metadata
  const [meta, setmeta] = useState<Meta>()

  // docs-only page check
  const [docsonly, setdocsonly] = useState<boolean>(true)

  // update story file state
  useEffect(() => {
    /** @const {string} COMPONENTS - Path to root components directory */
    const COMPONENTS: string = `${import.meta.env.BASE_URL}src/components`

    /**
     * Regex used to find atomic design directory name and component name.
     *
     * @see {@link dir}
     * @see {@link name}
     *
     * @const {RegExp} titlereg
     */
    const titlereg: RegExp = /(atoms|molecules|templates|organisms)\/(\w+)/i

    // atomic design directory name and component name
    const [, dir = 'undefined', name = 'undefined'] = titlereg.exec(title) ?? []

    setfile(`${COMPONENTS}/${dir.toLowerCase()}/${name}/${name}.stories.tsx`)
  }, [title])

  // update story metadata state
  useEffect(() => {
    if (!file) return

    void (async (): Promise<void> => {
      try {
        setmeta(((await import(file)) as { default: Meta }).default)
      } catch (e: unknown) {
        console.error(
          `error loading story meta from ${file}: ${(e as Error).message}`
        )
      }
    })()
  }, [file, meta])

  // update docs-only page check
  useEffect(() => {
    if (!meta) return

    const { previewTabs } = (meta.parameters ?? {}) as {
      previewTabs?: { canvas?: { hidden: boolean } | null }
    }

    setdocsonly(
      previewTabs?.canvas === null || (previewTabs?.canvas?.hidden ?? false)
    )
  }, [meta])

  return (
    <>
      <Title />
      <Subtitle />
      <Description />
      {docsonly ? null : <Primary />}
      <ArgsTable story={PRIMARY_STORY} />
      {docsonly ? null : <Stories />}
    </>
  )
}

export default DocsPage
