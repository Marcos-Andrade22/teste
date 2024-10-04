import React from "react";

const TextInput = ({label, value, onChange, placeholder}) =>{
    return(
        <div style={{marginBottom: "10px"}}>
            <label>
                {label}
                <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{ marginLeft: "5px", padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
            </label>
        </div>
    );
};

export default TextInput;