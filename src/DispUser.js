import React from 'react'

const DispUser = ({allUser}) => {
  return (
    <div>
        <div className="m-1">
        {allUser == "" ? (
          <h2 className="text-center">There are no Users</h2>
        ) : (
          <table class="table table-striped table-bordered w-50 text-center mx-auto">
            <thead class="thead-dark">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Nationality</th>
              </tr>
            </thead>
            <tbody>
              {allUser.map((el, i) => (
                <tr key={i}>
                  <td>{el.username}</td>
                  <td>{el.userEmail}</td>
                  <td>{el.userCountry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

    </div>
  )
}

export default DispUser