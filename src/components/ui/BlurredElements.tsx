/**
 * Represents a component that renders a container with blurred elements that move around and react to mouse movement.
 */
import { useEffect, useState } from "react";
import "./styles.css";

interface Element {
  x: number;
  y: number;
  dx: number;
  dy: number;
}

/**
 * The BlurredElements component.
 */
const BlurredElements = () => {
  // a state variable to store the elements array
  const [elements, setElements] = useState<Element[]>([]);
  const elementCount = 15;

  useEffect(() => {
    /**
     * Generates initial elements with random positions and velocities.
     * @returns An array of initial elements.
     */
    const generateInitialElements = (): Element[] => {
      // Create an array of elementCount elements with random positions and velocities within the window bounds (window.innerWidth, window.innerHeight) and return it as an array of objects with properties (x, y, dx, dy)
      return Array.from({ length: elementCount }).map(() => ({
        // Math.random() generates a random number between 0 and 1, so multiplying it by window.innerWidth and window.innerHeight gives a random position within the window bounds
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        // Generate random velocities between -1 and 1 by subtracting 0.5 and multiplying by 2
        dx: (Math.random() - 1) * 2,
        dy: (Math.random() - 1) * 2,
      }));
    };

    // Generate initial elements
    const initialElements = generateInitialElements();

    // Set initial elements
    setElements(initialElements);

    /**
     * Updates the positions of the elements and handles bouncing off walls.
     *
     * The function is called every 20ms to update the positions of the elements based on their velocities and directions (dx, dy).
     */
    const updatePositions = () => {
      setElements((elements) =>
        elements.map((el) => {
          // Destructure element properties
          let { x, y, dx, dy } = el;

          // Update positions based on velocities and directions (dx, dy) of elements (el)
          x += dx; // Update x position by adding dx
          y += dy; // Update y position by adding dy

          // Bounce off walls if the element is at the edge of the screen
          // If the element is at the left or right edge of the screen (x <= 0 or x >= window.innerWidth - 50), reverse the x velocity (dx = -dx)
          if (x <= 0 || x >= window.innerWidth - 50) dx = -dx;
          // If the element is at the top or bottom edge of the screen (y <= 0 or y >= window.innerHeight - 50), reverse the y velocity (dy = -dy)
          if (y <= 0 || y >= window.innerHeight - 50) dy = -dy;

          // Return updated element properties (x, y, dx, dy) to the map function to update the element in the state array (elements)
          return { x, y, dx, dy };
        })
      );
    };

    // Update positions every 20ms (50 times per second)
    const intervalId = setInterval(updatePositions, 20);

    // Clear the interval when the component is unmounted or the state is updated
    return () => clearInterval(intervalId);
  }, []);

  /**
   * Handles the mouse move event and updates the positions of the elements based on the mouse position.
   * @param e - The mouse event.
   */
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setElements((elements) =>
      elements.map((el) => {
        // Calculate the distance between the element and the mouse cursor using Pythagorean theorem (distance = sqrt((x2 - x1)^2 + (y2 - y1)^2)) and check if it's within a certain range (200 pixels)
        const distance = Math.sqrt(
          (el.x - e.clientX) ** 2 + (el.y - e.clientY) ** 2
        );
        // If the distance is less than 200 pixels, calculate the angle and force based on the distance
        if (distance < 200) {
          // Calculate the angle between the element and the mouse cursor using arctangent
          // (angle = atan2((y2 - y1), (x2 - x1)))
          const angle = Math.atan2(el.y - e.clientY, el.x - e.clientX);
          // Calculate the force based on the distance (force = (100 - distance) / 100)
          const force = (100 - distance) / 100;

          // Calculate the change in x and y positions based on the angle and force
          // Multiply by 20 to increase the speed of the elements
          const dx = Math.cos(angle) * force * 10;
          const dy = Math.sin(angle) * force * 10;
          // Return the updated element position (x, y) by adding the change in x and y positions (dx, dy)
          return { ...el, x: el.x + dx, y: el.y + dy };
        }
        // If the distance is greater than 200 pixels, return the element without updating its position
        return el;
      })
    );
  };

  return (
    // Render a container with blurred elements that move around and react to mouse movement
    // Add a mouse move event listener to the container to handle mouse movement
    <div className="container" onMouseMove={handleMouseMove}>
      {/* Map over the elements array and render a blurred element div for each element */}
      {elements.map((el, index) => (
        <div
          key={index}
          className="blurred-element"
          style={{ transform: `translate(${el.x}px, ${el.y}px)` }}
        ></div>
      ))}
    </div>
  );
};

export default BlurredElements;
