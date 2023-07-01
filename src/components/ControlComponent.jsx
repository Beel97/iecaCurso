import { useState } from "react"

const ControlComponent=()=>{
    const [inputValue, setInputValue]=useState("")
    const [error,setError]=useState("")
    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }

    const clear=()=>{
        setInputValue('')
        setError("")
    }
    const print = () => {
        alert(inputValue);
    };

    const validation=()=>{
        if(inputValue.length>10)
        {
            setError("Tas bien wey menos de 10 char")
        }
        else
        {
            alert("elValor Ta bien")
            setError("")
        }
    }
    

    return (
        <div className="bg-gray-200 flex-1 w-full">
            <div className="flex gap-4">
                <input type="text" value={inputValue} onChange={handleInputChange} />
                {!!error && <span className="text-red-500 text-sm">{error}</span>}
                <button onClick={clear}>Limpiar</button>
                <button onClick={print}>Imprimir</button>
                <button onClick={validation}>validar</button>
                el valor es: {inputValue}
            </div>
        </div>
    );
}

export default ControlComponent;