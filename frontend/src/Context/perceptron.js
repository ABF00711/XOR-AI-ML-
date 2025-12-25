import { useState, createContext } from "react";

export const PerceptronContext = createContext([]);

const PerceptronProvider = ({ children }) => {
    const [perceptron, setPerceptron] = useState(null);

    return (
        <PerceptronContext.Provider value={{
            perceptron, setPerceptron
        }}>
            {children}
        </PerceptronContext.Provider>
    );
};

export default PerceptronProvider;

