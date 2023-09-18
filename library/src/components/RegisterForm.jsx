const RegisterForm = () => {
  return (
    <div>
      <h1>Register user</h1>
      <form>
        <div>
          E-mail Address: 
          <input type="text" name="email"></input>
        </div>
        <div>
          Password:
          <input type="text" name="password"></input>
        </div>
        <button type="submit" name="login">login</button>
      </form>
    </div>
  )
}

export default RegisterForm