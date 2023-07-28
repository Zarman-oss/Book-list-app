import { func } from "prop-types";
import { createContext, useState } from "react";

const BooksContext = createContext();

function Provider({ children }) {
    const [count, setCount] = useState([]);

    const valueToShare = {
        count,
        IncrementCount: () => {
            setCount(count + 1);
        }
    }
    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;

