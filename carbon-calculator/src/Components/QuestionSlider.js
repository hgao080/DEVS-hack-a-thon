import questionSliderStyle from '../ComponentStyles/QuestionSlider.module.css';
import questionsArr from '../data/Questions.json';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Constant multipliers

export default function QuestionSlider() {

    const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
    const [inputs, setInputs] = useState(new Array(questionsArr.length).fill(''));
    const [results, setResults] = useState(new Array(questionsArr.length).fill(''));
    const [inputErrors, setInputErrors] = useState(new Array(questionsArr.length).fill(false));
    const [totalResult, setTotalResult] = useState(0);

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
    if (value === '') {
        newInputs[currentQuestionIndex] = '';
    } 
    else {
        newInputs[currentQuestionIndex] = value;
    }
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
        console.log(results); // This might log the previous state of results
    }

    useEffect(() => {
        const newTotalResult = results.reduce((acc, curr) => {
            const parsedResult = parseInt(curr);
            return acc + (isNaN(parsedResult) ? 0 : parsedResult);
        }, 0);
        setTotalResult(newTotalResult);
    }, [results]);

    const handleSubmit = () => {
        handleCalculate();
        nextQuestion();
    }
    
    const theme = createTheme()

    theme.typography.h3 = {
        fontWeight: '600',
        fontSize: '50px',
        color: 'white'
    }


    return (

        <div className={questionSliderStyle.questionSliderContainer}>

            <div className={questionSliderStyle.questionSlides}>
                {questionsArr.map((question, index) => {
                    return (
                        <div className={ currentQuestionIndex === index ? questionSliderStyle.questionVisible : questionSliderStyle.questionHidden }>
                            <Typography variant="h3" color="white" className={questionSliderStyle.header}>
                                {question}
                            </Typography>

                            <div className={ index === questionsArr.length - 1 ? questionSliderStyle.finalResult : questionSliderStyle.hidden }>
                                <ThemeProvider theme={theme}>
                                    <Typography variant="h3" className={questionSliderStyle.finalHeader}>
                                        You weekly contribution is:
                                    </Typography>
                                    <Typography variant="h3" className={questionSliderStyle.finalRe}>
                                        {totalResult}kg
                                    </Typography>
                                </ThemeProvider>
                            </div>

                            <Box component="form" sx={{'& > :not(style)': { m: 1, width: '400px', border: '0' }, }} noValidate autoComplete="off" className={ index === questionsArr.length - 1 ? questionSliderStyle.hidden : questionSliderStyle.visible }>
                                <TextField 
                                    id="outlined basic" 
                                    label="Enter a number" 
                                    variant="outlined" 
                                    style={{color:"white", border: 'none'}}
                                    onChange={handleInputChange}
                                    value={inputs[currentQuestionIndex]}
                                    error={inputErrors[index]}
                                    helperText={inputErrors[index] ? 'Please enter a number' : ''}
                                    className={questionSliderStyle.textField}
                                />
                            </Box>

                            <div className={questionSliderStyle.buttons}>
                                <Button variant="contained" onClick={prevQuestion}>
                                    prev
                                </Button>

                                {index < questionsArr.length - 2 && ( 
                                    <Button variant="contained" onClick={nextQuestion}>
                                        Next
                                    </Button>
                                )}

                                {index === questionsArr.length - 2 && ( 
                                    <Button variant="contained" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>

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