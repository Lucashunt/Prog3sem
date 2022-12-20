import { useRef } from "react";
import PocketBase from 'pocketbase';
import { toast } from 'react-hot-toast';
import Link from "next/link";
import { useState } from "react";



export default function NewAccount () {
    const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
    const form = useRef();
    const email = useRef();
    const password = useRef();
    const name = useRef();
    const username = useRef();
    
    


    const [passwordstate, setPasswordstate] = useState("");
    const handlePasswordChange = (event) => {
        setPasswordstate(event.target.value);
      };

    async function createAcc(e) {
        e.preventDefault();
        const data = {
            "username": username.current.value,
            "email": email.current.value,
            "emailVisibility": true,
            "password": password.current.value,
            "passwordConfirm": password.current.value,
            "name": name.current.value,
        };
        try {
            const record = await pb.collection('users').create(data);
        toast.success('Oprettet bruger!');
        window.location = ('/profile')
        
        } catch (error) {
            toast.error(error.data.data.message);
            console.log(error.data.data.message)
        }

        


    }
    
    return (
        <>
        <div className='flex flex-col items-center justify-center h-screen'>
            <div className="h-2/6">
            <form ref={form} onSubmit={createAcc}>
          
          <div className="w-screen flex justify-center">
            <div className="grid grid-cols-2 gap-10  w-3/6">

            <label className="block">
                <span className="text-gray-700">Navn</span>
                <input
                    ref={name}
                  type="text"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  placeholder=""
                />
              </label>
            
            <label className="block">
                <span className="text-gray-700">Brugernavn</span>
                <input
                    ref={username}
                  type="text"
                  className="
                    mt-0
                    block
                    w-full
                    px-0.5
                    border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-black
                  "
                  placeholder=""
                />
              </label>

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
                  placeholder=""
                />
              </label>
              <label className="block">
                <span className="text-gray-700">Adgangskode &#40;Min. 8 tegn&#41;</span>
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
              <button type="submit" className="bg-blue-500 text-white rounded-lg py-2 font-bold hover:bg-blue-500/80 px-16 disabled:opacity-25" disabled={passwordstate.length <= 7}>Opret konto</button>
              </div>
              
            </div>
            
          </div>
          </form>

            <div className="flex justify-center mt-5">
                <button className="text-blue-600 underline italic"><Link href="/profile"><a>Allerede oprettet?</a></Link></button>
            </div>
          </div>  
            
        </div>
        
        </>
    )
}