import questionSliderStyle from '../ComponentStyles/QuestionSlider.module.css';
import questionsArr from '../data/Questions.json';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Constant multipliers
let totalResult = 0;

export default function QuestionSlider() {

    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [inputs, setInputs] = useState(new Array(questionsArr.length).fill(''));
    const [results, setResults] = useState(new Array(questionsArr.length).fill(''));
    const [inputErrors, setInputErrors] = useState(new Array(questionsArr.length).fill(false));

    const nextQuestion = () => {
        setcurrentQuestionIndex(currentQuestionIndex === questionsArr.length - 1 ? 0 : currentQuestionIndex + 1);
        handleCalculate()
    }

    const prevQuestion = () => {
        setcurrentQuestionIndex(currentQuestionIndex === 0 ? questionsArr.length - 1 : currentQuestionIndex - 1)
    }

    const handleInputChange = (event) => {
        const { value } = event.target;

        const isValidInput = /^\d+$/.test(value);

        const newInputs = [...inputs];
        newInputs[currentQuestionIndex] = value;
        setInputs(newInputs);

        const newInputErrors = [...inputErrors];
        newInputErrors[currentQuestionIndex] = !isValidInput;
        setInputErrors(newInputErrors);
    }

    const handleCalculate = () => {
        const inputValue = parseInt(inputs[currentQuestionIndex]);
        const result = inputValue * values[currentQuestionIndex];
        const newResults = [...results];
        newResults[currentQuestionIndex] = result;
        setResults(newResults);
    }

    const handleSubmit = () => {
        handleCalculate()
        calculateTotalResult(); 
    }

    const calculateTotalResult = () => {
        totalResult = results.reduce((acc, curr) => {
            const parsedResult = parseInt(curr);
            return acc + (isNaN(parsedResult) ? 0 : parsedResult);
        }, 0);
        
        console.log('Total Result:', totalResult);
    }

    return (

        <div className={questionSliderStyle.questionSliderContainer}>
            {questionsArr.map((question, index) => {
                return (
                    <div className={currentQuestionIndex === index ?  questionSliderStyle.questionVisible : questionSliderStyle.questionHidden}>
                        <Typography variant="h3" color="white" className={questionSliderStyle.header}>
                            {question}
                        </Typography>

                        <Box component="form" sx={{'& > :not(style)': { m: 3, width: '25ch' },}} noValidate autoComplete="off" >
                            <TextField 
                                id="outlined-basic" 
                                label="Enter a number" 
                                variant="outlined" 
                                style={{color:"white"}}
                                onChange={handleInputChange}
                                error={inputErrors[index]}
                                helperText={inputErrors[index] ? 'Please enter a number' : ''}
                                className={questionSliderStyle.textField}
                            />
                        </Box>

                        <Button variant="contained" onClick={handleCalculate} >
                            Calculate
                        </Button>

                        <div className={questionSliderStyle.buttons}>
                            <Button variant="contained" onClick={prevQuestion}>
                                prev
                            </Button>

                            {results[index] !== undefined && (
                                <Typography variant="body1" color="white">
                                    Result: {results[index]}
                                </Typography>
                            )}

                            {index !== questionsArr.length - 1 && ( 
                                <Button variant="contained" onClick={nextQuestion}>
                                    Next
                                </Button>
                            )}

                            {index === questionsArr.length - 1 && ( 
                                <Button variant="contained" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            )}
                        </div>
                    </div>
                )
            })}

            <span className={questionSliderStyle.indicatorContainer}>
                {questionsArr.map((_, index) => {
                    return <button 
                        key={index} 
                        onClick={() => setcurrentQuestionIndex(index)} 
                        className={currentQuestionIndex >= index ? questionSliderStyle.activeIndicator : questionSliderStyle.inactiveIndicator}
                    ></button>
                })}
            </span>
        </div>
    )
}