import type { Soal } from "@/constant/quiz";

interface QuizPageProps {
    question: Soal;
    image: string;
    setSelectedAnswer: (isCorrect: boolean) => void; 
    handleNext: () => void;
    handleBack: () => void;
    handleFinish: () => void;
    isLastQuestion: boolean;
    isFirstQuestion: boolean;
}

export default function QuizPage({
    question,
    image,
    setSelectedAnswer,
    handleNext,
    handleBack,
    handleFinish,
    isLastQuestion,
    isFirstQuestion
}: QuizPageProps) {
    if (!question) return <p>Question not found</p>;

    return (
        <div className="flex items-center justify-center min-h-screen bg-white-soft">
            <div className="p-6 max-w-lg bg-white-dark rounded-lg shadow-lg flex flex-col w-">
                <div className="flex flex-col justify-center mb-6">
                    <img src={image} alt="question image" />
                    <h1 className="text-2xl font-semibold text-gray-800">{question.title}</h1>
                </div>
                <div className="flex flex-col space-y-4 mb-6">
                    {[question.opt1, question.opt2, question.opt3].map((option, idx) => (
                        <div className="flex items-center" key={idx}>
                            <input
                                type="radio"
                                id={`opt${idx + 1}`}
                                name="question"
                                value={option.name}
                                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                onChange={() => setSelectedAnswer(option.isCorrect)} 
                            />
                            <label htmlFor={`opt${idx + 1}`} className="ml-2 text-gray-700 cursor-pointer">
                                {option.name}
                            </label>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-end gap-2">
                    {!isFirstQuestion && (
                        <button
                            onClick={handleBack}
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Back
                        </button>
                    )}
                    {isLastQuestion ? (
                        <button
                            onClick={handleFinish}
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Finish
                        </button>
                    ) : (
                        <button
                            onClick={handleNext}
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
