// A minimal resolver that removes document actions to make the Studio read-only.
import type { DefaultDocumentNodeResolver } from 'sanity/desk'

export default function resolveDocumentActions() {
  return []
}
