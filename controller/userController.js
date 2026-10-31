let users = [
    {id:1,name:"shishir"},
    {id:2,name:"Pooja"},
    {id:3,name:"Amit"}
]

const getUser = async (req,res)=>{
    try {
        res.status(200).send(users);
    } catch (error) {
        console.log(error)
    }
}


const adduser = async (req,res)=>{
    try {
        const user = req.body;
        users.push(user);
        res.status(200).send('New User added',users);
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async (req,res)=>{
    const id = Number(req.params.id);
    try {
        const user = await users.filter(user=>user.id===id);
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req,res)=>{
    const id = Number(req.params.id);
    try {
        const user = await users.filter(user=>user.id!=id);
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getUser,
    adduser,
    getUserById,
    deleteUser

}