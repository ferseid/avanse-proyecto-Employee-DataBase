import React from 'react';
import {Link} from "react-router-dom";

class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { datosCargados:false }
    }

    cargarDatos(){

        fetch("http://localhost/empleados/")
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{
            
            console.log(datosRespuesta)
            this.setState({ datosCargados:true })
        })
        .catch(console.log)

    }

    componentDidMount(){
        this.cargarDatos();
    }

    render() { 
        const{datosCargados}=this.state

        if(!datosCargados){return(<div>Cargando...</div>);}
        else{
        return ( <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombres/Apellidos</th>
                    <th>Puesto</th>
                    <th>E-mail</th>
                    <th>Telefono</th>
                    <th>Direccion</th>
                    <th>Profecion</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td> Gabi Zacarias Melo</td>
                    <td> Supervisor</td>
                    <td> gabi-099@hotmail.com</td>
                    <td> Telefono</td>
                    <td> nacajuca</td>
                    <td> Ing.industrial</td>
                    <td>
                        <div className="btn-group" role="group" aria-label="">
                            <Link className="btn btn-warning" to={"/editar"}>Editar</Link>
                            <button type="button" className="btn btn-danger">Borrar</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>);
        }
    }
}
 
export default Listar;