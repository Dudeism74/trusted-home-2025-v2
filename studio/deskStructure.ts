import S from 'sanity/desk'

const deskStructure = () => {
  return S.list()
    .title('Content')
    .items([
      S.listItem().title('Articles').schemaType('article').child(S.documentTypeList('article')),
    ])
}

export default deskStructure
