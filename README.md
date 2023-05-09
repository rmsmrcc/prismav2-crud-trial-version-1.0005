# prismav2-gumagana

1. npm install -g express-generator@4 ejs prisma@latest -g nodemon caesar-encrypt
2. type express
3. npx prisma init
4. modify env file to your mongodb database url
5. modify the prisma file located @ /prisma/schema-prisma
6. change datasource db provider to mongodb
7. insert this after datasource db closing curly brace
model Student_Info {
  id          String   @id @default(auto()) @map("_id") @db.ObjectId
  firstname   String?
  middlename  String?
  lastname    String?
  address     String?
  country     String?
  region      String?
  city        String?
  zipcode     String?
  gender      String?
  birthdate   String?
  civilstatus String?
  hobbies     String?
  keya        String?
  keyb        String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @default(now()) @updatedAt
}

model User {
  id        String    @id @default(auto()) @map("_id") @db.ObjectId
  email     String    @unique
  password  String?
  createdAt DateTime  @default(now())
  userlevel String?   @default("User")
  shift     Int
}
8. prisma db push
9. prisma generate client
10. modify package.json scripts to 
11.  "scripts": {
    "start": "nodemon app.js"
  },
12. npm start
13. open browser type localhost:3000 for data table
14. localhost:3000/register for register account
15. localhost:3000/login to login account
