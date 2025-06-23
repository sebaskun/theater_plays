import { Clock } from "lucide-react";

interface DurationInfoProps {
  duration: string;
  className?: string;
}

function DurationInfo({ duration, className = "" }: DurationInfoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Clock className="w-4 h-4" />
      <span>{duration}</span>
    </div>
  );
}

export default DurationInfo;
