create database mystore;
use mystore;

-- table

-- status: 0: non-active, 1: activated, 2: suspended
create table user (id integer primary key auto_increment, firstName varchar(20), lastName varchar(20), email varchar(50), password varchar(100), phone varchar(20), status integer default 0, created_on timestamp default CURRENT_TIMESTAMP);
create table user_address(id integer primary key auto_increment, userId integer, line1 varchar(100), line2 varchar(100), city varchar(100), state varchar(100), zipCode integer, created_on timestamp default CURRENT_TIMESTAMP);

create table admins (id integer primary key auto_increment, firstName varchar(20), lastName varchar(20), email varchar(50), password varchar(100), phone varchar(20), created_on timestamp default CURRENT_TIMESTAMP);
insert into admins (firstName, lastName, email, password, phone) values ('admin', 'admin', 'admin@mystore.com', '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08', '+912342324');

create table category (id integer primary key auto_increment, title varchar(100), description varchar(1000), created_on timestamp default CURRENT_TIMESTAMP);
create table brand (id integer primary key auto_increment, title varchar(100), description varchar(1000), created_on timestamp default CURRENT_TIMESTAMP);
create table product (id integer primary key auto_increment, title varchar(100), description varchar(1000), price float, categoryId integer, brandId integer, imageFile varchar(100), created_on timestamp default CURRENT_TIMESTAMP);
create table productReviews (id integer primary key auto_increment, productId integer, userId integer, rating float, review varchar(1024), created_on timestamp default CURRENT_TIMESTAMP);

create table cart (id integer primary key auto_increment, userId integer, productId integer, price float, quantity float, created_on timestamp default CURRENT_TIMESTAMP);

-- orderState: 1: created, 2: in packaging, 3: dispatched, 4: out_for_delivery, 5: delivered, 6: cancelled
create table userOrder (id integer primary key auto_increment, userId integer, placedOn date, orderState integer, orderComments varchar(1024), totalAmount float, created_on timestamp default CURRENT_TIMESTAMP);
create table userOrderDetails (id integer primary key auto_increment, orderId integer, productId integer, price float, quantity float, totalAmount float, created_on timestamp default CURRENT_TIMESTAMP);


