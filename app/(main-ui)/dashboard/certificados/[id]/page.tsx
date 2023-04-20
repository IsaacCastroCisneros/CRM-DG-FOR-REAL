"use client"
import dynamic from 'next/dynamic';
import TableEdit from './components/TableEdit';


const EditCertificado=({ params }: any)=> 
{
    const { id } = params
    return(
        <>
            <h1 className='Montserrat font-black text-2xl mb-5'>Cursos Inscritos de Juan Perez</h1>
            <TableEdit id={id} />
        </>
    )
}

export default EditCertificado