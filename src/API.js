const URL_PREFIX="http://localhost:3001"
// const URL_PREFIX="http://donutshopapi.herokuapp.com"

export default {
    getAllDonuts:function(){
        return fetch(`${URL_PREFIX}/api/donuts`).then(res=>res.json())
    } 
}