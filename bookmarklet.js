(function(){

  var AnchorHighlight = (function(){

    var baseUrl = window.location.href;

    var removeExistingMarkers = function() {
      var previouslyAddAnchors = document.querySelectorAll('a.marker');
      for(var i = 0; i < previouslyAddAnchors.length; ++i) {
        var node = previouslyAddAnchors[i];
        node.parentNode.removeChild(node);
      }
    };

    var addMarkers = function() {
      var anchors = document.querySelectorAll('a[name]');

      for(var i = 0; i < anchors.length; ++i) {
        var anchor = anchors[i];
        if(anchor.href == '') {

          var marker = markerForAnchor(anchor);
          anchor.parentNode.insertBefore(marker, anchor.nextSibling);
        }
      }
    };

    var anchorFragment = function(anchor) {
      return "#" + anchor.name;
    };

    var anchorUrl = function(fragment) {
      return baseUrl + fragment;
    };

    var markerForAnchor = function(anchor) {
      var fragment = anchorFragment(anchor);

      var marker = document.createElement("a");
      marker.className = "marker";
      marker.innerHTML = anchorFragment(anchor);
      marker.href = anchorUrl(fragment);

      return marker;
    };

    var addCssStyles = function() {
      var css = "a.marker{background: red;box-shadow: 0 2px #cc0000;border-radius: 8px;padding: 4px 6px 2px 6px;margin-left: 3px;font-family: Helvetica, Arial, sans-serif;font-size: 12px;color: #FFF0F5;text-decoration: none;}";
      var cssStyles = document.createElement('style');
      cssStyles.appendChild(document.createTextNode(css));
      document.body.appendChild(cssStyles);
    };

    var highlight = function() {
      addCssStyles();
      addMarkers();
    };

    return {
      highlight : highlight
    };
  })();

  AnchorHighlight.highlight();
}());
