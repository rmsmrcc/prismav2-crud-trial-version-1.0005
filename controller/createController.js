const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient();

exports.getCreate = (req, res) => {
    res.render('create');
}
exports.postCreate = async (req, res) => {
    try {
        const {
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
        } = req.body;

        const student = await prisma.Student_Info.create({
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

        console.log('Created student record successfully');
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
    res.redirect('home');
};
