export function Glitch() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="absolute">
            <defs>
                <filter id="glitch" x="0" y="0">

                    <feColorMatrix in="SourceGraphic" mode="matrix" values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0" result="r" />

                    <feOffset in="r" result="r" dx="-5" dy="0">
                        <animate attributeName="dx" attributeType="XML" values="-1; .5; 3; -2; .4; .5; 2; 1; -.5; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0;" dur=".5s" repeatCount="indefinite" />
                        <animate attributeName="dy" attributeType="XML" values="2; -1; .4; 2; 1; 3; -.5; 2; 1; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0;" dur="1s" repeatCount="indefinite" />
                    </feOffset>

                    <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0" result="g" />

                    <feOffset in="g" result="g" dx="-5" dy="0">
                        <animate attributeName="dx" attributeType="XML" values="0; 0; 0; 0; 0; 0; 0; 0; 2; -1; .4; 2; 1; 3; -.5; 2; 1; 0; 0; 0; 0; 0; 0; 0; 0;" dur="1.5s" repeatCount="indefinite" />
                        <animate attributeName="dy" attributeType="XML" values="0; 0; 0; 0; 0; 0; 0; 0; -1; .5; 3; -2; .4; .5; 2; 1; -.5; 0; 0; 0; 0; 0; 0; 0; 0;" dur="1s" repeatCount="indefinite" />
                    </feOffset>

                    <feColorMatrix in="SourceGraphic" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0" result="b" />

                    <feOffset in="b" result="b" dx="5" dy="0">
                        <animate attributeName="dx" attributeType="XML" values="0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 2; -1; .4; 2; 1; 3; -.5; 2; 1;" dur="0.35s" repeatCount="indefinite" />
                        <animate attributeName="dy" attributeType="XML" values="0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; 0; -1; .5; 3; -2; .4; .5; 2; 1; -.5;" dur="0.35s" repeatCount="indefinite" />
                    </feOffset>

                    <feBlend in="r" in2="g" mode="screen" result="blend" />

                    <feBlend in="blend" in2="b" mode="screen" result="blend" />

                </filter>
            </defs>
        </svg>
    )
}
