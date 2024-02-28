const SvgGradient = () => {
    return (
        <svg
            style={{
                width: "0",
                height: "0",
                position: "absolute",
            }}
            aria-hidden="true"
            focusable="false"
        >
            <linearGradient id="my-cool-gradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#6acee3" />
                <stop offset="33%" stopColor="#845eff" />
                <stop offset="66%" stopColor="#bc56ff" />
                <stop offset="100%" stopColor="#d44eff" />
            </linearGradient>
        </svg>
    );
};

export default SvgGradient;
