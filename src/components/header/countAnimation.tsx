import { useEffect, useState } from "react";

const Animation: React.FC = () => {
    const [availableCount, setAvailableCount] = useState(0);
    const [soldCount, setSoldCount] = useState(0);

    useEffect(() => {
        const value = (setter: React.Dispatch<React.SetStateAction<number>>, target: number) => {
            const interval = setInterval(() => {
                if (0 >= target) {
                    clearInterval(interval);
                    setter(target);
                } else {
                    setter(prev => Math.min(target, Math.floor(prev + target / (900 / 10))));
                }
            }, 10);
        };
        
        value(setAvailableCount, 3245);
        value(setSoldCount, 1150);        
    }, []);

    return (
        <div className="flex gap-6">
            <p><span className="text-[#7FA37F] font-bold">{availableCount}</span> elérhető ingatlan</p>
            <p><span className="text-[#7FA37F] font-bold">{soldCount}</span> eladva az elmúlt hónapban</p>
        </div>
    );
}

export default Animation;