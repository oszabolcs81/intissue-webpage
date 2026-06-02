(function () {
  var p = window.location.search.match(/[?&]p=([^&]+)/);
  if (p) {
    var decoded = decodeURIComponent(p[1]);
    // Allow only safe URL path characters; reject anything else to prevent open redirect
    if (decoded === '' || /^\/[a-zA-Z0-9/_.~-]*$/.test(decoded)) {
      var safePath = decoded || '/';
      window.history.replaceState(
        null,
        null,
        safePath +
          window.location.search.replace(/[?&]p=[^&]+/, '').replace(/^&/, '?') +
          window.location.hash
      );
    }
  }
})();
