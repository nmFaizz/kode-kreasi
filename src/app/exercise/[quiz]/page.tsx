"use client";

import { useState } from "react";
import QuizPage from "@/app/components/Quiz";
import { quizDasprog, quizPPL, quizSisdig, Soal } from "@/constant/quiz";
import Result from "@/app/components/Result"; 
import { notFound } from "next/navigation"; 

export default function SingleQuizPage({ params }: { params: { quiz: string } }) {
    const [index, setIndex] = useState(0);
    const [check, setCheck] = useState<string | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [showResult, setShowResult] = useState(false);

    let lesson: Soal[] = [];

    if (params.quiz === "dasprog") {
        lesson = quizDasprog;
    } else if (params.quiz === "sisdig") {
        lesson = quizSisdig;
    } else if (params.quiz === "ppl"){
        lesson = quizPPL;
    }else {
        return notFound(); 
    }

    const handleNext = () => {
        if (selectedAnswer !== null) {
            setAnswers((prevAnswers) => {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[index] = selectedAnswer;
                return updatedAnswers;
            });
        }
        setSelectedAnswer(null);
        setIndex((prevIndex) => prevIndex + 1);
    };
    
    const handleBack = () => {
        setIndex((prevIndex) => prevIndex - 1);
        setSelectedAnswer(null); 
    };

    const handleFinish = () => {
        if (selectedAnswer !== null) {
            setAnswers((prevAnswers) => {
                const updatedAnswers = [...prevAnswers];
                updatedAnswers[index] = selectedAnswer;
                return updatedAnswers;
            });
        }
        setShowResult(true);
    };


    const isLastQuestion = index === lesson.length - 1;
    const isFirstQuestion = index === 0;

    if (index >= lesson.length) return null; 

    const imagePath = (() => {
        if (params.quiz === "dasprog") {
            return `/dasprogImg/${index+1}.png`; 
        } else if (params.quiz === "sisdig") {
            return `/sisdigImg/${index+1}.png`; 
        } else if (params.quiz === "ppl") {
            return `/pplImg/${index+1}.png`; 
        } else {
            return ""; 
        }
    })();

    return (
        <div className="page-max-width">
            {showResult ? (
                <Result number={answers.filter(Boolean).length * (100/lesson.length)} />
            ) : (
                <QuizPage
                        questionIdx={index}
                        questionAll={lesson.length}
                        question={lesson[index]}
                        image={imagePath}
                        setSelectedAnswer={(isCorrect: boolean) => setSelectedAnswer(isCorrect)}
                        setCheck={setCheck}
                        handleNext={handleNext}
                        handleBack={handleBack}
                        handleFinish={handleFinish}
                        isLastQuestion={isLastQuestion}
                        isFirstQuestion={isFirstQuestion} check={check}   />
            )}
        </div>
    );
}
