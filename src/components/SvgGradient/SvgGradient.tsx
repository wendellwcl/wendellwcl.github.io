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
            <linearGradient id="fill-gradient" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#845eff" />
                <stop offset="30%" stopColor="#845eff" />
                <stop offset="70%" stopColor="#bc56ff" />
                <stop offset="100%" stopColor="#bc56ff" />
            </linearGradient>
        </svg>
    );
};

export default SvgGradient;
