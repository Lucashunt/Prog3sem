// import PocketBase from 'pocketbase';
// import { useEffect } from 'react';
// import { useContext } from 'react';
// import AuthContext from '../lib/AuthContext';

// export default function test () {
//     const { user } = useContext(AuthContext);

//     async function logout () {
//         const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
//         console.log(pb)
//         pb.authStore.clear();

//         console.log(pb)
//     }

//     async function login () {
//         const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');

//         const authData = await pb.collection('users').authWithPassword(
//             'test@example.com',
//             '12345678',
//         );

//         console.log(authData);
//     }

//     async function pocketbaseTeam () {
//         const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');
//         const authData = await pb.admins.authWithPassword('lucashunt1@gmail.com', '1209990241Ll');

//         // example create data
//         const data = {
//             "team": "test",
//             "userID": "meayqi3tn48rsz4"
//         };
        
//         const record = await pb.collection('team').create(data);
//         console.log(record)
//     }

//     async function pocketbase () {
//         const pb = new PocketBase('https://pocketbaselucashunt.fly.dev');

// // example create data
// const data = {
//     "username": "test_username",
//     "email": "test@example.com",
//     "emailVisibility": true,
//     "password": "12345678",
//     "passwordConfirm": "12345678",
//     "name": "test"
// };

// const record = await pb.collection('users').create(data)
// console.log(record)
//     }


    

//     return (
//         <>
        
//         {user ? 
//         <>
//         <div>hello</div>
//         <button onClick={pocketbase}>click</button>

//         <button onClick={pocketbaseTeam}>click for team</button>
//         <button onClick={login}>Login</button>
//         <button onClick={logout}>Logout</button>
//         <div>{user}</div>
//         </>
//          : null }  
       
//         </>
//     )

// }

export default function test () {
    return (
        <div>hello</div>
    )
}