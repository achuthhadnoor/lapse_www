import api from '../../lib/firebase'
module.exports = (req, res) => {
    const {
        query: { email,phrase }
    } = req; 
    api.verifyUser(email,phrase).then(()=>{
        return res.json({
            status:200,
            message:'verified'
        })
    })
    .catch((e)=>{
        console.log(e);
    })
    res.send({name:'achuth'})
}