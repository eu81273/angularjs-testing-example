AngularJS 테스트 예제
================


이 프로젝트는 마이크로소프트웨어 AngularJS 실전 강의를 위한 예제입니다.

카르마(karma) 기반의 Unit 테스트 및 E2E 테스트 환경 구축되어 있어 쉽게 AngularJS 테스팅을 실습해볼 수 있습니다.

AngularJS Seed 를 기반으로 제작되었고, 편의상 윈도우 + 크롬만 고려되었습니다.




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
        partial1.html       --> ng-view에 출력될 페이지들..
        partial2.html

    config/karma.conf.js        --> 카르마 단위테스트 설정 파일
    config/karma-e2e.conf.js    --> 카르마 E2E테스트 설정 파일

    scripts/            --> 테스트를 쉽게 실행할 수 있도록 만들어놓은 배치파일 폴더
      e2e-test.bat      --> 카르마 E2E 테스트 실행
      test.bat          --> 카르마 단위 테스트 실행
      web-server.js     --> node.js에 기반의 간단한 웹서버

    test/               --> 테스트 관련 소스들과 라이브러리들 폴더
      e2e/              -->
        runner.html     --> E2E 테스트 러너
        scenarios.js    --> E2E 테스트 스펙
      lib/
        angular/                --> 앵귤러 테스팅 라이브러리
          angular-mocks.js      --> 테스트를 위한 특정 앵귤러 서비스의 Mock
          angular-scenario.js   --> 앵귤러 시나리오 테스트(E2E) 러너 라이브러리
          version.txt           --> 버전 파일
      unit/                     --> 
        controllersSpec.js      --> 컨트롤러 단위 테스트 스펙
        directivessSpec.js      --> 지시자 단위 테스트 스펙
        filtersSpec.js          --> 필터 단위 테스트 스펙
        servicesSpec.js         --> 서비스 단위 테스트 스펙


## Contact

[http://programmingsummaries.tistory.com](http://programmingsummaries.tistory.com)


## License

The MIT License.

Copyright ⓒ 2013 안재하.

