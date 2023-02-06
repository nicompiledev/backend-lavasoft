import { useState, useEffect } from 'react'
import Alerta from './Alerta'
import useClientes from '../hooks/useClientes';

const Formulario = () => {
    const [nombre, setNombre] = useState('')
    const [placa, setPlaca] = useState('')
    const [telefono, setTelefono] = useState('')
    const [fecha, setFecha] = useState('')
    const [servicio, setServicio] = useState('')
    const [id, setId] = useState(null)

    const [alerta, setAlerta] = useState({})

    const { guardarCliente, cliente } = useClientes()

    useEffect(() => {
        if(cliente?.nombre) {
            setNombre(cliente.nombre)
            setPlaca(cliente.placa)
            setTelefono(cliente.telefono)
            setFecha(cliente.fecha)
            setServicio(cliente.servicio)
            setId(cliente._id)
        }
       
    }, [cliente])

    


    const handleSubmit = e => {
        e.preventDefault()

        // validar el formulario
        if([nombre, placa, telefono, fecha, servicio].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }


        
        guardarCliente({ nombre, placa, telefono, fecha, servicio, id })
        setAlerta({
            msg: 'Guardado Correctamente'
        })
        setNombre('')
        setPlaca('')
        setTelefono('')
        setFecha('')
        setServicio('')
        setId('')
    }

    const { msg } = alerta
  return (
      <>
        <h2 className="font-black text-3xl text-center">Administrador de Clientes</h2>

        <p className="text-xl mt-5 mb-10 text-center">
            Añade tus clientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

 
      <form
        className="bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded-md"
        onSubmit={handleSubmit}
      >
          <div className="mb-5">
              <label 
                htmlFor="nombre" 
                className="text-gray-700 uppercase font-bold"
              
              >Nombre</label>
              <input 
                id="nombre"
                type="text"
                placeholder="Nombre"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={nombre}
                onChange={e => setNombre(e.target.value)}
              />
          </div>

          <div className="mb-5">
              <label 
                htmlFor="placa" 
                className="text-gray-700 uppercase font-bold"
              
              >Placa</label>
              <input 
                id="placa"
                type="text"
                placeholder="Placa"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={placa}
                onChange={e => setPlaca(e.target.value)}
              />
          </div>

          <div className="mb-5">
              <label 
                htmlFor="telefono" 
                className="text-gray-700 uppercase font-bold"
              
              >Telefono</label>
              <input 
                id="telefono"
                type="telefono"
                placeholder="Telefono"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={telefono}
                onChange={e => setTelefono(e.target.value)}
              />
          </div>

          <div className="mb-5">
              <label 
                htmlFor="fecha" 
                className="text-gray-700 uppercase font-bold"
              
              >Fecha Alta</label>
              <input 
                id="fecha"
                type="date"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={fecha}
                onChange={e => setFecha(e.target.value)}
              />
          </div>

          <div className="mb-5">
              <label 
                htmlFor="servicio" 
                className="text-gray-700 uppercase font-bold"
              >Servicio</label>
              <textarea 
                id="servicio"
                placeholder="Servicio"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                value={servicio}
                onChange={e => setServicio(e.target.value)}
              />
          </div>

            <input
                type="submit"
                className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                value={ id ? 'Guardar Cambios': "Agregar Cliente"}

            />
      </form>

      {msg && <Alerta alerta={alerta} />}


      </>
  )
};

export default Formulario;
