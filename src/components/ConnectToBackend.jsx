import React from 'react'

export default function ConnectToBackend() {
  return (
    <div>
        <form action="http://localhost:8080/" method="POST">
            <input type="text" name='name'/>
            <button>Submit</button>
        </form>
    </div>
  )
}
