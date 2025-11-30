import S from 'sanity/desk'

export default function () {
  return S.list()
    .title('Content')
    .items([
      S.listItem().title('Articles').schemaType('article').child(S.documentTypeList('article')),
    ])
}
