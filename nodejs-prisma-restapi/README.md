
In order to start a proyect with prisma follow the next steps:
--

run to start the proyect:
```
npm init -y
```
then we will start setting typescript:

```
npm install -D typescript

npm install -D ts-node

npm install -D nodemon
```

- then create tsconfig.json


- check tsconfig.json to review the configuration


if you would like to check the database we can use prisma

to start with ORM in this proyect we are running with prisma:

```
npx prisma init --datasource-provider sqlserver
```

in this case provider will be which DATA Base we will connect to.
for mor refarance check the link below:

https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#datasource

to run and connect prisma with data base run:

```
npx prisma migrate dev
```

```
npx prisma studio
```