CREATE TABLE users (
	userID INTEGER,
	username VARCHAR(30),
	PASSWORD VARCHAR(30),
	role VARCHAR(30),
	firstName VARCHAR(30),
	lastName VARCHAR(30),
	dateJoined Date,
	picture byteA,
	PRIMARY KEY (userID)
);

CREATE TABLE tasks (
	taskID INTEGER,
	name VARCHAR(30),
	category VARCHAR(30),
	description VARCHAR(200),
	status VARCHAR(30),
	amountPaid NUMERIC(20,2),
	clientID INTEGER,
	providerID INTEGER
);

CREATE TABLE bankTransfers(
	bankID INTEGER,
	clientID INTEGER,
	providerID INTEGER,
	taskID INTEGER,
	amountPaid NUMERIC(20,2)
);

CREATE TABLE ratings(
	ratingsID INTEGER,
	clientID INTEGER,
	providerID INTEGER,
	feedback VARCHAR(30),
	ratings INTEGER
);

ALTER TABLE tasks ADD FOREIGN KEY (clientID) REFERENCES users(userID);
ALTER TABLE tasks ADD FOREIGN KEY (providerID) REFERENCES users(userID);

ALTER TABLE tasks ADD PRIMARY KEY (taskID);


ALTER TABLE banktransfers ADD FOREIGN KEY (clientID) REFERENCES users(userID);
ALTER TABLE banktransfers ADD FOREIGN KEY (providerID) REFERENCES users(userID);
ALTER TABLE banktransfers ADD FOREIGN KEY (taskID) REFERENCES tasks(taskID);


ALTER TABLE ratings ADD FOREIGN KEY (clientID) REFERENCES users(userID);
ALTER TABLE ratings ADD FOREIGN KEY (providerID) REFERENCES users(userID);

ALTER TABLE tasks ALTER COLUMN description TYPE VARCHAR(200);
	
	
INSERT INTO users (userID, username, PASSWORD, ROLE, firstName, lastName, dateJoined, picture)
	VALUES(1, 'sam@yahoo.com', 'samsam', 'client', 'sam', 'smith', '2020-03-20', null);

INSERT INTO users (userID, username, PASSWORD, ROLE, firstName, lastName, dateJoined, picture)
	VALUES(2, 'brit@yahoo.com', 'britbrit', 'provider', 'brit', 'lit', '2020-03-20', null);

INSERT INTO tasks (taskID, name, category, description, status, amountpaid, clientid,  providerid)
	VALUES (1, 'clean up laundry', 'laundry', 'wash my socks', 'not completed', 20.00, 1, 2);

INSERT INTO banktransfers (bankID, clientid, providerid, taskid, amountpaid)
	VALUES (1, 1, 2, 1, 20.00);

INSERT INTO ratings (ratingsid, clientid, providerid, feedback, ratings)
	VALUES (1, 1, 2, 'great job', 5);


