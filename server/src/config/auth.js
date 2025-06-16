import jwt from "jsonwebtoken"

export const generateAuthToken = (userId, res) =>{
    // Generate JWT token 
    const token = jwt.sign({id: userId},process.env.JWT_SECRET,{
        expiresIn: "30d", //Token Valid Period
    });

    // Set token in response header
    res.cookie('token', token, {
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
        sameSite: 'strict',
    });
}