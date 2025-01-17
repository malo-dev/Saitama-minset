import React,{useState} from 'react'
import { Button } from '@material-tailwind/react';
import axios from 'axios';

const PaiyementModal = ({ Visible, Desciption, Prix, onClose }) => {
  const [stateItem,setStateItem] = useState("")
  const items = {
    btn : "bc1qsg05x3cnpjyc2clllg8mwun39eqg5gasns4q53",
    tron : "TW5PycWCJxek6jvbD926kmLzj35XgJWPXQ",
    Prix: 6,
    Description : "il s'agit d'un livre publié par MOHAMED qui parle de cryptomonaie qui defini ses principes"
    
  }
  
  if ( !Visible ) return null;
    
  return (
    <article
      className="fixed inset-0 bg-black
       bg-opacity-30 backdrop-blur-sm flex flex-col justify-center items-center">
      <main className="bg-white w-[400px] h-[400px] rounded-lg p-6 flex flex-col justify-between">
        <div className="text-center text-lg font-bold">Choisir votre moyen de paiement</div>
        <section className="flex flex-col gap-4 p-0 m-0">
          <div>Bitcoin adress : {items.btn} </div>
          <div>Tron adress : {items.tron} </div>
          <div>Desciption : {items.Description}</div>
          <div>Prix : {items.Prix}</div>
        </section>
        <section className="mt-8">
          <button onClick={() => {
            onClose()
            }}  variant="filled" className="w-[60px] bg-red-700 text-white font-medium">
            Close
          </button>
        </section>
      </main>
    </article>
  );
};

export default PaiyementModal