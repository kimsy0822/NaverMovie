use moviejsp;

select * from movie;
insert into movie (mid,genre,mname,mname_e,rday,rtime,country,rank,director,cast)
values('31','액션,모험,SF','어벤져스:인피니트워','Avengers:InfinityWar','2018.04.25','149','미국','12세 관람가','안소니 루소, 조 루소','로버트 다우니 주니어,조슈 브롤린');

--리뷰가 가장많은 영화 4개의 리뷰 (3개)
select * from board;
select mid,avg(score) as avgscore from board group by mid order by count(mid) desc limit 4; --리뷰가 가장 많은 영화 4개의 mid와 평점
select @RNUM:=@RNUM+1 as rownum, x.* from (select mid,avg(score) as avgscore from board group by mid order by count(mid) desc)x,(select @rnum:=0)r; --리뷰가 가장 많은 영화 4개의 mid와 평점에 row번호 주기

select * from board order by reg_date desc; -- 최근의 등록한 리뷰
select m.mname,b.* from board as b left join movie m on b.mid = m.mid order by reg_date desc;--영화이름,최근리뷰 


--영화목록 정렬
select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid group by m.mid order by rday desc;
select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid group by m.mid order by m.rday desc;
select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid group by m.mid order by staravg desc;

select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid where m.mname like '%메%' or m.mname_e like '%메%' group by m.mid order by rday desc;

--리뷰목록 정렬
select b.*, m.mname from board as b left join movie as m on b.mid = m.mid order by reg_date desc;
select b.*, m.mname from board as b left join movie as m on b.mid = m.mid where m.mname like '%램%' order by reg_date desc limit 2;
select @RNUM:=@RNUM+1 as cnum, x.* from (select b.*, m.mname from board as b left join movie as m on b.mid = m.mid order by reg_date desc)x,(select @rnum:=0)r;
select count(*) from (select b.*, m.mname from board as b left join movie as m on b.mid = m.mid where b.id = 'ksy' and title like "" order by reg_date)x;

select b.*, m.mname from board as b left join movie as m on b.mid = m.mid where b.num=18;

select * from member;
delete from member where id='가즈아';

select m.mid,m.mname,avg(b.score) as staravg from board as b right join movie m on m.mid = b.mid group by m.mid; --영화id,영화이름,평균
select mid,count(mid) from board group by mid order by count(mid) desc;--리뷰가많은 영화id
select mid,avg(score) from board group by mid;
--영화id,이름 리뷰가많은순,최근개봉순 정렬
select m.mid,m.mname,count(b.mid) from board as b left join movie as m on b.mid = m.mid group by b.mid order by count(b.mid) desc,m.rday desc;
--영화id,이름 리뷰가많은순,최근개봉순 정렬 번호부여
select @RNUM:=@RNUM+1 as cnum, x.* from (select m.mid,m.mname,count(b.mid) from board as b left join movie as m on b.mid = m.mid group by b.mid order by count(b.mid) desc,m.rday desc)x,(select @rnum:=0)r ;
select mid,avg(score) from board group by mid;--영화id,평균
select @RNUM:=@RNUM+1 as cnum, x.* from (select b.*, m.mname from board as b left join movie as m on b.mid = m.mid order by reg_date desc)x,(select @rnum:=0)r; --리뷰글 최근등록순
select * from board where mid in (select mid,count(mid) from board group by mid order by count(mid) desc limit 4);

select @RNUM:=@RNUM+1 as cnum, x.* from (select m.mname,b.* from board as b left join movie as m on b.mid = m.mid order by m.rday desc)x,(select @rnum:=0)r ;
select * from board;
select m.mid,m.mname,avg(b.score) as avgscore,count(b.mid)from board as b left join movie m on b.mid = m.mid group by b.mid order by count(b.mid) desc limit 4;
select * from board order by reg_date desc;
select b.*,m.mname from board as b left join movie as m on b.mid=m.mid;

--1.리뷰가많은순으로 정렬한 영화의 아이디,평점,리뷰글개수
select mid,avg(score),count(mid) as avgscore from board group by mid order by count(mid) desc;
--2.영화아이디에 해당하는 리뷰글을 최근등록순
select * from board order by reg_date desc;

--드디어됐다아ㅏ아아아아아!!!!으아아아아아!!
select r.*,x.* from (select b.*,m.mname from board as b left join movie as m on b.mid=m.mid) as r right join (select b.mid,avg(score) as avgscore,count(b.mid) as rcount from board as b group by b.mid) as x on r.mid=x.mid order by rcount desc, r.mname, reg_date desc ;

select b.*,m.* from board as b left join movie as m on b.mid=m.mid order by reg_date desc;
