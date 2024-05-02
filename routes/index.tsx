import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import { useState } from "preact/hooks";
import { Estado } from "../type.ts";
import AddTarea from "../islands/addTarea.tsx";

export default function Home() {
  
  return (
    <div>
      <div class="PageMain">
        
        <div class="PageMainButton">
          <AddTarea/>
        </div>

        <div class="PageMainTareas">
          <div class="Tarea1">
            <h4>To Do</h4>
          </div>

          <div class="Tarea2">
            <h4>In Progress</h4>
          </div>

          <div class="Tarea3">
            <h4>In Review</h4>
          </div>

          <div class="Tarea4">
            <h4>Done</h4>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}
