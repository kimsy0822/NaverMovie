use moviejsp;

--��ȭ���̺����
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

--ȸ�����̺����
CREATE TABLE MEMBER(   
	ID VARCHAR(20) PRIMARY KEY,
    PWD VARCHAR(25) NOT NULL,
	DNAME VARCHAR(30) NOT NULL,     
	EMAIL VARCHAR(50)  
); 

--�Խ������̺����
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
           values('1','������','���� �����','Marionette','2018.04.19','102','�ѱ�','û�ҳ�����Ұ�','���ѿ�','������,�����,���ϴ�');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
           values('2','�׼�,SF,��庥ó','���� �÷��̾� ��','Ready Player One','2018.03.28','140','�̱�','12�� ������',
           '��Ƽ�� ���ʹ���','��ũ ���̷���,���̸� ���,�ø���� ��');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
           values('3','�׼�,��庥ó,SF','�۽��� ��: ������¡','Pacific Rim: Uprising','2018.03.21','111','�̱�',
           '15�� ������','��Ƽ�� S. �峪��Ʈ','�� ������,���� �̽�Ʈ���,���ϸ� ���д�');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('4','�׼�,��庥ó,SF','�� �Ҽ�','Black Panther','2018.02.14','135','�̱�',
           '12�� ������','���̾� ��۷�','ä���� ������,����Ŭ B. ����,����Ÿ ��');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('5','�׼�,��庥ó,SF','��������','RAMPAGE','2018.04.12','107','�̱�',
           '12�� ������','�귡�� ����ư','����� ����,������ �� ���,������ �ظ���');
           

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('6','���,������','�� ����Ʈ','The Post','2018.02.28','116','�̱�',
           '12�� ������','��Ƽ�� ���ʹ���','�޸� ��Ʈ��,�� ��ũ��,�� ����Ŀũ');
           

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('7','�׼�, SF, ������','������ ����: ���� ť��','Maze Runner: The Death Cure','2018.01.17','143','�̱�',
           '12�� ������','���� ��','���� ������̾�,�丶�� ������,ī�� ���ڵ��󸮿�');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('8','�׼�, SF, ������','������ ����','The Maze Runner','2014.09.18','113','�̱�',
           '12�� ������','���� ��','���� ������̾�,�丶�� ������,ī�� ���ڵ��󸮿�');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('9','�׼�, SF, ������','������ ����: ����ġ Ʈ���̾�','Maze Runner: Scorch Trials','2015.09.16','132','�̱�',
           '12�� ������','���� ��','���� ������̾�,�丶�� ������,ī�� ���ڵ��󸮿�');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('10','�׼�, ����, �ڹ̵�, ��Ÿ��','ĳ������� ����: ���� �ڴ� ���� ����','Pirates of the Caribbean: Dead Men Tell No Tales',
     '2017.05.24','129','�̱�,����Ʈ���ϸ���','12�� ������','���Ŵ �ڴ�,������ �ܵ庣��ũ','���� ��,�Ϻ񿡸� �ٸ���,������ ����');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('11','�ִϸ��̼�, �ڹ̵�, ����','�̴Ͼ���','Minions','2015.07.29','91','�̱�',
           '��ü ������','ī�� �ߴ�, �ǿ��� ����','�ǿ��� ����, ����Ŭ Űư,���� ���');



insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('12','���','è�Ǿ�','champion','2018.05.01','108','�ѱ�',
           '12�� ������','����','������,����,�ѿ���');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('13','�׼�,������','�λ���','TRAIN TO BUSAN','2016.07.20','118','�ѱ�',
           '15�� ������','����ȣ','����,������,������');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('14','��Ÿ��,���','�Ű��Բ�-�˿� ��','Along With the Gods: The Two Worlds','2017.12.20','139','�ѱ�',
           '12�� ������','���ȭ','������,������,������');
           
 
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('15','���','�ͳ�','Tunnel','2016.08.10','126','�ѱ�','12�� ������','�輺��','������,��γ�,���޼�');
                     
 
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('16','����,�ڹ̵�','������Ž��: ���������� ���','Detective K: Secret of the Living Dead','2018.02.08','120','�ѱ�','12�� ������','�輮��','����,������,���޼�');
                     
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('17','���,������','�ǵ���','Pandora','2016.12.07','136','�ѱ�','12�� ������','������','�賲��,������,������');
                     
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('18','�׼�,����,������','�г��� ����: �� �ͽ�Ʈ��','The Fast and The Furious','2017.04.12','136','�̱�,�Ϻ�','15�� ������','F. �Ը� �׷���','����� ����,�� ����,�������� �׷�');

                     
insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('19','�׼�,����,������','�ŵ�ƽ�: �г��� ����','Mad Max: Fury Road','2015.05.14','120','����Ʈ���ϸ���','15�� ������','���� �з�','�� �ϵ�,���ݶ� ȦƮ,�������� �׷�');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('20','SF, ����, �׼�, ��Ÿ��','������: ������ ���� ǻó �н�Ʈ','X-Men: Days of Future Past','2014.05.22','134','�̱�','12�� ������','����̾� �̾�','�� ���,���ӽ� �ƾ��,����Ŭ �н�����');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('21','�ڹ̵�','�ٶ� �ٶ� �ٶ�','What a Man Wants','2018.04.05','100','�ѱ�','û�ҳ� �����Ұ�','����̾� �̾�','�̼���,���ϱ�,����ȿ');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('22','�׼�','����','Confidential Assignment','2017.01.18','125','�ѱ�','15�� ������','�輺��','����,������,������');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('23','����','��','The Swindlers','2017.11.22','117','�ѱ�','15�� ������','��â��','����,������,�輺��');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('24','����,���','��ŷ','The King','2017.01.18','134','�ѱ�','15�� ������','���縲','���μ�,���켺,�輺��');



insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('25','�׼�,���','��ö��','Steel Rain','2017.12.14','139','�ѱ�','15�� ������','��켮','������,���켺,�谩��');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('26','����,�׼�','�Ƽ���','Asura : The City of Madness','2016.09.28','132','�ѱ�','û�ҳ� �����Ұ�','�輺��','Ȳ����,���켺,������');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('27','���,�θǽ�','���� ������ ���ϴ�','Be With You','2018.03.14 ','131','�ѱ�','12�� ������','������','������,�տ���,��â��');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('28','����,���','��������','The Last Princess','2016.08.03','127','�ѱ�','12�� ������','����ȣ','������,�տ���,��̶�');


insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('29','���','���ѻ꼺','The Fortress','2017.10.03','139','�ѱ�','15�� ������','Ȳ����','�̺���,������,������');

insert into MOVIE(MID, GENRE, MNAME, MNAME_E, RDAY, RTIME, COUNTRY, RANK, DIRECTOR, CAST) 
     values('30','�׼�,����','������','Master','2016.12.21','143','�ѱ�','15�� ������','���Ǽ�','�̺���,������,������');

select * from movie;

