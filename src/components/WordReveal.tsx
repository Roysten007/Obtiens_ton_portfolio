import { useScrollReveal } from '@/hooks/useAnimations';

interface Props {
  text: string;
  className?: string;
}

export default function WordReveal({ text, className = '' }: Props) {
  const { ref, isVisible } = useScrollReveal();
  const words = text.split(' ');
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block mr-[0.3em]"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s, transform 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.08}s`,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}
