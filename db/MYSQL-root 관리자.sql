create database moviejsp;

grant select, insert, update, delete, create, drop, alter
on moviejsp.* to 'jspid'@'localhost' identified by 'jsppass';

grant select, insert, update, delete, create, drop, alter
on moviejsp.* to 'jspid'@'%' identified by 'jsppass';