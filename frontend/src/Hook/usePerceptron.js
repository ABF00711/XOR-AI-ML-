import { useContext } from "react";
import { PerceptronContext } from "../Context/perceptron";

const usePerceptron = () => {
    const { perceptron, setPerceptron } = useContext(PerceptronContext);

    const defaultTrain = () => {
        try {
            
        } catch (error) {
            console.log("default training error:", error);
        }
    }

    const customTrain = (data) => {
        try {
            
        } catch (error) {
            console.log("custom training error:", error);
        }
    }

    const testPerceptron = (inputData) => {
        try {
            
        } catch (error) {
            console.log("testPerceptron error:", error);
            return null;
        }
    }
    return {
        perceptron,
        setPerceptron,
        defaultTrain,
        customTrain,
        testPerceptron
    }
}

export default usePerceptron;