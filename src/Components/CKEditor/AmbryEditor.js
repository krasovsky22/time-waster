// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor'

import EssentialsPlugin from '@ckeditor/ckeditor5-essentials/src/essentials'
import AutoformatPlugin from '@ckeditor/ckeditor5-autoformat/src/autoformat'
import BoldPlugin from '@ckeditor/ckeditor5-basic-styles/src/bold'
import FontPlugin from '@ckeditor/ckeditor5-font/src/font'
import FontFamilyPlugin from '@ckeditor/ckeditor5-font/src/fontfamily'
import FontSizePlugin from '@ckeditor/ckeditor5-font/src/fontsize'
import ItalicPlugin from '@ckeditor/ckeditor5-basic-styles/src/italic'
import HighlightPlugin from '@ckeditor/ckeditor5-highlight/src/highlight'
import UnderlinePlugin from '@ckeditor/ckeditor5-basic-styles/src/underline'
import StrikethroughPlugin from '@ckeditor/ckeditor5-basic-styles/src/strikethrough'
import HeadingPlugin from '@ckeditor/ckeditor5-heading/src/heading'
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment'
import LinkPlugin from '@ckeditor/ckeditor5-link/src/link'
import ListPlugin from '@ckeditor/ckeditor5-list/src/list'
import ParagraphPlugin from '@ckeditor/ckeditor5-paragraph/src/paragraph'

import Image from '@ckeditor/ckeditor5-image/src/image'
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload'
import CKFinderUploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter'
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar'
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption'
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle'
import ImageTextAlternative from '@ckeditor/ckeditor5-image/src/imagetextalternative'

import Table from '@ckeditor/ckeditor5-table/src/table'
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar'
import AmbryDataProcessor from './AmbryDataProcessor'

function Markdown(editor) {
  editor.data.processor = new AmbryDataProcessor()
}

export default class AmbryEditor extends ClassicEditorBase {}

// Plugins to include in the build.
AmbryEditor.builtinPlugins = [
  Markdown,
  EssentialsPlugin,
  AutoformatPlugin,
  BoldPlugin,
  ItalicPlugin,
  UnderlinePlugin,
  StrikethroughPlugin,
  HeadingPlugin,
  LinkPlugin,
  ListPlugin,
  FontPlugin,
  FontFamilyPlugin,
  FontSizePlugin,
  ParagraphPlugin,
  HighlightPlugin,
  Alignment,

  Image,
  ImageToolbar,
  ImageCaption,
  ImageStyle,
  ImageUpload,
  CKFinderUploadAdapter,
  Table,
  TableToolbar,
]

AmbryEditor.defaultConfig = {
  toolbar: [
    'heading',
    '|',
    'bold',
    'italic',
    'underline',
    'strikethrough',
    'highlight',
    '|',
    'link',
    'bulletedList',
    'numberedList',
    'fontFamily',
    'fontSize',
    'alignment',
    'undo',
    'redo',
    '|',
    'imageUpload',
    'insertTable',
  ],

  image: {
    toolbar: ['imageTextAlternative', '|', 'imageStyle:full', 'imageStyle:side'],
  },
  table: {
    toolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
  },
  ckfinder: {
    // eslint-disable-next-line max-len
    uploadUrl: '/uploadimage/',
  },
  fontFamily: {
    options: [
      'default',
      'Arial, Helvetica, sans-serif',
      'Courier New, Courier, monospace',
      'Georgia, serif',
      'Lucida Sans Unicode, Lucida Grande, sans-serif',
      'Tahoma, Geneva, sans-serif',
      'Times New Roman, Times, serif',
      'Trebuchet MS, Helvetica, sans-serif',
      'Verdana, Geneva, sans-serif',
    ],
  },
  fontSize: {
    options: [9, 11, 13, 'default', 17, 19, 21],
  },
  styles: [
    // This option is equal to a situation where no style is applied.
    'full',

    // This represents an image aligned to the left.
    'alignLeft',

    // This represents an image aligned to the right.
    'alignRight',
  ],

  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en',
}
