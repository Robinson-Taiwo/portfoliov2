import TypingAnimation from "@/components/ui/typing-animation";

interface TypingAnimationDemoProps {
    text: string;
    size?: "sm" | "md" | "lg" | "xl" | "base" | "sem"; // Added size prop
}

export function TypingAnimationDemo({ text, size }: TypingAnimationDemoProps) {
    return <TypingAnimation size={size}>{text}</TypingAnimation>;
}