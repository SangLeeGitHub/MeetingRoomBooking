# 회의실 예약 시스템


## 기본 시나리오 및 UI 구성

**로그인 -> 날짜 선택 -> 방 선택 -> 시간 선택 -> 예약/예약취소**

기본 UI 구성도

![기본 UI 구성도](https://netrol.com/img/bookingroomui.png)

* 날짜와 방이 선택되면 해당 날짜의 해당 방의 예약 상황을 보여준다.
	* 그린은 예약불가, 핑크는 내가 한 예약.
* 빈 곳 (배경 흰색)을 선택 하고 'Book' 을 하면 예약 완료.
* 핑크를 선택하고 'Cancel Book' 을 누르면 예약 취소.
* 로그인은 OAuth (트위터, 페북, 구글등) 를 이용함으로 별도의 회원 가입 불필요.


## 추가할지도 모르는 기능

* 방 추가 메뉴
* 회원 삭제 메뉴


## 사용할 기술 스텍

Frontend - [React JS](https://reactjs.org/)

Backend - [Express JS](https://expressjs.com/)

UI Library - [MATERIAL-UI](https://material-ui.com/)

DB - [SQLite](https://www.sqlite.org)
