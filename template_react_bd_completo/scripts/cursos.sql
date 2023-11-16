set datestyle to 'ISO,DMY';

create table if not exists cursos (
   cid serial,
   cnome varchar(2) not null,
   cdescr varchar(300) not null
); 

insert into cursos (cnome, cdescr) values ('CC', 'O curso de ciencia da computacao abrange desde a concepcao e analise de algoritmos ate o design e implementacao de sistemas de software e hardware.');
insert into cursos (cnome, cdescr) values ('MM', 'O curso de medicina abrange desde a anatomia e fisiologia do corpo humano ate o diagnostico e tratamento de diversas condicoes medicas.');
insert into cursos (cnome, cdescr) values ('AG', 'O curso de agronomia abrange desde o cultivo de plantas e a criacao de animais ate a gestao eficiente do solo, agua e outros recursos.');