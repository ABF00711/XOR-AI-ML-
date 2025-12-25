import { useState, createContext } from "react";

export const PerceptronContext = createContext([]);

const initData = {
    name: "XOR Neural Network",
    description: "The XOR function outputs true only when the inputs differ. This seemingly simple operation was historically challenging for neural networks to learn, making it a perfect benchmark for testing AI capabilities.",
    function: `function f(x1, x2) {return x1 ^ x2;}`,
    train_formula: 
        `function getWeight(weight, learningRate, error, input) {
            return weight + (learningRate * error * input);
        }`,
    weights: [],
    bias: 1,
}

const PerceptronProvider = ({ children }) => {
    const [perceptron, setPerceptron] = useState({...initData});

    return (
        <PerceptronContext.Provider value={{
            perceptron, setPerceptron
        }}>
            {children}
        </PerceptronContext.Provider>
    );
};

export default PerceptronProvider;

