const jwt = require('jsonwebtoken')
const axios = require('axios')

module.exports.userAuth = async (req, res,next) => {
    try{
        const token =  req.cookies.token || req.headers.authorization.split(' ')[1];
        if(!token){
            return res.status(401).json({
                message:'Unauthorized Access'
            })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        const response = await axios.get(`${process.env.BASE_URL}/user/profile`,{
            headers:{
                authorization: `Bearer ${token}`
            }
        })
    const user =  response.data;

    if(!user){
        return res.status(401).json({
            message:"Unauthorized"
        })
    }

    req.user = user
    next()

    }
    catch(error){
        console.log("Error in the ride middleware")
        return res.status(500).json({
            message:error.message
        }) 
    }
}

module.exports.captainAuth = async (req, res, next) => {
    try {
        //  
        let token = null;

        if (req.cookies.token) {
            token = req.cookies.token;
        } else if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
        }
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const response = await axios.get(`${process.env.BASE_URL}/captain/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        const captain = response.data;

        if (!captain) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.captain = captain;

        next();

    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}