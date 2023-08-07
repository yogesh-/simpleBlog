import {useState} from "react"

const useUpdateLike = (initialLike,id) => {
    // console.log(initialLike,id)
const [like,setLike] = useState(initialLike)
let like_value = initialLike + 1;
let user_id = id
const updateLike = async() => {
   
try {
    const response = await fetch(`http://localhost:3001/api/update-like/${like_value}/${user_id}`)
    if(response.status === 200){
        setLike(like_value)      
      }
} catch (error) {
    console.log("something went wrong",error)
}
}
return [like,updateLike]
}

export default useUpdateLike;