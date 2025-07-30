function Color({ color, onColorPicked }){
    return(
        <>
            <div>
                <button onClick={() => onColorPicked(color)} className="color-button" style={{backgroundColor: color}}></button>
            </div>
        </>
    );
}

export default Color