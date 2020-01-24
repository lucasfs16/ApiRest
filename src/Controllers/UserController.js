const User = require('../models/Users');



module.exports = {

    async  index(req, res, next){
       
        const users = await User.findAll();
        
        return res.json(users);
    
    },


     async store(req, res,next){
        
        const { first, last, participation } = req.body;

        const user = await User.create({ first, last, participation});
       
        return res.json(user);
    },

    async delete(req,res, next){
        
        const {user_id} = req.params;
       
        const user = await User.findByPk(user_id);
      
    if(!user){
          return res.status(400).json({error: 'User not Found'})
      }
        
        await user.destroy(user_id);

        return res.json(user);
    }

};