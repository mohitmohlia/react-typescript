import { useRef, useEffect } from "react";

function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input type="text" ref={inputRef} />;
}

export default DomRef;
