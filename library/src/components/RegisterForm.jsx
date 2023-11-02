import loginImg from '../assets/login.jpg'

const RegisterForm = ({changeForm}) => {
  return (
    <div className='grid grid-cols-1 grid-rows-1 sm:grid-cols-2 h-screen w-full'>
      <div className='hidden sm:block'>
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-red-200 flex flex-col justify-center">
        <form className="fixed top-60 right-60 max-w-[400px] w-full mx-auto bg-white p-4 rounded-3xl shadow-2xl">
          <h2 className='text-4xl font-bold text-center py-5'>Register your account</h2>
          <div className="flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2 rounded-md" type ="email" name="email" id="email" placeholder='Your email'></input>
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input className="border p-2 rounded-md" type="password" name="password" id="password" placeholder="Your password"></input>
          </div>
          <div>
            <button className="border w-full my-5 py-2 bg-sky-600 hover:bg-violet-500 text-white">Register</button>
          </div>
          <div>
            <button onClick={changeForm} className="text-sky-600 hover:text-violet-500 hover:underline center">Already have an account? Log in</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm