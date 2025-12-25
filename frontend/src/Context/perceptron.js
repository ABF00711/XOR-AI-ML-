import { useState, createContext } from "react";

export const PerceptronContext = createContext([]);

const PerceptronProvider = ({ children }) => {
    const [perceptron, setPerceptron] = useState({
        name: "XOR Neural Network",
        description: "The XOR function outputs true only when the inputs differ. This seemingly simple operation was historically challenging for neural networks to learn, making it a perfect benchmark for testing AI capabilities.",
        function: "f(x₁, x₂) = x₁ ⊕ x₂",
        train_formula: "w + Δw = w + η(d - y)x",
        weights: [],
        bias: 1,
    });

    return (
        <PerceptronContext.Provider value={{
            perceptron, setPerceptron
        }}>
            {children}
        </PerceptronContext.Provider>
    );
};

export default PerceptronProvider;

