--�����ڰ���
create database moviejsp;

grant select, insert, update, delete, create, drop, alter
on moviejsp.* to 'jspid'@'localhost' identified by 'jsppass';

grant select, insert, update, delete, create, drop, alter
on moviejsp.* to 'jspid'@'%' identified by 'jsppass';


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
    RANK VARCHAR(10)
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
    NUM int unsigned not null auto_increment PRIMARY KEY
	TITLE VARCHAR(50) NOT NULL,     
	SCORE FLOAT(2,1) NOT NULL,     
    CONTENT VARCHAR(1000),
    ID VARCHAR(20),
	MID VARCHAR(25),
    reg_date TIMESTAMP
); 


--�ܷ�Ű����
ALTER TABLE BOARD ADD CONSTRAINT FK_EMP FOREIGN KEY(ID) REFERENCES MEMBER(ID);
ALTER TABLE BOARD ADD CONSTRAINT FK_EMP FOREIGN KEY(MID) REFERENCES MOVIE(MID); 