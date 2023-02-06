import useClientes from "../hooks/useClientes";
import Cliente from "./Cliente";

const ListadoClientes = () => {

    const { clientes  } = useClientes()
    return (
        <>
            { clientes.length ? 
            (
                <>
                    <h2 className="font-black text-3xl text-center">Listado Clientes</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Clientes y Citas</span>
                    </p>

                    {clientes.map( cliente => (
                        <Cliente 
                            key={cliente._id}
                            cliente={cliente}
                        />
                    ))}
                </>
            ) : 
            (
                <>
                    <h2 className="font-black text-3xl text-center">No Hay Clientes</h2>

                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando Clientes {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en este lugar</span>
                    </p>
                </>
            )}
        </>
    )
  };
  
  export default ListadoClientes;
  