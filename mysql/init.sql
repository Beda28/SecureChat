CREATE DATABASE IF NOT EXISTS SecureChat;
CREATE USER IF NOT EXISTS 'beda'@'%' IDENTIFIED WITH mysql_native_password BY 'adm!nro0t';
GRANT ALL PRIVILEGES ON SecureChat.* TO 'beda'@'%';
FLUSH PRIVILEGES;

use SecureChat;

CREATE TABLE IF NOT EXISTS users (
    uuid char(36) NOT NULL PRIMARY KEY,
    id varchar(10) NOT NULL UNIQUE,
    pw varchar(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS reqFriend (
    user_uuid char(36) NOT NULL,
    send_uuid char(36) NOT NULL,
    state ENUM('friend', 'send', 'block') default 'send',
    PRIMARY KEY (user_uuid, send_uuid)
);

CREATE TABLE IF NOT EXISTS friend (
    user_uuid char(36) NOT NULL,
    send_uuid char(36) NOT NULL,
    chat_uuid char(36) NOT NULL,
    PRIMARY KEY (user_uuid, send_uuid)
);

CREATE TABLE IF NOT EXISTS server (
    server_name varchar(10),
    server_uuid char(36) PRIMARY KEY,
    owner_uuid char(36) NOT NULL
);

CREATE TABLE IF NOT EXISTS server_users(
    server_uuid char(36) NOT NULL,
    user_uuid char(36) NOT NULL,
    PRIMARY KEY(server_uuid, user_uuid)
);

CREATE TABLE IF NOT EXISTS server_in_channel(
    server_uuid char(36) NOT NULL,
    channel_id varchar(20) NOT NULL,
    channel_uuid char(36) NOT NULL,
    PRIMARY KEY (server_uuid, channel_uuid)
);