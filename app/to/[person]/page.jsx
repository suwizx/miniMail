'use client'

import { db } from '@/app/lib/firebase';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
const lineNotify = require('line-notify-nodejs')("jvcJUZnrHAms076BftrT1lVolmK4EWJFDVmiHqXAJZ4");

export default function Home({params}) {

  const [ isOpen , setOpen ] = useState(false)
  const [ data , setData ] = useState(false)
  const { person } = params

  const fetchData = async() => {
    const docRef = doc(db, "message", person);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setData(docSnap.data())
    } else {
      console.log("No such document!");
    }
  }

  const btn = () => {
    setOpen(true)
    lineNotify.notify({
      message: 'send test',
    }).then(() => {
      console.log('send completed!');
    }).catch((err) => {console.log(err);})
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <main className="min-h-screen bg-gradient-to-r from-violet-200 to-pink-200 flex items-center justify-center p-4">
      <div className="bg-white/40 shadow backdrop-blur-2xl border border-white rounded-xl max-w-[450px] w-full h-[300px] relative">
        <motion.div initial={{y:0,opacity:100}} animate={ isOpen ? {y:-50,opacity:0} : {}} className="bg-white backdrop-blur-2xl border p-4 rounded-xl max-w-[450px] h-[100px] w-full absolute text-black top-0 z-10 shadow-lg flex justify-center items-end">
          {data ? (
            <button onClick={btn} className="bg-gradient-to-tr from-pink-300 to-pink-200 h-[30px] flex items-center p-2 rounded-full shadow-xl hover:scale-105">
              เปิดจดหมาย
            </button>
          ) : 
          (
            <button className="text-white bg-gradient-to-tr from-zinc-500 to-zinc-400 h-[30px] flex items-center p-2 rounded-full shadow-xl">
              กำลังโหลด...
            </button>
          )}
        </motion.div>
        <motion.div initial={{y:0,opacity:100}} transition={{delay:0.4}} animate={ isOpen ? {y:900,opacity:0} : {}} className="bg-gradient-to-tr from-white to-pink-300 backdrop-blur-2xl border p-4 rounded-xl max-w-[450px] h-[250px] w-full absolute text-black bottom-0 flex items-end">
          ถึง : {data ? (<p className='ml-2'>{data.name}</p>) : (<div className='ml-2 animate-pulse bg-pink-300 rounded-full w-full max-w-[100px] h-6'></div>)}
        </motion.div>
        <div className='text-black p-4'>
          <div className='mb-2'>
            <h2 className='font-bold'>จาก : ปักษ์</h2>
          </div>
          <div>
            {data && (
              <p>{data.message}</p>
            )}
          </div>
          <div>
          </div>
        </div>
      </div>
    </main>
  );
}
