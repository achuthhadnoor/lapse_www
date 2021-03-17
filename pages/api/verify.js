import api from '../../config/firebase'
module.exports = (req, res) => {
    const {
        query: { email,phrase }
    } = req
    api.verifyUser(email,phrase).then(()=>{
        return res.json({
            status:200,
            message:'verified'
        })
    })
    .catch((e)=>{
        
    })
}