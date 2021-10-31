CREATE TABLE "messages"(
    message_id SERIAL PRIMARY KEY,
    first_name varchar(50),
    last_name varchar(50),
    title varchar(50),
    email varchar(100),
    para text
);