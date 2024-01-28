//This import is required in order to have the user details in the form 
import { useSelector } from 'react-redux';

export default function Profile()  { 
  //Lets initialize the current user 
  const { currentUser } = useSelector((state) => state.user)
  return (
    //To have the entire profile data with a little padding, and alligned to the center(mx-auto):
    <div className='p-3 max-w-lg mx-auto'>
      {/* Lets have heading with a font size of 3xl, lets make it semi bold and have it centered.  */}
      <h1 className = 'text-3xl font-semibold text-center my-7'>Profile</h1>
      {/* Lets have a form without any action as we are just displaying the profile picture, name, etc. Import the useSelector */}
      {/* Also lets add the required amount of gap between the username, email, etc.  */}
      <form className='flex flex-col gap-4'>
        {/* for the image, lets have the image rounded, whenever we move the cursor on the image there should be some effect, similar to having the text at the center we can have the image at the image at the center using self center*/}
        <img src = {currentUser.avatar} alt = "profile" 
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
        {/* Lets add the placeholder and id, basically representing what ever they are storing  */}
        <input type="text" placeholder='username' id = 'username' className='border p-3 rounded-lg' />
        <input type="email" placeholder='email' id = 'email' className='border p-3 rounded-lg' />
        <input type="text" placeholder='password' id = 'password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      {/* Lets add delete account and sign out  */}
      <div className="flex justify-between mt-5">
        <span className='text-red-700 cursor-pointer'>Delete account</span>
        <span className='text-red-700 cursor-pointer'>Sign out</span>
      </div>

    </div>
  )
}
