DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS habit_overview CASCADE;
DROP TABLE IF EXISTS habit_instance CASCADE;

-- Maybe user_id should be imported in from authentication table?
CREATE TABLE users(
    userid SERIAL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(1024) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY(userid)
);

CREATE TABLE habit_overview(
    habit_id SERIAL,
    habit VARCHAR NOT NULL,
    frequency VARCHAR NOT NULL,
    startdate DATE NOT NULL,
    enddate DATE NOT NULL,
    userid INT NOT NULL,
    PRIMARY KEY(habit_id),
    FOREIGN KEY (userid) REFERENCES users(userid)  
);

CREATE TABLE habit_instance(
    habit_id INT NOT NULL,
    FOREIGN KEY(habit_id) REFERENCES habit_overview(habit_id),
    date DATE,
    status BOOLEAN DEFAULT false
);

INSERT INTO users(username, password, email)
VALUES(
    'projectuser',
    'projectpass',
    'user@project.com'
);

INSERT INTO habit_overview (userid, habit, frequency, startdate, enddate)
SELECT users.userid, 'Morning exercise', 'Daily', '2020-09-07', '2020-11-07'
FROM users
WHERE users.userid = 1;

INSERT INTO habit_instance(habit_id, date, status)
SELECT habit_overview.habit_id, '2020-09-07', false
FROM habit_overview
WHERE habit_overview.habit_id = 1;