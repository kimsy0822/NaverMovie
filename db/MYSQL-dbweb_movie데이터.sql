use moviejsp;

--영화테이블생성
CREATE TABLE MOVIE(
	MID VARCHAR(25) NOT NULL PRIMARY KEY,
	GENRE VARCHAR(25) NOT NULL,
    MNAME VARCHAR(50) NOT NULL,     
	MNAME_E VARCHAR(50) NOT NULL,     
	RDAY DATE,     
	RTIME INT(6),     
	COUNTRY VARCHAR(10),
    RANK VARCHAR(10),
    DIRECTOR VARCHAR(20),
    CAST VARCHAR(100)
);

--회원테이블생성
CREATE TABLE MEMBER(   
	ID VARCHAR(20) PRIMARY KEY,
    PWD VARCHAR(25) NOT NULL,
	DNAME VARCHAR(30) NOT NULL,     
	EMAIL VARCHAR(50)  
); 

--게시판테이블생성
CREATE TABLE BOARD(   
    NUM int unsigned not null auto_increment PRIMARY KEY,
	TITLE VARCHAR(50) NOT NULL,     
	SCORE int(2) NOT NULL,     
    CONTENT VARCHAR(1000),
    ID VARCHAR(20),
	MID VARCHAR(25),
    reg_date TIMESTAMP
); 


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
           values('1','스릴러','나를 기억해','Marionette','2018.04.19','102','한국','청소년관람불가','이한욱','이유영,김희원,오하늬');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
           values('2','액션,SF,어드벤처','레디 플레이어 원','Ready Player One','2018.03.28','140','미국','12세 관람가',
           '스티븐 스필버그','마크 라이런스,사이먼 페그,올리비아 쿡');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
           values('3','액션,어드벤처,SF','퍼시픽 림: 업라이징','Pacific Rim: Uprising','2018.03.21','111','미국',
           '15세 관람가','스티븐 S. 드나이트','존 보예가,스콧 이스트우드,케일리 스패니');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('4','액션,어드벤처,SF','블랙 팬서','Black Panther','2018.02.14','135','미국',
           '12세 관람가','라이언 쿠글러','채드윅 보스만,마이클 B. 조던,루피타 뇽');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('5','액션,어드벤처,SF','램페이지','RAMPAGE','2018.04.12','107','미국',
           '12세 관람가','브래드 페이튼','드웨인 존슨,제프리 딘 모건,나오미 해리스');
           

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('6','드라마,스릴러','더 포스트','The Post','2018.02.28','116','미국',
           '12세 관람가','스티븐 스필버그','메릴 스트립,톰 행크스,밥 오덴커크');
           

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('7','액션, SF, 스릴러','메이즈 러너: 데스 큐어','Maze Runner: The Death Cure','2018.01.17','143','미국',
           '12세 관람가','웨스 볼','딜런 오브라이언,토마스 생스터,카야 스코델라리오');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('8','액션, SF, 스릴러','메이즈 러너','The Maze Runner','2014.09.18','113','미국',
           '12세 관람가','웨스 볼','딜런 오브라이언,토마스 생스터,카야 스코델라리오');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('9','액션, SF, 스릴러','메이즈 러너: 스코치 트라이얼','Maze Runner: Scorch Trials','2015.09.16','132','미국',
           '12세 관람가','웨스 볼','딜런 오브라이언,토마스 생스터,카야 스코델라리오');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('10','액션, 모험, 코미디, 판타지','캐리비안의 해적: 죽은 자는 말이 없다','Pirates of the Caribbean: Dead Men Tell No Tales',
     '2017.05.24','129','미국,오스트레일리아','12세 관람가','요아킴 뢰닝,에스펜 잔드베르크','조니 뎁,하비에르 바르뎀,제프리 러쉬');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('11','애니메이션, 코미디, 가족','미니언즈','Minions','2015.07.29','91','미국',
           '전체 관람가','카일 발다, 피에르 꼬팽','피에르 꼬팽, 마이클 키튼,산드라 블록');



insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('12','드라마','챔피언','champion','2018.05.01','108','한국',
           '12세 관람가','김용완','마동석,권율,한예리');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('13','액션,스릴러','부산행','TRAIN TO BUSAN','2016.07.20','118','한국',
           '15세 관람가','연상호','공유,정유미,마동석');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('14','판타지,드라마','신과함께-죄와 벌','Along With the Gods: The Two Worlds','2017.12.20','139','한국',
           '12세 관람가','김용화','하정우,차태현,주지훈');
           
 
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('15','드라마','터널','Tunnel','2016.08.10','126','한국','12세 관람가','김성훈','하정우,배두나,오달수');
                     
 
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('16','모험,코미디','조선명탐정: 흡혈괴마의 비밀','Detective K: Secret of the Living Dead','2018.02.08','120','한국','12세 관람가','김석윤','김명민,김지원,오달수');
                     
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('17','드라마,스릴러','판도라','Pandora','2016.12.07','136','한국','12세 관람가','박정우','김남길,김주현,정진영');
                     
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('18','액션,범죄,스릴러','분노의 질주: 더 익스트림','The Fast and The Furious','2017.04.12','136','미국,일본','15세 관람가','F. 게리 그레이','드웨인 존슨,빈 디젤,샤를리즈 테론');

                     
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('19','액션,모험,스릴러','매드맥스: 분노의 도로','Mad Max: Fury Road','2015.05.14','120','오스트레일리아','15세 관람가','조지 밀러','톰 하디,니콜라스 홀트,샤를리즈 테론');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('20','SF, 모험, 액션, 판타지','엑스맨: 데이즈 오브 퓨처 패스트','X-Men: Days of Future Past','2014.05.22','134','미국','12세 관람가','브라이언 싱어','휴 잭맨,제임스 맥어보이,마이클 패스벤더');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('21','코미디','바람 바람 바람','What a Man Wants','2018.04.05','100','한국','청소년 관람불가','브라이언 싱어','이성민,신하균,송지효');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('22','액션','공조','Confidential Assignment','2017.01.18','125','한국','15세 관람가','김성훈','현빈,유해진,김주혁');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('23','범죄','꾼','The Swindlers','2017.11.22','117','한국','15세 관람가','장창원','현빈,유지태,배성우');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('24','범죄,드라마','더킹','The King','2017.01.18','134','한국','15세 관람가','한재림','조인성,정우성,배성우');



insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('25','액션,드라마','강철비','Steel Rain','2017.12.14','139','한국','15세 관람가','양우석','곽도원,정우성,김갑수');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('26','범죄,액션','아수라','Asura : The City of Madness','2016.09.28','132','한국','청소년 관람불가','김성수','황정민,정우성,주지훈');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('27','멜로,로맨스','지금 만나러 갑니다','Be With You','2018.03.14 ','131','한국','12세 관람가','이장훈','소지섭,손예진,고창석');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('28','서사,드라마','덕혜옹주','The Last Princess','2016.08.03','127','한국','12세 관람가','허진호','박해일,손예진,라미란');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('29','드라마','남한산성','The Fortress','2017.10.03','139','한국','15세 관람가','황동혁','이병헌,김윤석,박해일');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('30','액션,범죄','마스터','Master','2016.12.21','143','한국','15세 관람가','조의석','이병헌,강동원,엄지원');

select * from movie;

