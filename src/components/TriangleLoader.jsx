export default function TriangleLoader() {

    return (
        <div className="flex items-center justify-center h-screen w-screen bg-black">
            <svg
                viewBox="0 0 100 100"
                className="w-32 h-32"
                fill="none"
                stroke="#7C3AED"
                strokeWidth="4"
                strokeLinecap="round"
            >
                <polygon
                    points="50 10 90 75 10 75"
                    className="animate-triangle-spin"
                />
            </svg>
        </div>
    );
}
