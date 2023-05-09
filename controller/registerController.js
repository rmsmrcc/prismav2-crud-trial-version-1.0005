const { encrypt } = require('caesar-encrypt') ;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    let shift = Math.floor((Math.random() * 26) + 1);
    const { email, password, userlevel } = req.body;
  
    const existingUser = await prisma.User.findUnique({
      where: {
        email: email,
      },
    });
  
    if (existingUser) {
      res.send("email already taken");
    } else {
      var pw = encrypt(password, shift);
      await prisma.user.create({
        data: {
          email: email,
          password: pw,
          userlevel: userlevel,
          shift: shift,
        },
      });
      console.log("entry added");
      console.log("User: " + email);
      console.log("Password: " + password);
      res.redirect('/');
    }
  };