// When a new version of GeoWave is released, update the previous version to load from S3 and add the new version to the top of the list.

var versions = {
  '1.0.0': 'https://locationtech.github.io/geowave/%%page%%',
  '0.9.8': 'http://s3.amazonaws.com/geowave/0.9.8/docs/%%page%%',
  '0.9.7': 'http://s3.amazonaws.com/geowave/0.9.7/docs/%%page%%',
  '0.9.6': 'http://s3.amazonaws.com/geowave/0.9.6/docs/%%page%%',
  '0.9.5': 'http://s3.amazonaws.com/geowave/0.9.5/docs/%%page%%',
  '0.9.4': 'http://s3.amazonaws.com/geowave/0.9.4/docs/%%page%%',
  '0.9.3': 'http://s3.amazonaws.com/geowave/0.9.3/docs/%%page%%',
  '0.9.2.1': 'http://locationtech.github.io/geowave/previous-versions/0.9.2.1/documentation.html',
  '0.9.1': 'http://locationtech.github.io/geowave/previous-versions/0.9.1/documentation.html',
};

$(document).ready (function () {
  var path = window.location.pathname;
  var currentPage = "index.html";
  if (path.endsWith(".html")) {
    var currentPage = path.split("/").pop();
  }
  var currentVersion = $('#current-version');
  var latest = true;
  if (currentVersion !== null) {
    currentVersion.text('Version ' + geowave_version);
    if (geowave_version in versions) {
      latest = false;
    }
  }
  
  var versionContents = function(name) {
    if (name === null) {
      if (latest) {
      	return "<b>Latest Snapshot</b>";
      } else {
        return "Latest Snapshot";
      }
    } else if (!latest && name == geowave_version) {
      return "<b>Version " + name + "</b>";
    } else {
      return "Version " + name;
    }
  }
  
  var versionMenu = $('#version-menu');
  if (versionMenu !== null) {
    versionMenu.append('<a class="dropdown-item" href="https://locationtech.github.io/geowave/latest/' + currentPage + '">' + versionContents(null) + '</a>');
  	for (var version in versions) {
      versionMenu.append('<a class="dropdown-item" href="' + versions[version].replace("%%page%%", currentPage) + '">' + versionContents(version) + '</a>');
    }
    versionMenu.append('<hr class="my-1">');
    versionMenu.append('<a class="dropdown-item" href="packages.html">Packages</a>');
  }
});