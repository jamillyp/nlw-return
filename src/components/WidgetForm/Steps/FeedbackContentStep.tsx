import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({ feedbackType, onFeedbackRestartRequested }: FeedbackContentStepProps) {
    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return (
        <>
            <header>
                <button
                    type="button"
                    className="top-5 left-5 absolute text-[#e9e9e9] hover:text-[#fff]" title="Voltar"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>
                <span className="text-xl leading-6 flex items-center gap-2">
                    <img
                        src={feedbackTypeInfo.img.source}
                        alt={feedbackTypeInfo.img.source}
                        className="w-6 h-6"
                    />
                    {feedbackTypeInfo.title}
                </span>

                <CloseButton />
            </header>

            <form className="my-4 w-full">
                <textarea
                    className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-[#c1c1c1] text-[#e9e9e9] border-[#6a6a6a] bg-transparent rounded-md focus:border-brand-500 focus:ring-1 focus:outline-none focus:border-brand-500 resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin  "
                    placeholder="Conte com detalhes o que está acontecendo..."

                />

                <footer className="flex gap-2 mt-2">
                    <button
                        type="submit"
                        className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#191919] focus:ring-brand-500 transition-colors"
                    >
                        Enviar feedback
                    </button>
                </footer>

            </form>
        </>
    );
}