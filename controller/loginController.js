const express = require('express');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { decrypt } = require('caesar-encrypt');

exports.getLogin = (req, res) => {
    res.render('login');
};
exports.postLogin = async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
        const user = await prisma.user.findUnique({
            where: { email }
        });

        if (user) {
            const decryptedpw = decrypt(user.password, user.shift);
            if (decryptedpw === password) {
                console.log(`logged in as user email-> ${email}, user password-> ${decryptedpw}, user encrypted pw -> ${user.password}`);
                res.redirect('/home');
            } else {
                res.send('Incorrect Email and/or Password');
                console.log(error);
            }
        } else {
            res.send('Incorrect Email and/or Password');
            console.log(error);
        }
    } else {
        res.send('Please enter an email and password');
    }
    res.end();
};