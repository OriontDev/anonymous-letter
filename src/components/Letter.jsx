function Letter( {color, recipient, message }){

    const style = {
        padding: "5px",
        height: "400px",
        width: "400px",         // fixed width
        border: "solid 5px black",
        display: "flex",
        flexDirection: "column",
        flexShrink: "0",        // prevent shrinking
        boxSizing: "border-box",
        borderRadius: "10px",
    };
    const messageStyle = {
        fontFamily: "Arial, Helvetica, sans-serif",
        wordWrap: "break-word",
        whiteSpace: "pre-wrap",
        margin: "5px",
        fontSize: "1.46rem", // optional, can adjust
        overflowWrap: "break-word" // helps with long words
    };

    const textBackgroundStyle = {
        backgroundColor: color,
        height: "100%",
        border: "solid 1px black",
        overflow: "auto"
    }

    const titleStyle = {
        padding: "10px",
    }

    const content = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est sapiente nihil deleniti atque tempore inventore illo, itaque aliquid, unde autem cumque. Repellendus dolorem ex quo possimus nihil sapiente inventore voluptate.";
    const text = content.length > 200 ? content.slice(0, 200) + "..." : content;

    return(
        <div style={style}>
            <h1 style={titleStyle}>to: {recipient}</h1>
            <hr></hr>
            <div style={textBackgroundStyle}>
                <h2 style={messageStyle}>{message}</h2>
            </div>

        </div>
    );
}

export default Letter