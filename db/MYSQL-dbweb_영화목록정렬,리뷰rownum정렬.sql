use moviejsp;

select * from movie;
insert into movie (mid,genre,mname,mname_e,rday,rtime,country,rank,director,cast)
values('31','�׼�,����,SF','�����:���Ǵ�Ʈ��','Avengers:InfinityWar','2018.04.25','149','�̱�','12�� ������','�ȼҴ� ���, �� ���','�ι�Ʈ �ٿ�� �ִϾ�,���� ��Ѹ�');

--���䰡 ���帹�� ��ȭ 4���� ���� (3��)
select * from board;
select mid,avg(score) as avgscore from board group by mid order by count(mid) desc limit 4; --���䰡 ���� ���� ��ȭ 4���� mid�� ����
select @RNUM:=@RNUM+1 as rownum, x.* from (select mid,avg(score) as avgscore from board group by mid order by count(mid) desc)x,(select @rnum:=0)r; --���䰡 ���� ���� ��ȭ 4���� mid�� ������ row��ȣ �ֱ�

select * from board order by reg_date desc; -- �ֱ��� ����� ����
select m.mname,b.* from board as b left join movie m on b.mid = m.mid order by reg_date desc;--��ȭ�̸�,�ֱٸ��� 


--��ȭ��� ����
select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid group by m.mid order by rday desc;
select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid group by m.mid order by m.rday desc;
select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid group by m.mid order by staravg desc;

select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid where m.mname like '%��%' or m.mname_e like '%��%' group by m.mid order by rday desc;

--������ ����
select b.*, m.mname from board as b left join movie as m on b.mid = m.mid order by reg_date desc;
select b.*, m.mname from board as b left join movie as m on b.mid = m.mid where m.mname like '%��%' order by reg_date desc limit 2;
select @RNUM:=@RNUM+1 as cnum, x.* from (select b.*, m.mname from board as b left join movie as m on b.mid = m.mid order by reg_date desc)x,(select @rnum:=0)r;
select count(*) from (select b.*, m.mname from board as b left join movie as m on b.mid = m.mid where b.id = 'ksy' and title like "" order by reg_date)x;

select b.*, m.mname from board as b left join movie as m on b.mid = m.mid where b.num=18;

select * from member;
delete from member where id='�����';

select m.mid,m.mname,avg(b.score) as staravg from board as b right join movie m on m.mid = b.mid group by m.mid; --��ȭid,��ȭ�̸�,���
select mid,count(mid) from board group by mid order by count(mid) desc;--���䰡���� ��ȭid
select mid,avg(score) from board group by mid;
--��ȭid,�̸� ���䰡������,�ֱٰ����� ����
select m.mid,m.mname,count(b.mid) from board as b left join movie as m on b.mid = m.mid group by b.mid order by count(b.mid) desc,m.rday desc;
--��ȭid,�̸� ���䰡������,�ֱٰ����� ���� ��ȣ�ο�
select @RNUM:=@RNUM+1 as cnum, x.* from (select m.mid,m.mname,count(b.mid) from board as b left join movie as m on b.mid = m.mid group by b.mid order by count(b.mid) desc,m.rday desc)x,(select @rnum:=0)r ;
select mid,avg(score) from board group by mid;--��ȭid,���
select @RNUM:=@RNUM+1 as cnum, x.* from (select b.*, m.mname from board as b left join movie as m on b.mid = m.mid order by reg_date desc)x,(select @rnum:=0)r; --����� �ֱٵ�ϼ�
select * from board where mid in (select mid,count(mid) from board group by mid order by count(mid) desc limit 4);

select @RNUM:=@RNUM+1 as cnum, x.* from (select m.mname,b.* from board as b left join movie as m on b.mid = m.mid order by m.rday desc)x,(select @rnum:=0)r ;
select * from board;
select m.mid,m.mname,avg(b.score) as avgscore,count(b.mid)from board as b left join movie m on b.mid = m.mid group by b.mid order by count(b.mid) desc limit 4;
select * from board order by reg_date desc;
select b.*,m.mname from board as b left join movie as m on b.mid=m.mid;

--1.���䰡���������� ������ ��ȭ�� ���̵�,����,����۰���
select mid,avg(score),count(mid) as avgscore from board group by mid order by count(mid) desc;
--2.��ȭ���̵� �ش��ϴ� ������� �ֱٵ�ϼ�
select * from board order by reg_date desc;

--����ƴپƤ��ƾƾƾƾ�!!!!���ƾƾƾƾ�!!
select r.*,x.* from (select b.*,m.mname from board as b left join movie as m on b.mid=m.mid) as r right join (select b.mid,avg(score) as avgscore,count(b.mid) as rcount from board as b group by b.mid) as x on r.mid=x.mid order by rcount desc, r.mname, reg_date desc ;

select b.*,m.* from board as b left join movie as m on b.mid=m.mid order by reg_date desc;
