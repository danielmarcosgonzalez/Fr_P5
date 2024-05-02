
import { Estado, Tarea } from "../type.ts";
import { useSignal } from "@preact/signals";
import { FunctionComponent } from "preact";


const AddTarea:FunctionComponent = () => {
    //const [To_do,setTo_do]= useState<Tarea[]>([]);
    //const [In_progress,setIn_progress] = useState<Tarea[]>([]);
    //const [In_review,setIn_review] = useState<Tarea[]>([]);
    //const [Done, setDone] = useState<Tarea[]>([]);

    const mostrar = useSignal<boolean>(false);

    if(mostrar.value===true){
        return(
            <div>
            <h4>Mostrar formulario</h4>
            </div>
        )
    }

  return (
    <>
      <button class="ButtonCrear" onClick={()=>{mostrar.value===true}}>Crear</button>
    </>
  );
}
export default AddTarea;