import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
//import useDispath
import { useDispatch, useSelector } from 'react-redux';
//importing all the functions that we have created
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(false);
  // Instead of the above two lines we can have: This is coming from global state (inside userSlice, the state name was user), to use this we have to import useSelector from react redux
const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  //initialize dispatch
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // setLoading(true);
      // instead of having setLoading(true), we can just dispatch the signInStart.  
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      if (data.success === false) {
        // setLoading(false);
        // setError(null);
        // Similarly for setLoading(false). setError, we don't want both of them, lets dispatch signInFailure.  
        dispatch(signInFailure(data.message));
        return;
      }
      // setError(data.message);
      // setLoading(false);
      // Once the sign in is done properly we can dispatch sign in success instead of the above two lines 
      dispatch(signInSuccess(data));
      navigate('/');
    }
    catch (error) {
      // setLoading(false);
      // setError(error.message);
      // Similarly here also 
      dispatch(signInFailure(error.message));
    }

  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} />
        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
