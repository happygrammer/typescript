module.exports = function (grunt) {
  "use strict";
  var webpack = require('webpack');
  require('time-grunt')(grunt);
  var path = require('path');

  grunt.initConfig({
    /*
		클라이언트는 최적화와 관련해 번들링을 수행합니다.
    */
    webpack: {
      compile_client: {
        devtool: 'source-map', entry: ['./client/js'],
        output: {
          path: path.resolve(__dirname, 'dist/client/js'), filename: 'app.js'
        },
        
        module: {          
          loaders: [{
            test: /\.tsx?$/, loader: 'ts-loader',            
            options: {
              transpileOnly: true
            }
          }]
        },        
        plugins: [
          new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
          })
        ],
        resolve: { extensions: [".ts", ".js"] }
      }
    },
    /*
		서버는 번들링을 하지 않고 컴파일만 수행합니다.
    */
    ts: {
      compile_server: {
        files: [{
          src: ["server/**/*.ts", "!server/.baseDir.ts"],
          dest: "./dist"
        }],
        options: {
          module: "commonjs", target: "es6", sourceMap: false,
          options: {
            callback: function (ts) {
              // 콜백 작업
            }
          }
        }
      }
    },
    copy: {
      client_static: {
		/* 
			js 디렉터리만 제외하고 ./client가 포함하는 모든 파일을 복사합니다.
			expand : true이면 옵션을 확장해 cwd옵션을 사용할 수 있게 합니다.
            cwd : 작업할 소스들의 부모 디렉터리의 경로를 입력합니다.
        */

        files: [{ expand: true, cwd: "./client", src: ["**", "!**/js/**"], dest: "./dist/client" }]
      },
      server_template: {
        files: [{ expand: true, cwd: "./server/views", src: ["**"], dest: "./dist/server/views" }]
      }
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch', "browserSync"],
        options: { logConcurrentOutput: true }
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          nodeArgs: ['--inspect'], env: { PORT: '8080' }, delay: 1000, ignore: ['node_modules/**'],
          ext: 'js, ejs',
          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log("nodemon log : "+event.colour);
            });

            nodemon.on('config:update', function () {
              require('open')('http://localhost:8080');
            });

            nodemon.on('restart', function () {
              console.log("nodemon restart");
              setTimeout(function () {
                require('fs').writeFileSync('.rebooted', 'rebooted');
              }, 1000);
            });
          }
        }
      }
    },
    watch: {      
      client_webpack: {
        files: ["client/js/**/*.ts"],
        tasks: ["webpack"]
      },
      client_static: {
        files: ["client/**", "!client/js/**"],
        tasks: ["copy:client_static"]
      },
      /* 
         서버 코드나 공통 API(common 디렉터리)의 코드가 변경되면 
         ts 작업이 실행되도록 합니다.
      */
      server_ts: {
        files: ["server/**/*.ts", "common/**/*.ts", "!client/js/**/*.ts"],
        tasks: ["ts"]
      },
      /*  
          ejs 템플릿의 내용이 변경되면 서버 템플릿 복사 작업(copy:server-template)을
          수행합니다. 
          dist 디렉터리에 위치한 .ejs 파일은 작업 파일이 아니므로 
          변화 감지가 되지 않도록 설정합니다.
      */
      server_template: {
        files: ["**/*.ejs", "!dist/**/*.ejs"],
        tasks: ["copy:server_template"]
      }
    },
    browserSync: {
      files: [".rebooted"]
    }    
  });
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-contrib-copy");

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask("default", [
    "webpack",
    "ts",    // 서버 올릴 때 컴파일 작업 수행
    "copy", // 서버 올릴 때 한번만 복사 작업 수행
    "concurrent"
  ]);
};