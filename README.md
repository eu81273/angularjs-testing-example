AngularJS 테스트 예제
================


이 프로젝트는 마이크로소프트웨어 AngularJS 실전 강의를 위한 예제입니다.

카르마(karma) 기반의 Unit 테스트 및 E2E 테스트 환경 구축되어 있는 프로젝트입니다.

AngularJS Seed 를 기반으로 제작되었고, 윈도우 + 크롬만 고려되었습니다.




## Directory Layout

    app/                    --> [모든 파일이 담겨진 최상위 폴더]
      web-server-start.bat  --> 웹서버 실행 배치 파일
      css/                  --> [css 폴더]
        app.css             --> 기본 스타일시트 파일
      img/                  --> [image 폴더]
      index.html            --> index 파일 메인 HTML 페이지)
      js/                   --> [javascript 폴더]
        app.js              --> 어플리케이션 모듈
        controllers.js      --> 컨트롤러 모듈
        directives.js       --> 사용자 지시자 모듈
        filters.js          --> 사용자 필터 모듈
        services.js         --> 사용자 서비스 모듈
      lib/                  --> angular 와 3rd party 라이브러리 폴더
        angular/            --> [angular] 폴더
          angular.js        --> 최신 angular js
          angular.min.js    --> 최신 minified angular js
          angular-*.js      --> 추가적인 angular modules
          version.txt       --> version number
      partials/             --> AgularJS 뷰 템플릿 (partial html templates)
        partial1.html       --> ng-view에 출력디
        partial2.html

    config/karma.conf.js        --> config file for running unit tests with Karma
    config/karma-e2e.conf.js    --> config file for running e2e tests with Karma

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.bat      --> runs end-to-end tests with Karma (windows)
      test.bat          --> autotests unit tests with Karma (windows)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services


## Contact

[http://programmingsummaries.tistory.com](http://programmingsummaries.tistory.com)


## License

The MIT License.

Copyright ⓒ 2013 안재하.






















