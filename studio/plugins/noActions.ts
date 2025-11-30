import { definePlugin } from 'sanity'

export default definePlugin({
  name: 'no-actions',
  resolveDocumentActions: () => () => [],
})
