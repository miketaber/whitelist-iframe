import {whiteListIframe} from 'pretty-text/sanitizer';

whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.youtube\.com\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/discordapp\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.facebook\.com\/plugins\/.+/i);
whiteListIframe(/^(https?:)?\/\/chatroll\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.chatroll\.com\/embed\/.+/i);
whiteListIframe(/^(https?:)?\/\/vimeo\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/www\.vimeo\.com\/.+/i);
