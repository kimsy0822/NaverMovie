use moviejsp;

insert into board(title,score,content,id,mid)
values('�ı�',8,'�ıⳲ�ܿ�','���̸�',9);
insert into board(title,score,content,id,mid)
values('�ı���',3,'����','���̸�',10);
insert into board(title,score,content,id,mid)
values('�ı��',10,'����','���̸�',1);
insert into board(title,score,content,id,mid)
values('�ı�',7,'����ֳ׿�','���̸�',2);
insert into board(title,score,content,id,mid)
values('�ı⽺',8,'����','��ũ���׽�',9);
insert into board(title,score,content,id,mid)
values('�ı⤻',6,'soso','��ũ���׽�',3);
insert into board(title,score,content,id,mid)
values('�ı�~~~',8,'�ıⳲ�ܿ�','��ũ���׽�',5);
insert into board(title,score,content,id,mid)
values('�ı�!!',1,'�ı⵵��ġ','��ũ���׽�',7);
insert into board(title,score,content,id,mid)
values('�ı⾲�ڴ�',2,'�ı���','�����縮',5);
insert into board(title,score,content,id,mid)
values('�ı��Դϴ�',8,'�ı⾹�ϴ�','�����縮',9);
insert into board(title,score,content,id,mid)
values('�ı��ı��ı�',3,'�ı��','�����縮',1);
select * from board;

select avg(score) as starscore from board where mid = 9; --�������̺��� mid�� 9�� ������ ���
select mid,avg(score) as staravg from board group by mid; --�������̺� mid�� ������ ���
select mid,avg(score) as staravg ,count(mid) as rcount from board group by mid; --�������̺��� mid�� ������ ��հ� ������ ����

select m.*,avg(b.score) as staravg from board as b right join movie m on m.mid = b.mid group by m.mid; --�������̺�+mid�� �������
select m.*,avg(b.score) as staravg from board as b right join movie m on m.mid = b.mid where m.mid = 3; --mid�� 3�� �������̺�+�������

select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid group by m.mid; --�������̺�+mid�� �������+�����ǰ���
select m.*,avg(b.score) as staravg,count(b.mid) as rcount from board as b right join movie m on m.mid = b.mid where m.mid = 1; --mid�� 1�� �������̺�+�������+�����ǰ���