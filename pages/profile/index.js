import { useRef } from "react";
import PocketBase from 'pocketbase';
import { toast } from 'react-hot-toast';
import Link from "next/link";
import { useState } from "react";

export default function Login () {
    const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');

    const form = useRef();
    const email = useRef();
    const password = useRef();
    async function login(e) {
        e.preventDefault();
    
        try {
        const authData = await pb.collection('users').authWithPassword(
            email.current.value,
            password.current.value,
        );
        toast.success('Logged in successfully!');
        window.location = (`/favoriteTeam/${pb.authStore.model.id}`)
        } catch (error) {
            toast.error(error.message);
            console.log(error.data)
            
        }




    }

    const [passwordstate, setPasswordstate] = useState("");
    const handlePasswordChange = (event) => {
        setPasswordstate(event.target.value);
      };
    
    return (
        <>
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className="h-2/6">
            <form ref={form} onSubmit={login}>
          
          <div className="w-screen flex justify-center">
            <div className="grid grid-cols-2 gap-10  w-3/6">
            

              <label className="block">
                <span className="text-gray-700">Email</span>
                <input
                    ref={email}
                  type="email"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  placeholder="premier@league.com"
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Adgangskode</span>
                <input
                    ref={password}
                  type="password"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  placeholder=""
                  onChange={handlePasswordChange}
                  value={passwordstate}
                />
              </label>
              <div className=" col-span-2 flex justify-center">
              <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 font-bold hover:bg-blue-500/80 px-16 disabled:opacity-25" disabled={passwordstate.length <= 7}>Log ind</button>
              </div>
              
            </div>
            
          </div>
          </form>

            <div className="flex justify-center mt-5">
                <button className="text-blue-600 underline italic"><Link href="/profile/create"><a>Opret konto?</a></Link></button>
            </div>
          </div>  
            
        </div>
        
        </>
    )
}