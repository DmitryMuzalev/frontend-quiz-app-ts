import { useEffect, useState } from "react";

export function useLocalStorage<T>(
  initialValue: T,
  key: string
): [T, React.Dispatch<T>] {
  const getValue = () => {
    const store = localStorage.getItem(key);
    return store ? JSON.parse(store) : initialValue;
  };

  const [value, setValue] = useState<T>(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
