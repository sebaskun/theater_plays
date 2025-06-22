import {Users} from 'lucide-react';

interface ActorInfoProps {
  maleActors: number;
  femaleActors: number;
  className?: string;
}

function ActorInfo({ maleActors, femaleActors, className = '' }: ActorInfoProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Users className="w-4 h-4" />
            <span>
                {maleActors}♂ / {femaleActors}♀
            </span>
        </div>
    );
}

export default ActorInfo;