drop table if exists `measurements`;
drop table if exists `trackers`;
drop table if exists `sensors`;
drop table if exists `nodes`;

CREATE TABLE `sensors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `nodes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `nexaId` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `trackers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `node` int(11) NOT NULL,
  `sensor` int(11) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT FOREIGN KEY (node) REFERENCES nodes(id),
  CONSTRAINT FOREIGN KEY (sensor) REFERENCES sensors(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `measurements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `node` int(11) NOT NULL,
  `sensor` int(11) NOT NULL,
  `timestamp` datetime NOT NULL,
  `value` DECIMAL(8, 2) NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT FOREIGN KEY (node) REFERENCES nodes(id),
  CONSTRAINT FOREIGN KEY (sensor) REFERENCES sensors(id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
