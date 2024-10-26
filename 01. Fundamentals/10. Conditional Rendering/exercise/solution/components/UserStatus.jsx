import React from 'react'

const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h2>Welcom Admin!</h2>
  } else {
    return <h2>Welcom User!</h2>
  }
}

export default UserStatus;