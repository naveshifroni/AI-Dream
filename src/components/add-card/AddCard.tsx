import { useState } from 'react';
import Modal from 'react-modal';
import { Gender } from '../../features/cards/cardSlice';
import { Card, addCard } from '../../features/cards/cardSlice';
import { v4 } from 'uuid';
import { useAppDispatch } from '../../app/hooks';

import Swal from 'sweetalert2';


const AddCard = () => {

   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [age, setAge] = useState(0);
   const [sensitive, setSensitive] = useState(false);
   const [funny, setFunny] = useState(false);
   const [smart, setSmart] = useState(false);//להחליף ל useref
   const [gender, setGender] = useState<Gender>('Robot');
   
   const dispatch = useAppDispatch();
    
 
    const [isOpen, setOpen] = useState(false);
    Modal.setAppElement("#root"); 

    const closeModal = ()=>{
        setOpen(false);
    };
   const openModal = ()=>{
        setOpen(true);
    };

  return (
    <>
           <div className='d-flex'>
    <button onClick={openModal}
     className='btn btn-primary mx-auto'>
      Create your own AI friend
    </button>
 </div>
 <Modal onRequestClose={closeModal} isOpen={isOpen}>
  <div className='d-flex card'>
    <h2 className='p-3'> Add A Card </h2>

<button className='btn btn-warning text-light m-3' onClick={closeModal}> Close Modal </button>
</div>
<hr />

name:
<input value={name} onChange={(e)=> setName(e.currentTarget.value)}/>
<br />
description:
<input value={description} onChange={(e)=> setDescription(e.currentTarget.value)}/>
<br />
age:
<input min='0' value={age} onChange={(e)=> setAge(+e.currentTarget.value)}/>
<br />
funny:
<input type='checkbox' checked={funny} onChange={(e)=> setFunny(e.currentTarget.checked)}/>
<br />
Smart:
<input type='checkbox' checked={smart} onChange={(e)=> setSmart(e.currentTarget.checked)}/>
<br />
Sensitive:
<input type='checkbox' checked={sensitive} onChange={(e)=> setSensitive(e.currentTarget.checked)}/>
<br />
Gender
<select value={gender} name="Gender" id="gender" 
onChange={(e)=>{
  const gen = e.currentTarget.value as Gender;
  setGender(gen);
}}
>
  <option value="Male"> Male </option>
  <option value="Female"> Female </option>
  <option value="Androgyny"> Androgyny </option>
  <option value="Robot"> Robot </option>
</select>
<button onClick={()=>{
  const card:Card={
    id: v4(),
    name: name,
    description: description,
    img:'fdf',
    age: age,
    funny: funny,
    smart: smart,
    sensitive: sensitive,
    gender: gender
};
dispatch(addCard(card));
Swal.fire('success','','success');
closeModal();
}}> Add Card </button>
 </Modal>
    </>
  )
}

export default AddCard