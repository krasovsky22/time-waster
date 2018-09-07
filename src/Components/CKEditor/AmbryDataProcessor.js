import HtmlDataProcessor from '@ckeditor/ckeditor5-engine/src/dataprocessor/htmldataprocessor'

/**
 * This data processor implementation uses GitHub Flavored Markdown as input/output data.
 *
 * See the {@glink features/markdown Markdown output} guide to learn more on how to enable it.
 *
 * @implements module:engine/dataprocessor/dataprocessor~DataProcessor
 */
export default class AmbryDataProcessor {
  constructor() {
    /**
     * HTML data processor used to process HTML produced by the Markdown-to-HTML converter and the other way.
     *
     * @private
     * @member {module:engine/dataprocessor/htmldataprocessor~HtmlDataProcessor}
     */
    this._htmlDP = new HtmlDataProcessor()
  }

  /**
   * Converts the provided Markdown string to view tree.
   *
   * @param {String} data A Markdown string.
   * @returns {module:engine/view/documentfragment~DocumentFragment} The converted view element.
   */
  toView(data) {
    // const html = marked.parse(data, {
    //   gfm: true,
    //   breaks: true,
    //   tables: true,
    //   xhtml: true,
    //   renderer: new GFMRenderer(),
    // })
    console.log('setting Data', data)

    return this._htmlDP.toView(data)
  }

  /**
   * Converts the provided {@link module:engine/view/documentfragment~DocumentFragment} to data format &mdash; in this
   * case to a Markdown string.
   *
   * @param {module:engine/view/documentfragment~DocumentFragment} viewFragment
   * @returns {String} Markdown string.
   */
  toData(viewFragment) {
    const html = this._htmlDP.toData(viewFragment)
    console.log('html!!!!!!!!!!!', html)
    return html
    //return toMarkdown(html, { gfm: true, converters })
  }
}
