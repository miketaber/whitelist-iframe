import {whiteListIframe} from 'pretty-text/sanitizer';

whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/chatroll\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.chatroll\.com\/embed\/.+/i);
