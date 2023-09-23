import loginImg from '../assets/login.jpg'

const LoginForm = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className="w-full h-full object-cover overflow-hidden" src={loginImg} alt="" />
      </div>

      <div className="bg-red-200 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto bg-white p-4 rounded">
          <h2 className='text-4xl font-bold text-center py-5'>Log in to access your library</h2>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2 rounded" name="email" id="email" placeholder='Your email'></input>
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2 rounded" type="password" name="password" id="password" placeholder=""></input>
          </div>
          <button>Sign in</button>
          <div>
            <p>
              <input type="checkbox" /> Remember Me
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm