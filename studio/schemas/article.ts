const articleSchema = {
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'intro', type: 'text', title: 'Intro' },
    { name: 'publishedAt', type: 'datetime', title: 'Published at' },
  ],
}

export default articleSchema
