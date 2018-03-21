import { compose, filter, map, test, assoc, toLower } from 'ramda'

export default (searchStringBuilder, searchExpression) => arrSearchData => {
  const re = new RegExp('\\b' + toLower(searchExpression) + '.*\\b')

  return compose(
    filter(doc => test(re, toLower(doc.search))),
    map(doc => assoc('search', searchStringBuilder(doc), doc))
  )(arrSearchData)
}

// sample call to searchDocs to search for the work 'family' in a array of resources.
// The regular expression will look within a search property string value
// for all occurances of any words that begins with the
// searchExpression.
// searchDocs(searchStringBuilder,'family')(resources)
