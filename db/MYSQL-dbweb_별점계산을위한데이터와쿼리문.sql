use moviejsp;

insert into board(title,score,content,id,mid)
values('후기',8,'후기남겨요','아이린',9);
insert into board(title,score,content,id,mid)
values('후기써요',3,'노잼','아이린',10);
insert into board(title,score,content,id,mid)
values('후기다',10,'존잼','아이린',1);
insert into board(title,score,content,id,mid)
values('후기',7,'재미있네요','아이린',2);
insert into board(title,score,content,id,mid)
values('후기스',8,'ㅎㄱ','소크라테스',9);
insert into board(title,score,content,id,mid)
values('후기ㅋ',6,'soso','소크라테스',3);
insert into board(title,score,content,id,mid)
values('후기~~~',8,'후기남겨요','소크라테스',5);
insert into board(title,score,content,id,mid)
values('후기!!',1,'후기도사치','소크라테스',7);
insert into board(title,score,content,id,mid)
values('후기쓰겠다',2,'후기임','빠가사리',5);
insert into board(title,score,content,id,mid)
values('후기입니다',8,'후기씁니다','빠가사리',9);
insert into board(title,score,content,id,mid)
values('후기후기후기',3,'후기요','빠가사리',1);
select * from board;

select avg(score) as starscore from board where mid = 9; --리뷰테이블에서 mid가 9인 별점의 평균
select mid,avg(score) as staravg from board group by mid; --리뷰테이블에 mid별 별점의 평균
select mid,avg(score) as staravg ,count(mid) as rcount from board group by mid; --리뷰테이블에서 mid별 별점의 평균과 별점의 개수

select m.*,avg(b.score) as staravg from board as b right join movie m on m.mid = b.mid group by m.mid; --무비테이블+mid별 별점평균
select m.*,avg(b.score) as staravg from board as b right join movie m on m.mid = b.mid where m.mid = 3; --mid가 3인 무비테이블+별점평균

select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid group by m.mid; --무비테이블+mid별 별점평균+별점의개수
select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid where m.mid = 1; --mid가 1인 무비테이블+별점평균+별점의개수