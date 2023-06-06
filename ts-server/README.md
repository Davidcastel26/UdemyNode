to run the code use

```
node dist/app.js
```

to update the app.js run:

```
tsc

tsc --watch
```

to start with ORM in this proyect we are running with prisma:

```
npx prisma init --datasource-provider sqlserver
```

in this case provider will be which DATA Base we will connect to.
for mor refarance check the link below:

https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference#datasource

to run and connect prisma with data base run:

```
npx prisma migrate dev --name init
```