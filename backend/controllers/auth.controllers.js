export const loginUser = async (req,res) => {
    try{
        const{fullname,username,password,confirmPassword,gender} = req.body;
    }catch(error){
        
    }
};

export const signUp = (req,res) => {
    res.send("SignUP");
    console.log("SignUP");
};

export const logOut = (req,res) => {
    res.send("Logout");
    console.log("LogOut");
};