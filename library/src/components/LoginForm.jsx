const LoginForm = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Log in to access your library</h1>
      <form>
        <div className="self-auto">
          E-mail Address: 
          <input type="text" name="email"></input>
        </div>
        <div className="self-auto">
          Password:
          <input type="text" name="password"></input>
        </div>
        <button type="submit" name="login">login</button>
      </form>
      <div>
        Don't have an account? <button >Register now</button>
      </div>
    </div>
  )
}

export default LoginForm