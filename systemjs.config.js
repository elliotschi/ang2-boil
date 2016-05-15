(global => {
  const map = {
    'app':                        'dist', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular'
  };

  const packages = {
    'app': { main: 'main.js', defaultExtension: 'js'},
    'rxjs': { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' }
  };

  const packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade'
  ];

  packageNames.forEach(pkgName => {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  const config = {
    map,
    packages
  };

  if (global.filterSystemConfig) {
    global.filterSystemConfig(config);
  }

  System.config(config);
})(this);