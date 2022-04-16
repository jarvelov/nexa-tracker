INSERT INTO sensors (`name`) VALUES ('temperature');
INSERT INTO sensors (`name`) VALUES ('humidity');

INSERT INTO nodes (`name`, `nexaId`) VALUES ('Värmeröret', 1066);
INSERT INTO nodes (`name`, `nexaId`) VALUES ('Växthus', 1093);
INSERT INTO nodes (`name`, `nexaId`) VALUES ('Altan Vägg', 1096);

INSERT INTO trackers (`node`, `sensor`) VALUES (1, 1);
INSERT INTO trackers (`node`, `sensor`) VALUES (2, 1);
INSERT INTO trackers (`node`, `sensor`) VALUES (2, 2);
INSERT INTO trackers (`node`, `sensor`) VALUES (3, 1);
INSERT INTO trackers (`node`, `sensor`) VALUES (3, 2);

INSERT INTO sensors VALUES ('7066393a-8e41-433e-bc47-a96434005260', 'temperature', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO sensors VALUES ('7da338ed-be4c-4540-8668-0d5bebe26367', 'humidity', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

/* Nodes */
INSERT INTO nodes VALUES ('e7907978-88a1-4296-829a-f16d6ade0546', 'Värmeröret', 1066);
INSERT INTO nodes VALUES ('337845e5-5f0f-4156-a284-b2d4e4b90b9b', 'Växthus', 1093);
INSERT INTO nodes VALUES ('986699da-77e6-4b8d-a267-719db240cd20', 'Altan Vägg', 1096);

/* Temperature trackers */
INSERT INTO trackers VALUES ('id', 'e7907978-88a1-4296-829a-f16d6ade0546', '7066393a-8e41-433e-bc47-a96434005260', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trackers VALUES ('id', '337845e5-5f0f-4156-a284-b2d4e4b90b9b', '7066393a-8e41-433e-bc47-a96434005260', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO trackers VALUES ('id', '986699da-77e6-4b8d-a267-719db240cd20', '7066393a-8e41-433e-bc47-a96434005260', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);



INSERT INTO trackers VALUES (2, 1);
INSERT INTO trackers VALUES (2, 2);
INSERT INTO trackers VALUES (3, 1);
INSERT INTO trackers VALUES (3, 2);
