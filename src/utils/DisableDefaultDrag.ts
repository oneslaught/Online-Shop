import { useEffect, useRef } from "react";

export default function DisableDrag<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleDragStart = (event: DragEvent) => {
      event.preventDefault();
    };

    const element = ref.current;
    if (element) {
      element.addEventListener("dragstart", handleDragStart);
    }

    return () => {
      if (element) {
        element.removeEventListener("dragstart", handleDragStart);
      }
    };
  }, []);

  return ref;
}
