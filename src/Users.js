import React from 'react'
import { useState } from 'react'
import UserInfo from './UserInfo'
import DispUser from './DispUser'

const Users = () => {
    const [username, setUsername] = useState("")
    const [userEmail, setUserEmail] = useState("")
    const [userCountry, setUserCountry] = useState("")
    const [allUser, setallUser] = useState([])


    const addUser = (e) =>{
        e.preventDefault()
        let user_data ={username, userEmail, userCountry}
        setallUser([...allUser, user_data])
    }



  return (
    <div>
        <UserInfo
        addUser = {addUser}
        setUsername = {setUsername}
        setUserEmail = {setUserEmail}
        setUserCountry = {setUserCountry}
        />
        <DispUser allUser = {allUser}/>



    </div>
  )
}

export default Users