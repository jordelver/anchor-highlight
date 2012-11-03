# Anchor Highlight

Do you want to link directly to an anchor on a web page?

Are you fed up of having to dig around in the page source to find them?

Anchor Highlight is a bookmarklet to highlight all anchors on a page which only have a name attribute i.e. are not actual hyperlinks.

This allows the full URL of the anchor to be easily copied and pasted. Think of the possibilities!

## Screenshot

![](https://raw.github.com/jordelver/anchor-highlight/master/screenshot.png)

## Install

Create a new bookmark on your bookmarks bar and change the URL to this

    javascript:(function(){var%20e=function(){var%20e=window.location.href,t=function(){var%20e=document.querySelectorAll(%22a.marker%22);for(var%20t=0;t%3Ce.length;++t){var%20n=e[t];n.parentNode.removeChild(n)}},n=function(){var%20e=document.querySelectorAll(%22a[name]%22);for(var%20t=0;t%3Ce.length;++t){var%20n=e[t];if(n.href==%22%22){var%20r=s(n);n.parentNode.insertBefore(r,n.nextSibling)}}},r=function(e){return%22%23%22+e.name},i=function(t){return%20e+t},s=function(e){var%20t=r(e),n=document.createElement(%22a%22);return%20n.className=%22marker%22,n.innerHTML=r(e),n.href=i(t),n},o=function(){var%20e=%22a.marker{background:%20red;box-shadow:%200%202px%20%23cc0000;border-radius:%208px;padding:%204px%206px%202px%206px;margin-left:%203px;font-family:%20Helvetica,%20Arial,%20sans-serif;font-size:%2012px;color:%20%23FFF0F5;text-decoration:%20none;}%22,t=document.createElement(%22style%22);t.appendChild(document.createTextNode(e)),document.body.appendChild(t)},u=function(){o(),n()};return{highlight:u}}();e.highlight()})();

