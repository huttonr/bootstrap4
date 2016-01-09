
Package.describe({
  name: 'huttonr:bootstrap4',
  summary: 'Modular, customizable Bootstrap 4.',
  version: '4.0.0_7',
  git: 'https://github.com/huttonr/bootstrap4',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use('isobuild:compiler-plugin@1.0.0');

  api.addFiles('check-settings.js', 'client');
});

Package.registerBuildPlugin({
  name: 'build-bootstrap4',
  use: [
    'underscore@1.0.4',
    'ecmascript@0.1.5',
    'babel-compiler@5.8.24_1',
    'huttonr:bootstrap4-assets@4.0.0_7'
  ],
  sources: [
    'plugin/bootstrap4.js'
  ],
  npmDependencies: {
    'node-sass': '3.3.3'
  }
});
