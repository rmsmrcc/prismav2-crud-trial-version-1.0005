const {PrismaClient} = require("@prisma/client")
var prisma = new PrismaClient()

exports.getView = async(req,res) => {
  try {
    const student = await prisma.Student_Info.findUnique({ where: { id: req.params.id }});
    res.render('view', { student });
  } catch (error) {
    console.log(error);
  }
}