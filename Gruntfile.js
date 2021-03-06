// Generated by CoffeeScript 1.7.1
"use strict";
module.exports = function(grunt) {
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
  require("time-grunt")(grunt);
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    yeoman: {
      app: "app",
      dist: "dist"
    },
    watch: {
      compass: {
        files: ["<%= yeoman.app %>/_sass/**/*.{scss,sass}"],
        tasks: ["compass:server", "autoprefixer:server"]
      },
      autoprefixer: {
        files: ["<%= yeoman.app %>/css/**/*.css"],
        tasks: ["copy:stageCss", "autoprefixer:server"]
      },
      coffee: {
        files: ["<%= yeoman.app %>/_src/**/*.coffee"],
        tasks: ["coffee:dist"]
      },
      coffeeTest: {
        files: ["test/spec/**/*.coffee"],
        tasks: ["coffee:test"]
      },
      jekyll: {
        files: ["<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}", "!<%= yeoman.app %>/_bower_components/**/*"],
        tasks: ["jekyll:server"]
      },
      livereload: {
        options: {
          livereload: "<%= connect.options.livereload %>"
        },
        files: [".jekyll/**/*.html", ".tmp/css/**/*.css", "{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js", "<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}"]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: "localhost"
      },
      livereload: {
        options: {
          open: {
            target: "http://<%= connect.options.hostname %>:<%= connect.options.port %>",
            appName: "chromium-browser"
          },
          base: [".tmp", ".jekyll", "<%= yeoman.app %>"]
        }
      },
      dist: {
        options: {
          open: true,
          base: ["<%= yeoman.dist %>"]
        }
      },
      test: {
        options: {
          base: [".tmp", ".jekyll", "test", "<%= yeoman.app %>"]
        }
      }
    },
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: ["<%= yeoman.dist %>/*", "!<%= yeoman.dist %>/.git*"]
          }
        ]
      },
      server: [".tmp", ".jekyll"]
    },
    compass: {
      options: {
        bundleExec: true,
        sassDir: "<%= yeoman.app %>/_sass",
        cssDir: ".tmp/css",
        imagesDir: "<%= yeoman.app %>/img",
        javascriptsDir: "<%= yeoman.app %>/js",
        relativeAssets: false,
        httpImagesPath: "/img",
        httpGeneratedImagesPath: "/img/generated",
        outputStyle: "expanded",
        raw: "extensions_dir = \"<%= yeoman.app %>/_bower_components\"\n"
      },
      dist: {
        options: {
          generatedImagesDir: "<%= yeoman.dist %>/img/generated"
        }
      },
      server: {
        options: {
          debugInfo: true,
          generatedImagesDir: ".tmp/img/generated"
        }
      }
    },
    autoprefixer: {
      options: {
        browsers: ["last 2 versions"]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.dist %>/css",
            src: "**/*.css",
            dest: "<%= yeoman.dist %>/css"
          }
        ]
      },
      server: {
        files: [
          {
            expand: true,
            cwd: ".tmp/css",
            src: "**/*.css",
            dest: ".tmp/css"
          }
        ]
      }
    },
    coffee: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.app %>/_src",
            src: "**/*.coffee",
            dest: ".tmp/js",
            ext: ".js"
          }
        ]
      },
      test: {
        files: [
          {
            expand: true,
            cwd: "test/spec",
            src: "**/*.coffee",
            dest: ".tmp/spec",
            ext: ".js"
          }
        ]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: "_config.yml,_config.build.yml",
        src: "<%= yeoman.app %>"
      },
      dist: {
        options: {
          dest: "<%= yeoman.dist %>"
        }
      },
      server: {
        options: {
          config: "_config.yml",
          dest: ".jekyll"
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: "<%= yeoman.dist %>"
      },
      html: "<%= yeoman.dist %>/index.html"
    },
    usemin: {
      options: {
        assetsDirs: "<%= yeoman.dist %>"
      },
      html: ["<%= yeoman.dist %>/**/*.html"],
      css: ["<%= yeoman.dist %>/css/**/*.css"]
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.dist %>",
            src: "**/*.html",
            dest: "<%= yeoman.dist %>"
          }
        ]
      }
    },
    concat: {},
    uglify: {},
    cssmin: {
      dist: {
        options: {
          check: "gzip"
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.dist %>",
            src: "**/*.{jpg,jpeg,png}",
            dest: "<%= yeoman.dist %>"
          }
        ]
      }
    },
    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: "<%= yeoman.dist %>",
            src: "**/*.svg",
            dest: "<%= yeoman.dist %>"
          }
        ]
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: "<%= yeoman.app %>",
            src: ["img/**/*", "fonts/**/*", "!**/_*{,/**}", "_bower_components/jquery/jquery.js", "favicon.ico", "apple-touch*.png"],
            dest: "<%= yeoman.dist %>"
          }
        ]
      },
      stageCss: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: "<%= yeoman.app %>/css",
            src: "**/*.css",
            dest: ".tmp/css"
          }
        ]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [
          {
            src: ["<%= yeoman.dist %>/js/**/*.js", "<%= yeoman.dist %>/css/**/*.css", "<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}", "<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}"]
          }
        ]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: "git@github.com:speed-of-light/speed-of-light.github.io.git",
          branch: "master",
          commit: true,
          push: true
        }
      }
    },
    coffeelint: {
      options: {
        max_line_length: {
          level: "ignore"
        }
      },
      check: ["<%= yeoman.app %>/_src/*.coffee"]
    },
    jshint: {
      options: {
        jshintrc: ".jshintrc",
        reporter: require("jshint-stylish")
      },
      all: ["Gruntfile.js", "<%= yeoman.app %>/js/**/*.js", "test/spec/**/*.js"]
    },
    csslint: {
      options: {
        csslintrc: ".csslintrc"
      },
      check: {
        src: ["<%= yeoman.app %>/css/**/*.css", "<%= yeoman.app %>/_sass/**/*.scss"]
      }
    },
    concurrent: {
      server: ["compass:server", "coffee:dist", "copy:stageCss", "jekyll:server"],
      dist: ["compass:dist", "coffee:dist", "copy:dist"]
    },
    webshot: {
      homepage: {
        options: {
          siteType: "url",
          site: "http://localhost:9000",
          savePath: "<%= yeoman.app %>/img/snapshots/shot_<%= grunt.template.today('yy_mm_dd_TT') %>.png",
          windowSize: {
            width: 1024,
            height: 768
          },
          shotSize: {
            width: 800,
            height: 600
          }
        }
      }
    }
  });
  grunt.registerTask("serve", function(target) {
    if (target === "dist") {
      return grunt.task.run(["build", "connect:dist:keepalive"]);
    }
    grunt.task.run(["clean:server", "concurrent:server", "autoprefixer:server", "connect:livereload", "watch"]);
  });
  grunt.registerTask("server", function() {
    grunt.log.warn("The `server` task has been deprecated. Use `grunt serve` to start a server.");
    grunt.task.run(["serve"]);
  });
  grunt.registerTask("test", []);
  grunt.registerTask("check", ["clean:server", "jekyll:check", "compass:server", "coffeelint:check", "coffee:dist", "jshint:all", "csslint:check"]);
  grunt.registerTask("build", ["clean", "jekyll:dist", "concurrent:dist", "useminPrepare", "concat", "autoprefixer:dist", "cssmin", "uglify", "imagemin", "svgmin", "filerev", "usemin", "htmlmin"]);
  grunt.registerTask("fake_deploy", ["webshot:homepage", "check", "test", "build"]);
  grunt.registerTask("deploy", ["webshot:homepage", "check", "test", "build", "buildcontrol"]);
  grunt.registerTask("default", ["check", "test", "build"]);
};