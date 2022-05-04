import { CloseButton } from "../CloseButton";
import problema from '../../assets/Bug.svg';
import ideia from '../../assets/Idea.svg';
import outro from '../../assets/Thought.svg';
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        img: {
            source: problema,
            alt: 'Imagem de um inseto'
        }
    },
    IDEA: {
        title: 'Ideia',
        img: {
            source: ideia,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        img: {
            source: outro,
            alt: 'Imagem de um balão de pensamento'
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

    function handleRestartFeedback(){
        setFeedbackType(null);
    }

    return (
        <div className="bg-[#191919] p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
            ) : <FeedbackContentStep
                feedbackType={feedbackType}
                onFeedbackRestartRequested={handleRestartFeedback}

            />}

            <footer className="text-xs text-[#e9e9e9]">
                Feito com ♥ pela <a className="underline underline-offset-2" href="" >Jamilly</a>
            </footer>
        </div>
    );
}