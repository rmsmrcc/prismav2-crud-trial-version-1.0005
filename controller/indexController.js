var express = require('express');
const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()
const session = require('express-session');

exports.getIndex = async (req, res) => {
  // try {
  //     const students = await prisma.Student_Info.findMany();
  //     res.render('index', { title: 'Express', students });
  // } catch (error) {
  //     console.error(error);
  // } finally {
  //     await prisma.$disconnect();
  // }

  const userId = session.userId;
  if (!userId) {
    res.redirect('/');
  } else {
    try {
      const user = await prisma.User.findUnique({
        where: {
          id: userId,
        },
      });
      console.log(userId);
      const userlevel = user.userlevel; // assuming that the field for usertype in the User model is called "usertype"
      const allstudents = await prisma.Student_Info.findMany();
      const students = await prisma.Student_Info.findMany({
        where: {
          id: userId,
        },
      });

      const studentVariableName = userlevel === "Admin" ? allstudents : students;

      res.render('index', { students, userId, userlevel, allstudents, studentVariableName });

    } catch (err) {
      console.log(err);
      res.status(500).send('Internal server error');
    }
  }
};


