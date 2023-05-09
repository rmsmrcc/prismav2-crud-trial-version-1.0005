const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.Student_Info.delete({ where: { id: id } });
    res.redirect('/home');
    console.log('Record has been deleted successfully')
  } catch (error) {
    console.log(error);
  }
};
