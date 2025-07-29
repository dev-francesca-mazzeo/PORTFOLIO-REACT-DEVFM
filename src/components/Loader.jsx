import { Html, useProgress } from "@react-three/drei";

// CanvasLoader component displays a loading indicator and progress percentage
// while 3D assets or models are being loaded in the canvas.
const CanvasLoader = () => {
  // useProgress hook provides the current loading progress as a percentage
  const { progress } = useProgress();

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column", // Stack loader and text vertically
      }}
    >
      {/* Visual loading spinner element */}
      <span className='canvas-loader'></span>

      {/* Display the current progress percentage with two decimals */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40, // Spacing above the text
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
