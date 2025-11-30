import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './schemas'
import noActionsPlugin from './plugins/noActions'
import deskStructure from './deskStructure'

export default defineConfig({
  basePath: '/studio',
  projectId: 'yvqbkua0',
  dataset: 'production',
  title: 'Trusted Home Essentials Studio',
  plugins: [deskTool({ structure: deskStructure }), noActionsPlugin],
  schema: { types: schemas },
})
