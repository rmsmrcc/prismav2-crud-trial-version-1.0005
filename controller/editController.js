const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient();

exports.getEdit = async (req, res) => {
  try {
    const student = await prisma.Student_Info.findUnique({ where: { id: req.params.id } });
    res.render('edit', { student });
  } catch (error) {
    console.log(error);
  }
}
exports.postEdit = async (req, res) => {
  const { firstname,middlename,lastname,address,country,region,city,zipcode,gender,birthdate,civilstatus,hobbies,keya,keyb,createdAT,updatedAT, } = req.body;
  const { id } = req.params;
  try {
    const updatedStudent = await prisma.student_Info.update({
      where: { id: id },
      data: {
        firstname,
        middlename,
        lastname,
        address,
        country,
        region,
        city,
        zipcode,
        gender,
        birthdate,
        civilstatus,
        hobbies,
        keya,
        keyb,
        createdAT,
        updatedAT,
      },
    });
    const student = await prisma.student_Info.findUnique({ where: { id: id } });
    res.redirect('/view/' + id);
  } catch (error) {
    console.log(error);
  }
};

