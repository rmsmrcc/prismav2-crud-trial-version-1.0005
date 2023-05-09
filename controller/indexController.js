var express = require('express');
const { PrismaClient } = require("@prisma/client")
var prisma = new PrismaClient()

exports.getIndex = async (req, res) => {
    try {
        const students = await prisma.Student_Info.findMany();
        res.render('index', { title: 'Express', students });
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
};

