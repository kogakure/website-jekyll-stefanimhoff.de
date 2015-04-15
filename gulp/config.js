var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var production        = 'build/production';
var srcAssets         = 'app/_assets';
var developmentAssets = 'build/assets';
var productionAssets  = 'build/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        // We're serving the src folder as well
        // for the sass sourcemap linking
        baseDir: [development, build, src]
      },
      port: 9999,
      ui: {
        port: 9997,
        weinre: {
          port: 9996
        }
      },
      open: false,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ],
      notify: {
        styles: [ 'display: hidden; padding: 5px 15px; font-family: sans-serif; position: fixed; font-size: 0.9em; z-index: 9999; left: 0px; top: 0px; border-bottom-right-radius: 5px; margin: 0px; color: white; text-align: center; background-color: rgb(27, 32, 50);' ]
      }
    },
    production: {
      server: {
        baseDir: [production]
      },
      port: 9998,
      open: false,
      notify: {
        styles: [ 'display: hidden; padding: 5px 15px; font-family: sans-serif; position: fixed; font-size: 0.9em; z-index: 9999; left: 0px; top: 0px; border-bottom-right-radius: 5px; margin: 0px; color: white; text-align: center; background-color: rgb(27, 32, 50);' ]
      }
    }
  },
  jekyll: {
    development: {
      src:    src,
      dest:   development,
      config: '_config.yml'
    },
    production: {
      src:    src,
      dest:   production,
      config: '_config.yml,_config.build.yml'
    }
  },
  sass: {
    src:  srcAssets + '/scss/**/*.{sass,scss}',
    dest: developmentAssets + '/css',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      lineNumbers: true,
      sourcemapPath: '../../_assets/scss'
    }
  },
  css: {
    src: developmentAssets + '/css/*.css'
  },
  base64: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets + '/css',
    options: {
      baseDir: build,
      extensions: ['png'],
      maxImageSize: 20 * 1024, // bytes
      debug: false
    }
  },
  watch: {
    jekyll: [
      '_config.yml',
      '_config.build.yml',
      'stopwords.txt',
      src + '/_data/**/*.{json,yml,csv}',
      src + '/_includes/**/*.{html,xml}',
      src + '/_layouts/*.html',
      src + '/_locales/*.yml',
      src + '/_plugins/*.rb',
      src + '/_posts/*.{markdown,md}',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    sass:    srcAssets + '/scss/**/*.{sass,scss}',
    scripts: srcAssets + '/javascripts/**/*.js',
    images:  srcAssets + '/images/**/*',
    svg:     'vectors/*.svg',
    loadcss: src + '/_bower_components/loadcss/loadCSS.js',
    criticalcss: developmentAssets + '/css/critical.css'
  },
  scripts: {
    src:  srcAssets + '/javascripts/application.js',
    dest: developmentAssets + '/js'
  },
  images: {
    src:  srcAssets + '/images/**/*',
    dest: developmentAssets + '/images'
  },
  webp: {
    src: productionAssets + '/images/**/*.{jpg,jpeg,png}',
    dest: productionAssets + '/images/',
    options: {}
  },
  gzip: {
    src: production + '/**/*.{html,xml,json,css,js}',
    dest: production,
    options: {}
  },
  combinemediaqueries: {
    src: developmentAssets + '/css/*.css',
    dest: developmentAssets+ '/css/',
    options: {
      log: true
    }
  },
  copyfonts: {
    development: {
      src:  srcAssets + '/fonts/*',
      dest: developmentAssets + '/fonts'
    },
    production: {
      src:  developmentAssets + '/fonts/*',
      dest: productionAssets + '/fonts'
    }
  },
  scsslint: {
    src: [
      srcAssets + '/scss/**/*.{sass,scss}',
      '!' + srcAssets + '/scss/helpers/_meyer-reset.scss'
    ]
  },
  jshint: {
    src: srcAssets + '/javascripts/*.js'
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'safari 5',
      'ie 8',
      'ie 9',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  },
  revision: {
    src: {
      assets: [
        productionAssets + '/css/*.css',
        productionAssets + '/js/*.js',
        productionAssets + '/images/**/*'
      ],
      base: production
    },
    dest: {
      assets: production,
      manifest: {
        name: 'manifest.json',
        path: productionAssets
      }
    }
  },
  collect: {
    src: [
      productionAssets + '/manifest.json',
      production + '/**/*.{html,xml,txt,json,css,js}',
      '!' + production + '/atom.xml'
    ],
    dest: production
  },
  delete: {
    src: [developmentAssets]
  },
  loadcss: {
    src: src + '/_bower_components/loadcss/loadCSS.js',
    dest: src + '/_includes/critical/',
    options: {}
  },
  criticalcss: {
    src: developmentAssets + '/css/critical.css',
    dest: src + '/_includes/critical/',
    options: {
      keepSpecialComments: 0
    }
  },
  optimize: {
    css: {
      src:  developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      options: {
        keepSpecialComments: 0
      }
    },
    js: {
      src:  developmentAssets + '/js/*.js',
      dest: productionAssets + '/js/',
      options: {}
    },
    images: {
      src:  developmentAssets + '/images/**/*.{jpg,jpeg,png,gif}',
      dest: productionAssets + '/images/',
      options: {
        optimizationLevel: 3,
        progressive: true,
        interlaced: true
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      options: {
        collapseWhitespace: true,
        conservativeCollapse: true,
        removeComments: true,
        minifyJS: true,
        minifyCSS: true
      }
    }
  },
  browserify: {
    // Enable source maps
    debug: true,
    // Additional file extensions to make optional
    extensions: ['.coffee', '.hbs'],
    // A separate bundle will be generated for each
    // bundle config in the list below
    bundleConfigs: [{
      entries:    './' + srcAssets + '/javascripts/application.js',
      dest:       developmentAssets + '/js',
      outputName: 'application.js'
    }]
  },
  rsync: {
    src: production + '/**',
    options: {
      destination: '~/root/to/my/server/',
      root: production,
      hostname: 'domain.com',
      username: 'username',
      incremental: true,
      progress: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      exclude: ['.DS_Store'],
      include: []
    }
  }
};
