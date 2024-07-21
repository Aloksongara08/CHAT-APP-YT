const Login = () => {
	return (
	  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
		<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
		  <div className='flex items-center justify-center space-x-2 mb-6'>
			<h1 className='text-3xl font-semibold text-center text-gray-300'>Login</h1>
			<span className='text-3xl font-semibold text-blue-500'>ChatApp</span>
		  </div>
		  <form>
			<div>
			  <label className='label p-2'>
				<span className='text-base label-text'>Username</span>
			  </label>
			  <input
				type='text'
				placeholder='Enter username'
				className='w-full input input-bordered h-10'
				// value={username}
				// onChange={(e) => setUsername(e.target.value)}
			  />
			</div>
			<div>
			  <label className='label'>
				<span className='text-base label-text'>Password</span>
			  </label>
			  <input
				type='password'
				placeholder='Enter Password'
				className='w-full input input-bordered h-10'
				// value={password}
				// onChange={(e) => setPassword(e.target.value)}
			  />
			</div>
			<a href='#' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
			  {"Don't"} have an account?
			</a>
			<div>
			  <button className='btn btn-block btn-sm mt-2'>Login</button>
			  {/* {loading ? <span className='loading loading-spinner '></span> : "Login"} */}
			</div>
		  </form>
		</div>
	  </div>
	);
  };
  
  export default Login;
  




// STARTER CODE FOR THIS FILE
//   const Login = () => {
// 	return (
// 	  <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 		<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 		  <div className='flex items-center justify-center space-x-2'>
// 			<h1 className='text-3xl font-semibold text-center text-gray-300'>Login</h1>
// 			<span className='text-3xl font-semibold text-blue-500'>ChatApp</span>
		  
// 			<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input
// 							type='text'
// 							placeholder='Enter username'
// 							className='w-full input input-bordered h-10'
// 							// value={username}
// 							// onChange={(e) => setUsername(e.target.value)}
// 						/>
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 							// value={password}
// 							// onChange={(e) => setPassword(e.target.value)}
// 						/>
// 					</div>
// 					<a href='#'className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 							{/* {loading ? <span className='loading loading-spinner '></span> : "Login"} */}
						
// 					</div>
// 				</form>
// 		  </div>
// 		</div>
// 	  </div>
// 	);
//   };
  
//   export default Login;
  
   