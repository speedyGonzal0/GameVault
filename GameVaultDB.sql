use cse470_gamevault;

drop table if exists users, admin, games, orders, comments, reports;

create table users(
	name varchar(250) not null,
    email varchar(250) unique not null,
    password varchar(20) not null,
    userID varchar(10) unique not null,
    username varchar(200) not null,
    dob date not null,
    primary key(userID)    
);

create table admin(
	adminID varchar(10) unique not null,
    adminName varchar(200) not null,
    password varchar(20) not null,
    primary key(adminID)    
);

create table games(
	gameID int unique not null,
    name varchar(250) not null,
    primary key(gameID)
);

create table orders(
	orderID varchar(10) unique not null,
    orderDate date not null,
    expireDate date not null,
    orderUserID varchar(10) not null,
    orderGameID int not null,
    primary key(orderID),
    foreign key(orderUserID) references users(userID),
    foreign key(orderGameID) references games(gameID)
);

create table comments(
	commentID varchar(10) unique not null,
    commentDetails text not null,
    commentDate date not null,
    commentUserID varchar(10) not null,
    commentGameID int not null,
    primary key(commentID),
    foreign key(commentUserID) references users(userID),
    foreign key(commentGameID) references games(gameID)    
);


create table reports(
	reportID varchar(10) unique not null,
    reportDate date not null,
    details text,
    reportedUserID varchar(10) not null,
    reportedCommentID varchar(10),
    primary key(reportID),
    foreign key(reportedUserID) references users(userID),
    foreign key(reportedCommentID) references comments(commentID)
);

