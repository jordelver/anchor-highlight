# Anchor Highlight

Do you want to link directly to an anchor on a web page?

Are you fed up of having to dig around in the page source to find them?

Anchor Highlight is a bookmarklet to highlight all anchors on a page which only have a name attribute i.e. are not actual hyperlinks.

This allows the full URL of the anchor to be easily copied and pasted. Think of the possibilities!

## Screenshot

![](https://raw.github.com/jordelver/anchor-highlight/master/screenshot.png)

## Install

Create a new bookmark on your bookmarks bar and change the URL to this

    javascript:(function()%7Bvar%20e=function()%7Bvar%20e=window.location.href,t=function()%7Bvar%20e=document.querySelectorAll(%22a.marker%22);for(var%20t=0;t%3Ce.length;++t)%7Bvar%20n=e[t];n.parentNode.removeChild(n)%7D%7D,n=function()%7Bvar%20e=document.querySelectorAll(%22a[name]%22);for(var%20t=0;t%3Ce.length;++t)%7Bvar%20n=e[t];if(n.href==%22%22)%7Bvar%20r=s(n);n.parentNode.insertBefore(r,n.nextSibling)%7D%7D%7D,r=function(e)%7Breturn%22%23%22+e.name%7D,i=function(t)%7Breturn%20e+t%7D,s=function(e)%7Bvar%20t=r(e),n=document.createElement(%22a%22);return%20n.className=%22marker%22,n.innerHTML=r(e),n.href=i(t),n%7D,o=function()%7Bvar%20e=%22a.marker%7Bbackground:%20red;box-shadow:%200%202px%20%23cc0000;border-radius:%208px;padding:%204px%206px%202px%206px;margin-left:%203px;font-family:%20Helvetica,%20Arial,%20sans-serif;font-size:%2012px;color:%20%23FFF0F5;text-decoration:%20none;%7D%22,t=document.createElement(%22style%22);t.appendChild(document.createTextNode(e)),document.body.appendChild(t)%7D,u=function()%7Bo(),t(),n()%7D;return%7Bhighlight:u%7D%7D();e.highlight()%7D)();

## Building (brace yourself)

Compresses, prepends with `javascript:` and URL encodes

    uglifyjs bookmarklet.js | sed -e 's/^/javascript:/' | ruby -r 'open-uri' -e "puts URI::encode(STDIN.read.chomp)" > bookmarklet.min.js

    cat bookmarklet.min.js | wc -c
    1093

## Thanks!

* [UglifyJS](https://github.com/mishoo/UglifyJS)  
  Compression/minification for JavaScript

