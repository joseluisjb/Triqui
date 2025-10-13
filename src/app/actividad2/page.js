"use client";

import { useState } from "react";

export default function Home() {
    const [tasks, setTasks] = useState(["Tarea 1", "Tarea 2"]);
    const [currentTask, setCurrentTask] = useState("");
    const [toggle, setToggle] = useState(Array(2).fill(false))
    const [esOrdenado, setEsOrdenado] = useState(false)

    const addButtonHandler = () => {
        if (currentTask === "") {
            alert("No puedes agregar una tarea vacía 😾");
        } else if (tasks.filter((tarea) => tarea == currentTask).length > 0) {
            alert(currentTask + " ya se encuentra en la lista");
        } else {
            setTasks([...tasks, currentTask]);
            setToggle([...toggle], false);
            setCurrentTask("");
        }
    };

    function tachar(i) {
        //Necesito tachar (volver true) el elemento en la pos i
        if (toggle[i]) {
            eliminarTarea(i)
        } else {
            let subArrayPrincipio = toggle.slice(0, i);
            let final = i == toggle.length - 1 ? toggle.length : i + 1
            let subArrayFinal = toggle.slice(final, toggle.length);
            let arrayNuevo = [...subArrayPrincipio, true, ...subArrayFinal];
            setToggle(arrayNuevo)
        }
    }

    function eliminarTarea(i) {
        //Eliminar la tarea(i) de toggle
        let subTogglePrincipio = toggle.slice(0, i);
        let toggleFinal = i == toggle.length - 1 ? toggle.length : i + 1
        let subToggleFinal = toggle.slice(toggleFinal, toggle.length);
        let toggleNuevo = [...subTogglePrincipio, ...subToggleFinal];
        setToggle(toggleNuevo);
        //Eliminar la tarea(i) de tasks
        let subTasksPrincipio = tasks.slice(0, i);
        let tasksFinal = i == tasks.length - 1 ? tasks.length : i + 1
        let subTasksFinal = tasks.slice(tasksFinal, tasks.length);
        let tasksNuevo = [...subTasksPrincipio, ...subTasksFinal];
        setTasks(tasksNuevo);
    }

    function ordenar() {
        let ordenado = [...tasks];
        if (esOrdenado) {
            ordenado.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
            setEsOrdenado(false);
        } else {
            ordenado.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
            setEsOrdenado(true);
        }
        setTasks(ordenado);
    }

    function eliminarTareas() {
        setTasks([]);
    }

    // Reto 1: Hacer que no se pueda agregar una tarea vacía //
    // Reto 2: Hacer que no se pueda agregar una tarea repetida //
    // Reto 3: Hacer que al dar click en una tarea, aparezca tachada (clase tailwind "line-through") //
    // Reto 4: Hacer que al dar click en una tarea tachada, desaparezca la tarea //
    // Reto 5: Poner un botón que organice las tareas alfabéticamente //
    // Reto 6: Poner un botón que elimine todas las tareas // 
    // Reto 7: Hacer que las tareas se ordenen en orden inverso al volver a presionar el botón de organizar //

    return (
        <section className="bg-red-100 p-4 max-w-2xl mx-auto my-10">
            <div className="my-2 flex gap-2">
                <input
                    className="bg-gray-100 border border-red-400 rounded-lg p-2"
                    type="text"
                    value={currentTask}
                    onChange={(e) => {
                        setCurrentTask(e.target.value);
                    }}
                />
                <button
                    className="bg-red-500 text-white rounded-lg px-4 py-2"
                    onClick={addButtonHandler}
                >
                    Agregar
                </button>
                <button className="bg-red-500 text-white rounded-lg px-4 py-2" onClick={ordenar}>
                    Ordenar
                </button>
                <button className="bg-red-500 text-white rounded-lg px-4 py-2" onClick={eliminarTareas}>
                    Eliminar
                </button>
                {/* <button className="bg-red-500 text-white rounded-lg px-4 py-2">
          Ordenar
        </button> */}
            </div>
            <div className="flex flex-col gap-2">
                {tasks.map((task, index) => (
                    <div key={index} onClick={() => tachar(index)} className={`bg-red-200 rounded-lg px-2 py-1 ${toggle[index] ? "line-through" : "no-underline"}`}>
                        {task}
                    </div>
                ))}
            </div>
        </section>
    );
}
