const MBTI_TYPES = [
    "INFP", "ENFP", "INFJ", "ENFJ", "INTJ", "ENTJ", "INTP", "ENTP",
    "ISFP", "ESFP", "ISTP", "ESTP", "ISFJ", "ESFJ", "ISTJ", "ESTJ"
];

const LOCATIONS = ["교실", "동아리실", "운동장", "옥상", "교외", "체육관",
    "기숙사", "실습실", "미술실", "음악실","집"
];

const COMPATIBILITY = {
    "INFP": { "ENFJ": 5, "ENTJ": 5, "INFP": 4, "ENFP": 4, "INFJ": 4, "INTJ": 4, "INTP": 4, "ENTP": 4, "ISFP": 1, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "ENFP": { "INFJ": 5, "INTJ": 5, "INFP": 4, "ENFP": 4, "ENFJ": 4, "ENTJ": 4, "INTP": 4, "ENTP": 4, "ISFP": 1, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "INFJ": { "ENFP": 5, "ENTP": 5, "INFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "INTP": 4, "ENTJ": 4, "ISFP": 1, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "ENFJ": { "INFP": 5, "ISFP": 5, "ENFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "INTP": 4, "ENTP": 4, "ENTJ": 4, "ESFP": 1, "ISTP": 1, "ESTP": 1, "ISFJ": 1, "ESFJ": 1, "ISTJ": 1, "ESTJ": 1 },
    "INTJ": { "ENFP": 5, "ENTP": 5, "INFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "INTP": 4, "ENTJ": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 3, "ESTJ": 3 },
    "ENTJ": { "INFP": 5, "INTP": 5, "ENFP": 4, "INFJ": 4, "ENFJ": 4, "INTJ": 4, "ENTP": 4, "ENTJ": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 3, "ESTJ": 3 },
    "INTP": { "ENTJ": 5, "ESTJ": 5, "INFP": 4, "ENFP": 4, "INFJ": 4, "INTJ": 4, "INTP": 4, "ENTP": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 2, "ENFJ": 2 },
    "ENTP": { "INFJ": 5, "INTJ": 5, "INFP": 4, "ENFP": 4, "ENFJ": 4, "INTP": 4, "ENTP": 4, "ENTJ": 4, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 2, "ESFJ": 2, "ISTJ": 2, "ESTJ": 2 },
    "ISFP": { "ESFJ": 5, "ESTJ": 5, "ENFJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 3, "ISTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESFP": { "ISFJ": 5, "ISTJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ESFJ": 3, "ESTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ISTP": { "ESFJ": 5, "ESTJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ISFJ": 3, "ISTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESTP": { "ISFJ": 5, "ISTJ": 5, "ISFP": 3, "ESFP": 3, "ISTP": 3, "ESTP": 3, "ESFJ": 3, "ESTJ": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ISFJ": { "ESFP": 5, "ESTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ISFP": 3, "ISTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESFJ": { "ISFP": 5, "ISTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ESFP": 3, "ESTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ISTJ": { "ESFP": 5, "ESTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ISFP": 3, "ISTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "INTP": 2, "ENTP": 2 },
    "ESTJ": { "ISFP": 5, "ISTP": 5, "INTP": 5, "ISFJ": 4, "ESFJ": 4, "ISTJ": 4, "ESTJ": 4, "ESFP": 3, "ESTP": 3, "INFP": 1, "ENFP": 1, "INFJ": 1, "ENFJ": 1, "INTJ": 2, "ENTJ": 2, "ENTP": 2 }
};

// --- Script Modules ---
const SCRIPT_DB = {
    "DEFAULT": {
        "academic": [
            { text: "조용히 자습을 하며 시간을 보냈습니다.", desc: "자습", type: "friendship" },
            { text: "서로의 노트 필기를 비교하며 공부했습니다.", desc: "노트 공유", type: "friendship" },
            { text: "어려운 문제를 함께 고민하며 해결했습니다.", desc: "문제 풀이", type: "friendship" }
    ],
        "social": [
            { text: "시시콜콜한 농담을 주고받으며 웃었습니다.", desc: "잡담", type: "mixed" },
            { text: "최근 유행하는 영상에 대해 이야기했습니다.", desc: "영상 공유", type: "mixed" },
            { text: "서로의 고민을 들어주며 위로했습니다.", desc: "고민 상담", type: "mixed" }
        ],
        "hobby": [
            { text: "함께 모바일 게임을 하며 승부를 겨뤘습니다.", desc: "모바일 게임", type: "friendship" },
            { text: "이어폰을 나눠 끼고 좋아하는 음악을 들었습니다.", desc: "음악 감상", type: "mixed" },
            { text: "재미있는 웹툰을 추천해주며 시간을 보냈습니다.", desc: "웹툰 추천", type: "friendship" }
        ],
        "deviance": [
            { text: "몰래 챙겨온 간식을 수업 시간에 먹었습니다.", desc: "몰래 먹기", type: "mixed" },
            { text: "선생님 흉내를 내며 장난을 쳤습니다.", desc: "선생님 성대모사", type: "mixed" },
            { text: "복도에서 전력 질주를 하다가 걸릴 뻔했습니다.", desc: "복도 질주", type: "mixed" }
        ]
    },
    
    // --- Location Specific Overrides ---
    "교실": {
        "academic": [
            { text: "쉬는 시간에도 자리에 앉아 예습을 했습니다.", desc: "쉬는 시간 공부", type: "friendship" },
            { text: "칠판에 수학 문제를 적고 누가 먼저 푸나 내기했습니다.", desc: "칠판 문제 풀이", type: "friendship" }
        ],
        "deviance": [
            { text: "뒷자리에 앉아 몰래 쪽지를 주고받았습니다.", desc: "쪽지 교환", type: "mixed" },
            { text: "청소 당번을 땡땡이치고 도망갔습니다.", desc: "청소 땡땡이", type: "mixed" }
        ]
    },
    "동아리실": {
        "hobby": [
            { text: "동아리 비품을 정리하며 추억을 쌓았습니다.", desc: "비품 정리", type: "friendship" },
            { text: "동아리 활동 계획을 세우며 열정을 불태웠습니다.", desc: "활동 계획", type: "friendship" }
        ]
    },
    "운동장": {
        "hobby": [
            { text: "함께 축구를 하며 땀을 흘렸습니다.", desc: "축구", type: "friendship" },
            { text: "벤치에 앉아 지나가는 사람들을 구경했습니다.", desc: "사람 구경", type: "mixed" }
        ],
        "academic": [
            { text: "영어 단어장을 들고 트랙을 돌며 외웠습니다.", desc: "산책 암기", type: "friendship" }
        ]
    },
    "음악실": {
        "hobby": [
            { text: "피아노를 연주하며 서로의 실력을 뽐냈습니다.", desc: "피아노 연주", type: "mixed" },
            { text: "함께 노래를 부르며 화음을 맞춰보았습니다.", desc: "듀엣", type: "mixed" }
        ],
        "academic": [
            { text: "음악 이론 수행평가를 대비해 공부했습니다.", desc: "음악 이론", type: "friendship" }
        ]
    },
    "미술실": {
        "hobby": [
            { text: "서로의 얼굴을 크로키로 그려주며 웃었습니다.", desc: "크로키", type: "mixed" },
            { text: "물감으로 장난을 치다가 얼굴에 묻었습니다.", desc: "물감 장난", type: "mixed" }
        ],
        "deviance": [
            { text: "석고상에 낙서를 하다가 걸릴 뻔했습니다.", desc: "석고상 낙서", type: "mixed" }
        ]
    },
    "실습실": {
        "academic": [
            { text: "과학 실험을 함께 진행하며 원리를 탐구했습니다.", desc: "과학 실험", type: "friendship" },
            { text: "코딩 과제를 서로 도와주며 해결했습니다.", desc: "코딩 협업", type: "friendship" }
    ],
        "deviance": [
            { text: "실습용 컴퓨터로 몰래 게임을 했습니다.", desc: "몰래 게임", type: "mixed" }
        ]
    },
    "기숙사": {
        "social": [
            { text: "밤늦게까지 라면을 먹으며 이야기를 나눴습니다.", desc: "야식 타임", type: "mixed" },
            { text: "서로의 방을 구경하며 인테리어를 평가했습니다.", desc: "방 구경", type: "mixed" }
        ],
        "deviance": [
            { text: "소등 시간 이후에 몰래 깨어 놀았습니다.", desc: "새벽 일탈", type: "mixed" }
        ]
    },

    // --- Event Specific Overrides (Key: Event Name -> Location -> Action) ---
    "EVENTS": {
        "축제": {
            "운동장": {
                "hobby": [
                    { text: "축제 부스를 돌아다니며 맛있는 것을 사 먹었습니다.", desc: "축제 즐기기", type: "mixed" },
                    { text: "무대 공연을 보며 함께 환호했습니다.", desc: "공연 관람", type: "mixed" }
                ]
            },
            "교실": {
                "social": [
                    { text: "축제용 귀신의 집을 꾸미며 즐거워했습니다.", desc: "축제 준비", type: "friendship" }
                ]
            }
        },
                "시험": { 
            "교실": {
                "academic": [
                    { text: "시험 직전, 서로 예상 문제를 내주며 긴장감을 풀었습니다.", desc: "시험 직전 대비", type: "friendship" }
                ]
            },
            "기숙사": {
                "academic": [
                    { text: "밤샘 공부를 하다가 꾸벅꾸벅 졸았습니다.", desc: "벼락치기", type: "friendship" }
    ]
            }
        },
        "중간고사": {
            "교실": {
                "academic": [
                    { text: "중간고사를 대비해 필사적으로 요점 정리를 공유했습니다.", desc: "중간고사 대비", type: "friendship" }
                ]
            }
        },
        "기말고사": {
            "교실": {
                "academic": [
                    { text: "기말고사 범위까지 서로 퀴즈를 내며 공부했습니다.", desc: "기말고사 대비", type: "friendship" }
                ]
            }
        },
        "방학": {
            "교외": {
                "social": [
                    { text: "방학을 맞아 시내에 나가 영화를 보았습니다.", desc: "영화 관람", type: "mixed" },
                    { text: "유명한 맛집을 찾아가 맛있는 음식을 먹었습니다.", desc: "맛집 탐방", type: "mixed" },
                    { text: "쇼핑몰에서 서로의 옷을 골라주며 놀았습니다.", desc: "쇼핑", type: "mixed" }
                ],
                "hobby": [
                    { text: "함께 여행을 떠나 새로운 추억을 만들었습니다.", desc: "여행", type: "mixed" },
                    { text: "방학 동안 미뤄뒀던 취미 생활을 함께 즐겼습니다.", desc: "취미 공유", type: "friendship" }
                ],
                "academic": [
                    { text: "도서관에 가서 방학 숙제를 함께 했습니다.", desc: "방학 숙제", type: "friendship" }
                ],
                "deviance": [
                    { text: "늦은 밤까지 PC방에서 게임을 하며 놀았습니다.", desc: "PC방", type: "mixed" }
                ]
            },
            "기숙사": {
                "social": [
                    { text: "방학이라 텅 빈 기숙사에서 여유롭게 휴식을 취했습니다.", desc: "기숙사 휴식", type: "friendship" }
                ]
            }
        }
    }
};

const ACTION_KEYS = ["academic", "social", "hobby", "deviance"];

// --- State ---
let state = {
    day: 1,
    characters: [],
    relationships: {}, 
    logs: [],
    config: {
        groups: [
            { id: 0, name: 'A 그룹' },
            { id: 1, name: 'B 그룹' }
        ],
        useGroupRestriction: true
    }
};

let activeFilter = null; 

// --- Init ---
window.onload = () => {
    initMBTISelect();
    loadStateFromLocal();
    renderCharList();
    renderLogs();
    renderLocations(); 
    updateDateDisplay();
    updateUIFromConfig();

    // Initial resize and draw
    resizeCanvas();

    // Tab handling
    window.switchTab = (tabName) => {
        document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('nav button').forEach(el => {
            el.classList.remove('bg-indigo-50', 'text-indigo-600');
            el.classList.add('text-gray-700', 'hover:bg-gray-50');
        });
        
        const targetTab = document.getElementById(tabName);
        targetTab.classList.add('active');
        
        const btn = document.getElementById(`btn-${tabName}`);
        btn.classList.remove('text-gray-700', 'hover:bg-gray-50');
        btn.classList.add('bg-indigo-50', 'text-indigo-600');

        if (tabName === 'relationship') {
            renderRelationshipTable();
            // Slight delay to allow layout to settle before sizing canvas
            setTimeout(resizeCanvas, 50);
        }
    };

    window.addEventListener('resize', resizeCanvas);
};

function initMBTISelect() {
    const select = document.getElementById('char-mbti');
    MBTI_TYPES.forEach(type => {
        const opt = document.createElement('option');
        opt.value = type;
        opt.textContent = type;
        select.appendChild(opt);
    });
}

// --- Canvas Image Save ---
function saveCanvasImage() {
    const sourceCanvas = document.getElementById('relation-canvas');
    if(!sourceCanvas) return;

    // Create a temporary canvas with extra height for footer
    const tempCanvas = document.createElement('canvas');
    const footerHeight = 40;
    tempCanvas.width = sourceCanvas.width;
    tempCanvas.height = sourceCanvas.height + footerHeight;
    const ctx = tempCanvas.getContext('2d');

    // 1. Fill Background White
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // 2. Draw Original Canvas
    ctx.drawImage(sourceCanvas, 0, 0);

    ctx.fillStyle = '#64748b'; 
    ctx.font = 'bold 16px "Noto Sans KR", sans-serif';
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText("X @bb_uu_t", tempCanvas.width - 20, tempCanvas.height - (footerHeight / 2));

    // 4. Download
    const link = document.createElement('a');
    link.download = `relationship_diagram_${Date.now()}.png`;
    link.href = tempCanvas.toDataURL('image/png');
    link.click();
}

// --- Event Period Helper ---
// Uses month and day from getCalendarDate
function getCurrentSchedule(calendar) {
    const { month, day, year, dayOfWeek } = calendar;

    // Helper to check range
    const isBetween = (m, d, startM, startD, endM, endD) => {
        if (m < startM || m > endM) return false;
        if (m === startM && d < startD) return false;
        if (m === endM && d > endD) return false;
        return true;
    };

    // Define Base Start Dates for Prep (Month, Day)
    const exams = [
        { name: "중간고사", startM: 4, startD: 14 },
        { name: "기말고사", startM: 6, startD: 22 },
        { name: "중간고사", startM: 10, startD: 9 },
        { name: "기말고사", startM: 12, startD: 5 }
    ];

    // Helper to get days in month (Leap year aware)
    const getDaysInMonth = (m, y) => {
        const days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) days[2] = 29;
        return days[m];
    };

    // Helper to calculate day difference within/across months
    const getDaysDiff = (startM, startD, currM, currD, y) => {
        if (currM < startM) return -1;
        if (currM === startM) return currD - startD;
        
        // If months are different, sum up days
        let days = 0;
        // Add days of start month
        days += getDaysInMonth(startM, y) - startD;
        // Add days of intervening months
        for (let m = startM + 1; m < currM; m++) {
            days += getDaysInMonth(m, y);
    }
        // Add days of current month
        days += currD;
        return days;
    };

    // Check Exams
    for (const exam of exams) {
        // Check if current date is after prep start
        if (month === exam.startM && day >= exam.startD || (month > exam.startM && month <= exam.startM + 2)) {
            const diff = getDaysDiff(exam.startM, exam.startD, month, day, year);
            
            if (diff >= 0 && diff < 30) { // Check within a reasonable window

                const mod = (n, m) => ((n % m) + m) % m;
                const startDayOfWeek = mod(dayOfWeek - diff, 7);

                // Default: Prep 11 days (Day 0~10), Exam 3 days (Day 11~13)
                let prepLength = 11;
                let examStartDayOfWeek = mod(startDayOfWeek + prepLength, 7);
                
                // Adjustment: If exam starts Thu(4), Fri(5), Sat(6), Sun(0) -> Move to next Mon(1)
                // This ensures the 3-day exam block (Mon-Wed, Tue-Thu, Wed-Fri) avoids weekends.
                let delay = 0;
                if (examStartDayOfWeek === 4) delay = 4; // Thu -> Mon (+4 days)
                else if (examStartDayOfWeek === 5) delay = 3; // Fri -> Mon (+3 days)
                else if (examStartDayOfWeek === 6) delay = 2; // Sat -> Mon (+2 days)
                else if (examStartDayOfWeek === 0) delay = 1; // Sun -> Mon (+1 day)
                
                const realExamStart = prepLength + delay; // Relative day index
                const realExamEnd = realExamStart + 3;    // Duration 3 days

                if (diff < realExamStart) {
                    return { status: `${exam.name} 기간`, event: exam.name, type: "exam_prep" };
                } else if (diff >= realExamStart && diff < realExamEnd) {
                    return { status: exam.name, event: exam.name, type: "exam_day" };
                } else if (diff >= realExamEnd && diff < realExamEnd + 1) { 
                    // Just finished
                    return { status: "학기 중", event: null }; 
                }
            }
        }
    }

    // Festival (Fixed Date: 5/15 ~ 5/17)
    if (isBetween(month, day, 5, 15, 5, 17)) return { status: "축제 기간", event: "축제", type: "festival" };

    // Vacations
    // Summer: 7/20 ~ 8/20
    if (isBetween(month, day, 7, 20, 8, 20)) return { status: "여름방학", event: "방학", type: "vacation" };
    // Winter: 12/30 ~ 2/5
    if (month === 12 && day >= 30) return { status: "겨울방학", event: "방학", type: "vacation" };
    if (month === 1) return { status: "겨울방학", event: "방학", type: "vacation" };
    if (month === 2 && day <= 5) return { status: "겨울방학", event: "방학", type: "vacation" };
    // Spring: 2/15 ~ End of Feb
    if (month === 2 && day >= 15) return { status: "봄방학", event: "방학", type: "vacation" };
    // Semesters
    if (month >= 3 && month <= 7) return { status: "1학기", event: null };
    if (month >= 8 && month <= 12) return { status: "2학기", event: null };

    return { status: "학기 말", event: null };
}

// --- Helper: Get Script ---
function getActionScript(location, actionType, eventName) {
    let candidates = [];

    // 1. Event Specific Location Scripts
    if (eventName) {
        let eventKey = eventName; 
        if (eventName.includes("축제")) eventKey = "축제";
        if (eventName.includes("중간고사")) eventKey = "중간고사";
        if (eventName.includes("기말고사")) eventKey = "기말고사";
        if (eventName.includes("방학")) eventKey = "방학";

                // Check specific event scripts
        if (SCRIPT_DB.EVENTS[eventKey]) {
            if (SCRIPT_DB.EVENTS[eventKey][location] && SCRIPT_DB.EVENTS[eventKey][location][actionType]) {
            candidates = candidates.concat(SCRIPT_DB.EVENTS[eventKey][location][actionType]);
        }
    }

        if ((eventKey === "중간고사" || eventKey === "기말고사") && SCRIPT_DB.EVENTS["시험"][location] && SCRIPT_DB.EVENTS["시험"][location][actionType]) {
                candidates = candidates.concat(SCRIPT_DB.EVENTS["시험"][location][actionType]);
        }
    }

            // Normal location scripts
    if (SCRIPT_DB[location] && SCRIPT_DB[location][actionType]) {
        candidates = candidates.concat(SCRIPT_DB[location][actionType]);
    }

    // Default fallback
    if (candidates.length === 0) {
        candidates = SCRIPT_DB.DEFAULT[actionType];
    }

    return candidates[Math.floor(Math.random() * candidates.length)];
}

// --- Filter Logic ---
window.toggleFilter = (filterType) => {
    if (activeFilter === filterType) {
        activeFilter = null;
    } else {
        activeFilter = filterType;
    }
    
    // UI Update
    document.querySelectorAll('.legend-item').forEach(el => el.classList.remove('active'));
    if (activeFilter) {
        document.getElementById(`legend-${activeFilter}`).classList.add('active');
    }
    
    requestAnimationFrame(drawRelationshipGraph);
};

// --- Configuration Logic ---
function updateConfig() {
    state.config.useGroupRestriction = document.getElementById('config-use-restriction').checked;
            
    // Only update names from DOM
    state.config.groups.forEach(g => {
        const input = document.getElementById(`group-name-${g.id}`);
        if (input) g.name = input.value;
    });
    
    updateUIFromConfig();
    saveStateToLocal();
}

function changeGroupCount(delta) {
    const currentCount = state.config.groups.length;
    const newCount = currentCount + delta;

    if (newCount < 1 || newCount > 4) return;

    if (delta > 0) {
        // Add new group
        const newId = state.config.groups.length > 0 ? Math.max(...state.config.groups.map(g => g.id)) + 1 : 0;
        const newName = String.fromCharCode(65 + newId) + " 그룹"; // A, B, C, D... auto name
        state.config.groups.push({ id: newId, name: newName });
    } else {
        // Remove last group
        const removedGroup = state.config.groups.pop();
        
        // Reassign characters from removed group to the first group
        if (state.characters.length > 0 && state.config.groups.length > 0) {
            const fallbackGroup = state.config.groups[0].id;
            state.characters.forEach(char => {
                if (char.group == removedGroup.id) {
                    char.group = fallbackGroup;
                }
            });
        }
    }
    
    updateUIFromConfig();
    saveStateToLocal();
}

function updateUIFromConfig() {
    // Group Count
    document.getElementById('group-count-display').textContent = state.config.groups.length;
    
    // Group Name Inputs
    const container = document.getElementById('group-names-container');
    container.innerHTML = '';
    
    state.config.groups.forEach((g, index) => {
        const div = document.createElement('div');
        div.innerHTML = `
            <label class="block text-xs font-medium text-gray-500 uppercase">그룹 ${index + 1} 이름</label>
            <input type="text" id="group-name-${g.id}" class="w-full border p-1.5 rounded text-sm mt-1" value="${g.name}" onchange="updateConfig()">
        `;
        container.appendChild(div);
    });
    
    // Checkbox
    document.getElementById('config-use-restriction').checked = state.config.useGroupRestriction;

    // Dropdown in Add Character
    const select = document.getElementById('char-group');
    select.innerHTML = '';
    state.config.groups.forEach(g => {
        const opt = document.createElement('option');
        opt.value = g.id;
        opt.textContent = g.name;
        select.appendChild(opt);
    });

    renderCharList();
    const statusText = state.config.useGroupRestriction ? "그룹 제한 켜짐" : "그룹 제한 꺼짐";
    document.getElementById('canvas-status-group').textContent = statusText;
}

// --- Roster Management ---
function addCharacter() {
    const name = document.getElementById('char-name').value.trim();
    const mbti = document.getElementById('char-mbti').value;
    const group = document.getElementById('char-group').value;

    if (!name) return alert("이름을 입력해주세요.");
    if (state.characters.length >= 30) return alert("최대 30명까지만 등록할 수 있습니다.");
    if (state.characters.some(c => c.name === name)) return alert("이미 존재하는 이름입니다.");

    const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
    const newChar = { id, name, mbti, group, location: "교실" };

    state.characters.push(newChar);
    
    if (!state.relationships[id]) state.relationships[id] = {};
    
    state.characters.forEach(other => {
        if (other.id !== id) {
            if (!state.relationships[id][other.id]) {
                state.relationships[id][other.id] = { friendship: 0, romance: 0, isBestFriend: false, isCouple: false };
            }
            if (!state.relationships[other.id]) state.relationships[other.id] = {};
            if (!state.relationships[other.id][id]) {
                state.relationships[other.id][id] = { friendship: 0, romance: 0, isBestFriend: false, isCouple: false };
            }
        }
    });

    document.getElementById('char-name').value = '';
    renderCharList();
    renderLocations();
    saveStateToLocal();
}

function deleteCharacter(id) {
    if (!confirm("정말 삭제하시겠습니까?")) return;
    state.characters = state.characters.filter(c => c.id !== id);
    delete state.relationships[id];
    for (let key in state.relationships) {
        if (state.relationships[key][id]) delete state.relationships[key][id];
    }
    renderCharList();
    renderLocations();
    saveStateToLocal();
}

window.toggleCharacterGroup = (charId) => {
    const char = state.characters.find(c => c.id === charId);
    if (!char) return;

    const groups = state.config.groups;
    if (groups.length === 0) return;

    // Find current index
    let currentIndex = groups.findIndex(g => g.id == char.group);
    if (currentIndex === -1) currentIndex = 0;

    // Next index (cyclic)
    const nextIndex = (currentIndex + 1) % groups.length;
    char.group = groups[nextIndex].id;

    renderCharList();
    saveStateToLocal();
};

function renderCharList() {
    const tbody = document.getElementById('char-list-body');
    const emptyMsg = document.getElementById('empty-msg');
    const countSpan = document.getElementById('char-count');
    
    tbody.innerHTML = '';
    countSpan.textContent = state.characters.length;

    if (state.characters.length === 0) {
        emptyMsg.classList.remove('hidden');
    } else {
        emptyMsg.classList.add('hidden');
        state.characters.forEach(char => {
            const groupObj = state.config.groups.find(g => g.id == char.group);
            const groupName = groupObj ? groupObj.name : "알 수 없음";
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${char.name}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"><span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">${char.mbti}</span></td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer hover:text-indigo-600 font-bold" onclick="toggleCharacterGroup('${char.id}')" title="클릭하여 다음 그룹으로 변경">
                    ${groupName} <i class="fas fa-sync-alt text-xs ml-1 opacity-50"></i>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onclick="deleteCharacter('${char.id}')" class="text-red-600 hover:text-red-900">삭제</button>
                </td>
            `;
            tbody.appendChild(tr);
        });
    }
}

function renderLocations(activeParticipants = []) {
    const container = document.getElementById('location-container');
    container.innerHTML = ''; // Clear existing

    // 1. Identify occupied locations
    const occupiedLocations = new Set();
    state.characters.forEach(char => {
        if(char.location) occupiedLocations.add(char.location);
    });

    // 2. Render only occupied locations from LOCATIONS list to maintain order
    LOCATIONS.forEach(loc => {
        if(occupiedLocations.has(loc)) {
            // Create Box
            const box = document.createElement('div');
            box.className = 'location-box';
                    
            const titleDiv = document.createElement('div');
            titleDiv.className = 'location-title';
            titleDiv.textContent = loc;
            box.appendChild(titleDiv);

            const chipContainer = document.createElement('div');
            chipContainer.className = 'flex flex-wrap';
            box.appendChild(chipContainer);

            container.appendChild(box);

            state.characters.forEach(char => {
                if(char.location === loc) {
                    const chip = document.createElement('span');
                    chip.className = 'char-chip';
                    chip.textContent = char.name;
                    if (activeParticipants && activeParticipants.find(p => p.id === char.id)) {
                        chip.classList.add('active-actor');
                    }
                    chipContainer.appendChild(chip);
                }
            });
        }
    });
}

// --- Simulation Core ---
function nextTurn() {
    if (state.characters.length < 2) {
        alert("시뮬레이션을 위해 최소 2명의 캐릭터가 필요합니다.");
        return;
    }

            // Save previous date info to detect changes
    const prevCal = getCalendarDate(state.day);
    const prevSchedule = getCurrentSchedule(prevCal);

    state.day++;
    
    const calendar = getCalendarDate(state.day);
    const dateStr = `${calendar.yearStr} ${calendar.dateStr}`;
    const schedule = getCurrentSchedule(calendar);
    
    addLog('system', null, `📅 ${dateStr}`);

    // Event Notification Logic (Start/End only)
    // 1. New Event Started
    if (schedule.event && schedule.event !== prevSchedule.event && schedule.event !== "방학") {
        if (schedule.type === 'exam_prep') {
            addLog('event', null, `📝 ${schedule.event} 대비 기간이 시작되었습니다!`);
        } else if (schedule.type === 'festival') {
            addLog('event', null, `🎉 학교 축제가 시작되었습니다!`);
        }
    }
    // 2. Exam Days Start
    if (schedule.type === 'exam_day' && prevSchedule.type === 'exam_prep') {
        addLog('event', null, `✍️ ${schedule.event}가 시작되었습니다.`);
    }
    // 3. Event Ended
    if (prevSchedule.event && prevSchedule.event !== schedule.event && prevSchedule.event !== "방학") {
        // Check if it was really an exam end
        if (prevSchedule.type === 'exam_day') {
        addLog('event', null, `🏁 ${prevSchedule.event}가 모두 끝났습니다. 수고하셨습니다!`);
        } else if (prevSchedule.type === 'festival') {
                addLog('event', null, `축제가 끝났습니다.`);
        }
    }
    // 4. Vacation Start
    if (schedule.type === 'vacation' && prevSchedule.type !== 'vacation') {
        addLog('event', null, `🏖️ ${schedule.status}이 시작되었습니다!`);
    }

    const isWeekend = calendar.dayOfWeek === 0 || calendar.dayOfWeek === 6;

    // 1. Weekday Location Assignment (Exclude '집')
    if (!isWeekend) {
        const weekdayLocs = LOCATIONS.filter(l => l !== "집");
        state.characters.forEach(char => {
            char.location = weekdayLocs[Math.floor(Math.random() * weekdayLocs.length)];
    });
    }

    // 2. Process Turn
    if (isWeekend) {
        handleWeekend();
    } else {
        handleWeekdayMultiTeams(schedule.event);
    }

    updateDateDisplay(dateStr, schedule.status);
    saveStateToLocal();
}

// --- New Date & Calendar System ---
function getCalendarDate(turnCount) {
    let y = 1;
    let m = 3;
    let d = 1;
    let dayOfWeek = 0; // 0=Sun, 1=Mon
    
    for (let i = 1; i < turnCount; i++) {
        d++;
        dayOfWeek = (dayOfWeek + 1) % 7;

        // Check month end
        let daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if ((y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0)) {
            daysInMonth[2] = 29;
        }

        if (d > daysInMonth[m]) {
            d = 1;
            m++;
            if (m > 12) {
                m = 1;
                y++;
            }
        }
    }
    
    const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    return {
        yearStr: `${y}년차`,
        dateStr: `${m}월 ${d}일 (${dayNames[dayOfWeek]})`,
        month: m,
        day: d,
        year: y,
        dayOfWeek: dayOfWeek
    };
}

function handleWeekend() {
    // 1. Check for Couples & Best Friends events
    const participantsSet = new Set();
    const weekendEvents = [];

    for (let i = 0; i < state.characters.length; i++) {
        for (let j = i + 1; j < state.characters.length; j++) {
            const c1 = state.characters[i];
            const c2 = state.characters[j];

            if (!state.relationships[c1.id] || !state.relationships[c1.id][c2.id]) continue;
            
            const rel = state.relationships[c1.id][c2.id];
            
            if (rel.isCouple) {
                // Couple: 60% Chance
                if (!participantsSet.has(c1.id) && !participantsSet.has(c2.id) && Math.random() < 0.6) {
                    participantsSet.add(c1.id);
                    participantsSet.add(c2.id);
                    
                    // Pick location: '교외' or one of their houses ('집')
                    const meetLoc = Math.random() < 0.5 ? "교외" : "집";
                    c1.location = meetLoc;
                    c2.location = meetLoc;

                    let msg = "";
                    if(meetLoc === "교외") {
                        const acts = ["손을 잡고 시내 데이트를 즐겼습니다.", "영화관에서 함께 영화를 즐겼습니다.", "분위기 좋은 카페에서 이야기를 나눴습니다."];
                        msg = acts[Math.floor(Math.random() * acts.length)];
                    } else {
                        const acts = ["집에서 오붓한 시간을 보냈습니다.", "함께 요리를 하며 서로에게 음식을 먹여주었습니다."];
                        msg = acts[Math.floor(Math.random() * acts.length)];
                    }
                    weekendEvents.push(`<span class="log-special">[데이트] ${c1.name}, ${c2.name} : ${msg}</span>`);
                }
            } else if (rel.isBestFriend) {
                // Best Friend: 20% Chance
                if (!participantsSet.has(c1.id) && !participantsSet.has(c2.id) && Math.random() < 0.2) {
                    participantsSet.add(c1.id);
                    participantsSet.add(c2.id);
                    
                    const meetLoc = Math.random() < 0.5 ? "교외" : "집";
                    c1.location = meetLoc;
                    c2.location = meetLoc;

                    let msg = "";
                    if(meetLoc === "교외") {
                        const acts = ["시내에서 쇼핑을 즐겼습니다.", "맛집 탐방을 다녀왔습니다.", "노래방에서 노래를 열심히 불렀습니다."];
                        msg = acts[Math.floor(Math.random() * acts.length)];
                    } else {
                        const acts = ["집에 초대해서 같이 게임을 했습니다.", "집에서 배달 음식을 시켜 먹었습니다."];
                        msg = acts[Math.floor(Math.random() * acts.length)];
                    }
                    weekendEvents.push(`<span class="log-bestie">${c1.name}, ${c2.name} : ${msg}</span>`);
                }
            }
        }
    }

    const weekendSpots = ["기숙사", "교외", "집"];
    const individualActions = [
        "밀린 잠을 푹 잤습니다.",
        "시내에 나가서 쇼핑을 즐겼습니다.",
        "하루 종일 게임을 했습니다.",
        "가족들과 외식을 하며 시간을 보냈습니다.",
        "방 청소를 하며 하루를 보냈습니다.",
        "밀린 드라마를 정주행했습니다.",
        "본가에 내려가 휴식을 취했습니다.",
        "도서관에서 부족한 공부를 보충했습니다.",
        "취미 생활을 즐기며 힐링했습니다.",
        "노래방에서 스트레스를 풀었습니다.",
        "맛집을 찾아가 맛있는 것을 먹었습니다."
    ];

    const actionGroups = {};

    state.characters.forEach(char => {
        if (!participantsSet.has(char.id)) {
        char.location = weekendSpots[Math.floor(Math.random() * weekendSpots.length)];
            
            const action = individualActions[Math.floor(Math.random() * individualActions.length)];
            
            if (!actionGroups[action]) {
                actionGroups[action] = [];
            }
            actionGroups[action].push(char.name);
        }
    });
    
    renderLocations([...state.characters.filter(c => participantsSet.has(c.id))]);

    // Print Events
    weekendEvents.forEach(log => addLog('action', null, log));
    
    for (const [action, names] of Object.entries(actionGroups)) {
        const nameStr = names.join(", ");
        addLog('info', null, `[주말] ${nameStr} : ${action}`);
    }
}

function handleWeekdayMultiTeams(currentEventName) {
    const shuffled = [...state.characters].sort(() => 0.5 - Math.random());
    const allParticipants = [];
    
    while (shuffled.length >= 2) {
        const teamSize = Math.floor(Math.random() * 3) + 2;
        const size = Math.min(teamSize, shuffled.length);
        const team = shuffled.splice(0, size);
        
        processTeamAction(team, currentEventName);
        allParticipants.push(...team);
    }

    renderLocations(allParticipants);
}

function processTeamAction(participants, currentEventName) {
    const availableLocs = LOCATIONS.filter(l => l !== "집");
    const eventLocation = availableLocs[Math.floor(Math.random() * availableLocs.length)];
    participants.forEach(p => p.location = eventLocation);

    // Select Action
    const typeKey = ACTION_KEYS[Math.floor(Math.random() * ACTION_KEYS.length)];
    const actionObj = getActionScript(eventLocation, typeKey, currentEventName);

    participants.forEach(p => {
        p.lastSuccess = Math.random() < 0.6;
    });

    const names = participants.map(p => p.name).join(", ");
    let resultHtml = "";

    if (participants.length === 2) {
        const p1 = participants[0];
        const p2 = participants[1];
        if (p1.lastSuccess && p2.lastSuccess) {
            resultHtml = `<span class="log-success">둘 다 즐거워 보입니다. 좋은 시간을 보냈습니다.</span>`;
        } else if (!p1.lastSuccess && !p2.lastSuccess) {
            resultHtml = `<span class="log-fail">분위기가 어색합니다. 서로 실수를 한 것 같습니다.</span>`;
        } else {
            const winner = p1.lastSuccess ? p1.name : p2.name;
            resultHtml = `<span class="text-orange-600">${winner}만 즐거워 보입니다. 묘한 기류가 흐릅니다.</span>`;
        }
    } else {
        const successCount = participants.filter(p => p.lastSuccess).length;
        if (successCount === participants.length) {
            resultHtml = `<span class="log-success">모두가 완벽한 시간을 보냈습니다.</span>`;
        } else if (successCount === 0) {
            resultHtml = `<span class="log-fail">안타깝게도 아무도 즐기지 못했습니다.</span>`;
        } else {
            resultHtml = `<span>${successCount}명은 즐거웠지만, 나머지는 소외감을 느꼈습니다.</span>`;
        }
    }
    
    addLog('action', null, `[${eventLocation}] ${names} : ${actionObj.text}<br>↳ ${resultHtml}`);

    updateRelationships(participants, actionObj.type);
    checkRelationshipEvents(participants);
}

function updateRelationships(participants, actionType) {
    for (let i = 0; i < participants.length; i++) {
        for (let j = 0; j < participants.length; j++) {
            if (i === j) continue;

            const charA = participants[i];
            const charB = participants[j];

            const baseRand = Math.floor(Math.random() * 4) + 1; 
            const mbtiScore = COMPATIBILITY[charA.mbti][charB.mbti] || 3; 
            const extraRand = Math.floor(Math.random() * 5) + 1; 
            
            let changeVal = (baseRand * mbtiScore) + extraRand;

            if (!charA.lastSuccess) changeVal = -changeVal; 
            
            if (!state.relationships[charA.id]) state.relationships[charA.id] = {};
            if (!state.relationships[charA.id][charB.id]) state.relationships[charA.id][charB.id] = { friendship: 0, romance: 0, isBestFriend: false, isCouple: false };
            
            const rel = state.relationships[charA.id][charB.id];

            let isRomanceUpdate = false;
            
            if (actionType === 'friendship') {
                isRomanceUpdate = Math.random() < 0.1; 
            } else {
                isRomanceUpdate = Math.random() < 0.3;
            }

            const isSameGroup = charA.group === charB.group;
            const restrictionEnabled = state.config.useGroupRestriction !== false;

            if (restrictionEnabled && isSameGroup) {
                isRomanceUpdate = false; 
            }

            if (isRomanceUpdate) {
                rel.romance = clamp(rel.romance + changeVal, -100, 100);
            } else {
                rel.friendship = clamp(rel.friendship + changeVal, -100, 100);
            }
        }
    }
}

// New Probability Logic Function
function calculateEventSuccessChance(scoreA, scoreB) {
    const minScore = Math.min(scoreA, scoreB);
    
    // 1. Both >= 80 -> 100%
    if (minScore >= 80) return 1.0;

    // 2. Both >= 50 (implied, one < 80)
    if (minScore >= 50) {
        // Map 50 -> 30%, 65 -> 75%
        if (minScore < 65) {
            // Linear interpolation between 50(0.3) and 65(0.75)
            // Slope = (0.75 - 0.3) / (65 - 50) = 0.45 / 15 = 0.03
            return 0.30 + (minScore - 50) * 0.03;
        } else {
            // Map 65(0.75) to 80(1.0)
            // Slope = (1.0 - 0.75) / (80 - 65) = 0.25 / 15 = 0.01666...
            return 0.75 + (minScore - 65) * (0.25 / 15);
        }
    }

    return 0.0;
}

function getPartner(charId) {
    if (!state.relationships[charId]) return null;
    for (const targetId in state.relationships[charId]) {
        if (state.relationships[charId][targetId].isCouple) return targetId;
    }
    // Double check reverse direction just in case of data sync issues
    for (const targetId in state.relationships) {
        if (state.relationships[targetId][charId] && state.relationships[targetId][charId].isCouple) return targetId;
    }
    return null;
}

function checkRelationshipEvents(participants) {
        // 1. Process Breakups first (Passive check for participants)
        participants.forEach(p => {
            const partnerId = getPartner(p.id);
            if (partnerId) {
                const partner = state.characters.find(c => c.id === partnerId);
                const relToPartner = state.relationships[p.id][partnerId];
                const relFromPartner = state.relationships[partnerId][p.id];
                
                if (relToPartner && relFromPartner) {
                    let shouldBreakup = false;
                    
                    if (relToPartner.romance <= 50) shouldBreakup = true;
                    
                    if (relToPartner.romance < 70) {
                    for (const targetId in state.relationships[p.id]) {
                            if (targetId !== partnerId && state.relationships[p.id][targetId].romance > relToPartner.romance + 20) {
                            shouldBreakup = true;
                            break;
                            }
                        }
                    }

                    // Apply Chance (10%)
                    if (shouldBreakup && Math.random() < 0.1) {
                        relToPartner.isCouple = false;
                        relFromPartner.isCouple = false;
                        relToPartner.romance = -80;
                        relFromPartner.romance = -80;
                        relToPartner.friendship = 0;
                        relFromPartner.friendship = 0;
                        
                        addLog('breakup', null, `💔 [이별] ${p.name}와(과) ${partner.name}의 사이가 멀어져 헤어지게 되었습니다...`);
                    }
                }
            }
        });

        // 2. Process Positive Events (Confession, Best Friend)
        for (let i = 0; i < participants.length; i++) {
        for (let j = 0; j < participants.length; j++) {
            if (i === j) continue;

            const charA = participants[i];
            const charB = participants[j];

            const relAtoB = state.relationships[charA.id][charB.id];
            const relBtoA = state.relationships[charB.id][charA.id];
            
            if (!relAtoB || !relBtoA) continue;

            // 1. Check for Best Friend (Friendship check)
            // Check if *both* are at least 50 to attempt
            if (relAtoB.friendship >= 50 && relBtoA.friendship >= 50 && !relAtoB.isBestFriend && !relAtoB.isCouple) {
                // Calculate probability
                const chance = calculateEventSuccessChance(relAtoB.friendship, relBtoA.friendship);
                if (Math.random() < 0.1) {
                    if (Math.random() < chance) {
                        relAtoB.isBestFriend = true;
                        relBtoA.isBestFriend = true;
                        // Use the new Green style log for Best Friend Success
                        addLog('bestie-event', null, `💚 ${charA.name}와(과) ${charB.name}이(가) 서로를 둘도 없는 친구로 인정했습니다!`);
                    } else {
                        relAtoB.friendship -= 30;
                        relBtoA.friendship -= 30;
                        addLog('fail', null, `💔 ${charA.name}이(가) ${charB.name}에게 절친을 요청했으나, 거절당했습니다.`);
                    }
                }
            }

            // 2. Check for Confession (Romance >= 80)
            const isSameGroup = charA.group === charB.group;
            const restrictionEnabled = state.config.useGroupRestriction !== false;
            const hasPartnerA = getPartner(charA.id);
            const hasPartnerB = getPartner(charB.id);
            
            // Trigger only if NO partners
            if (!hasPartnerA && !hasPartnerB && (!restrictionEnabled || !isSameGroup) && relAtoB.romance >= 50 && relBtoA.romance >= 50 && !relAtoB.isCouple) {
                const chance = calculateEventSuccessChance(relAtoB.romance, relBtoA.romance);

                if (Math.random() < 0.1) { // 10% chance to consider asking
                    if (Math.random() < chance) {
                        relAtoB.isCouple = true;
                        relBtoA.isCouple = true;
                        relAtoB.isBestFriend = false;
                        relBtoA.isBestFriend = false;
                        addLog('special', null, `💘 ${charA.name}이(가) ${charB.name}에게 고백하여 커플이 되었습니다!`);
                    } else {
                        relAtoB.romance -= 50;
                        relBtoA.romance -= 50;
                        addLog('fail', null, `💔 ${charA.name}이(가) ${charB.name}에게 마음을 전했으나, 거절당했습니다.`);
                    }
                }
            }
        }
    }
}

function clamp(val, min, max) {
    return Math.min(Math.max(val, min), max);
}

function updateDateDisplay(dateStr, status) {
    if (!dateStr) {
        const cal = getCalendarDate(state.day);
        dateStr = `${cal.yearStr} ${cal.dateStr}`;
    }
    document.getElementById('current-date').textContent = dateStr;
            
    // If status is not provided (initial load), calculate it
    if(!status) {
        const cal = getCalendarDate(state.day);
        const schedule = getCurrentSchedule(cal);
        status = schedule.status;
    }
            
    document.getElementById('semester-status').textContent = status;
}

// --- Logging ---
function addLog(type, actors, message) {
    const container = document.getElementById('log-container');
    const div = document.createElement('div');
    div.className = 'log-item';
    div.innerHTML = `<div>${message}</div>`;
    
    if (type === 'system') {
        div.className = 'log-item border-b-2 border-indigo-100 bg-indigo-50/50 px-2 rounded mt-2';
        div.innerHTML = `<div class="font-bold text-indigo-800 text-sm">${message}</div>`;
    }
    else if (type === 'event') div.querySelector('div').className = 'log-event';
    else if (type === 'special') div.querySelector('div').className = 'log-special';
    else if (type === 'bestie-event') div.querySelector('div').className = 'log-bestie-event'; 
    else if (type === 'breakup') div.querySelector('div').className = 'log-breakup';
    else if (type === 'fail') div.querySelector('div').className = 'log-fail'; 
    else if (type === 'info' && message.includes('주말')) div.querySelector('div').className = 'log-weekend';

    state.logs.unshift(div.outerHTML);
    if (state.logs.length > 300) state.logs.pop();

    container.innerHTML = state.logs.join('');
}

function renderLogs() {
    document.getElementById('log-container').innerHTML = state.logs.join('');
}

function clearLogs() {
    state.logs = [];
    renderLogs();
}

// --- Data Persistence ---
function saveStateToLocal() {
    localStorage.setItem('schoolSimState', JSON.stringify(state));
}

function loadStateFromLocal() {
    const stored = localStorage.getItem('schoolSimState');
    if (stored) {
        const parsed = JSON.parse(stored);
        
        // Strict Migration: Convert old 'A', 'B' string IDs to 0, 1 integers
        // Only run this if we detect string IDs in config
        if (parsed.config && parsed.config.groups && parsed.config.groups.length > 0 && typeof parsed.config.groups[0].id === 'string') {
            // Mapping logic: 'A'->0, 'B'->1, 'C'->2 ...
            const idMap = {};
            const newGroups = parsed.config.groups.map((g, idx) => {
                idMap[g.id] = idx; // Map old ID to new Index ID
                return { id: idx, name: g.name };
            });
            parsed.config.groups = newGroups;

            // Update Characters
            if (parsed.characters) {
                parsed.characters.forEach(c => {
                    if (idMap[c.group] !== undefined) {
                        c.group = idMap[c.group];
                    } else {
                        c.group = 0; // Fallback
                    }
                });
            }
        }

        if (!parsed.config.groups) {
            parsed.config.groups = [
                { id: 0, name: parsed.config.groupA || 'A 그룹' },
                { id: 1, name: parsed.config.groupB || 'B 그룹' }
            ];
        }
                
        state = { 
            ...state, 
            ...parsed,
            config: { ...state.config, ...(parsed.config || {}) }
        };
    }
}

function saveDataToFile() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "school_sim_full_data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function loadDataFromFile(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const loaded = JSON.parse(e.target.result);
            if (loaded.characters) {
                if (loaded.config && loaded.config.groups && loaded.config.groups.length > 0 && typeof loaded.config.groups[0].id === 'string') {
                    const idMap = {};
                    const newGroups = loaded.config.groups.map((g, idx) => {
                        idMap[g.id] = idx;
                        return { id: idx, name: g.name };
                    });
                    loaded.config.groups = newGroups;

                    if (loaded.characters) {
                        loaded.characters.forEach(c => {
                            if (idMap[c.group] !== undefined) {
                                c.group = idMap[c.group];
                            } else {
                                c.group = 0;
                            }
                        });
                    }
                }

                if (!loaded.config.groups) {
                    loaded.config.groups = [
                        { id: 0, name: loaded.config.groupA || 'A 그룹' },
                        { id: 1, name: loaded.config.groupB || 'B 그룹' }
                    ];
                }
                
                state = {
                    ...state,
                    ...loaded,
                    config: { ...state.config, ...(loaded.config || {}) }
                };
                saveStateToLocal();
                location.reload(); 
            } else {
                alert("올바르지 않은 데이터 형식입니다.");
            }
        } catch (err) {
            alert("파일을 읽는 중 오류가 발생했습니다.");
        }
    };
    reader.readAsText(file);
}

// --- Roster Only Functions ---
function saveRosterOnly() {
    const exportData = {
        characters: state.characters,
        config: state.config
    };
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "school_sim_roster.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function loadRosterOnly(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const loaded = JSON.parse(e.target.result);
            if (loaded.characters && loaded.config) {
                if (loaded.config && loaded.config.groups && loaded.config.groups.length > 0 && typeof loaded.config.groups[0].id === 'string') {
                    const idMap = {};
                    const newGroups = loaded.config.groups.map((g, idx) => {
                        idMap[g.id] = idx;
                        return { id: idx, name: g.name };
                    });
                    loaded.config.groups = newGroups;

                    if (loaded.characters) {
                        loaded.characters.forEach(c => {
                            if (idMap[c.group] !== undefined) {
                                c.group = idMap[c.group];
                            } else {
                                c.group = 0;
                            }
                        });
                    }
                }

                if (!loaded.config.groups) {
                        loaded.config.groups = [
                        { id: 0, name: loaded.config.groupA || 'A 그룹' },
                        { id: 1, name: loaded.config.groupB || 'B 그룹' }
                    ];
                }

                if(confirm("현재 명단을 덮어쓰시겠습니까? 기존 관계 정보 중 사라진 학생 데이터는 삭제됩니다.")) {
                    state.characters = loaded.characters;
                    state.config = loaded.config;
                    
                    const validIds = new Set(state.characters.map(c => c.id));
                    const newRelationships = {};
                            
                    state.characters.forEach(c1 => {
                        newRelationships[c1.id] = {};
                        state.characters.forEach(c2 => {
                            if(c1.id === c2.id) return;
                            if(state.relationships[c1.id] && state.relationships[c1.id][c2.id]) {
                                newRelationships[c1.id][c2.id] = state.relationships[c1.id][c2.id];
                            } else {
                                newRelationships[c1.id][c2.id] = { friendship: 0, romance: 0, isBestFriend: false, isCouple: false };
                            }
                        });
                    });
                    
                    state.relationships = newRelationships;
                    
                    saveStateToLocal();
                    location.reload();
                }
            } else {
                alert("올바르지 않은 명단 데이터 형식입니다.");
            }
        } catch (err) {
            alert("파일을 읽는 중 오류가 발생했습니다.");
        }
    };
    reader.readAsText(file);
}

function resetAllData() {
    if (confirm("모든 데이터를 초기화하시겠습니까? 되돌릴 수 없습니다.")) {
        localStorage.removeItem('schoolSimState');
        location.reload();
    }
}

// --- Visualization (Relationship Graph) ---
function renderRelationshipTable() {
    const container = document.getElementById('relation-detail-container');
    container.innerHTML = '';
    
    if (state.characters.length === 0) {
        container.innerHTML = '<div class="text-center text-gray-400 p-4">등록된 학생이 없습니다.</div>';
        return;
    }
    
    state.characters.forEach(char => {
        // Main Item
        const item = document.createElement('div');
        item.className = 'accordion-item';

        // Find Group Name by ID
        const groupObj = state.config.groups.find(g => g.id == char.group);
        const groupName = groupObj ? groupObj.name : "알 수 없음";

        const header = document.createElement('div');
        header.className = 'accordion-header';
        header.innerHTML = `<span>${char.name} <span class="text-xs font-normal text-gray-500">(${groupName})</span></span> <i class="fas fa-chevron-down text-gray-400"></i>`;
        
        // Body (Table)
        const body = document.createElement('div');
        body.className = 'accordion-body';
        
        // Construct Table inside Body
        let tableHtml = `
            <table class="min-w-full text-sm divide-y divide-gray-100">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-3 py-2 text-left text-xs font-medium text-gray-500">대상</th>
                        <th class="px-3 py-2 text-center text-xs font-medium text-gray-500">우정</th>
                        <th class="px-3 py-2 text-center text-xs font-medium text-gray-500">애정</th>
                        <th class="px-3 py-2 text-center text-xs font-medium text-gray-500">상태</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-50">
        `;

        state.characters.forEach(target => {
            if (char.id === target.id) return;
            
            const rel = (state.relationships[char.id] && state.relationships[char.id][target.id]) 
                ? state.relationships[char.id][target.id] 
                : { friendship: 0, romance: 0, isBestFriend: false, isCouple: false };
            
            let statusBadge = "";
            if (rel.isCouple) statusBadge = "<span class='text-xs bg-pink-100 text-pink-800 px-1 rounded'>커플</span>";
            else if (rel.isBestFriend) statusBadge = "<span class='text-xs bg-green-100 text-green-800 px-1 rounded'>절친</span>";

            tableHtml += `
                <tr class="hover:bg-gray-50">
                    <td class="px-3 py-2 text-gray-700">${target.name}</td>
                    <td class="px-3 py-2 text-center ${rel.friendship > 0 ? 'text-green-600' : 'text-red-600'}">${rel.friendship}</td>
                    <td class="px-3 py-2 text-center ${rel.romance > 0 ? 'text-pink-600' : 'text-blue-600'}">${rel.romance}</td>
                    <td class="px-3 py-2 text-center">${statusBadge}</td>
                </tr>
            `;
        });
        tableHtml += `</tbody></table>`;
        body.innerHTML = tableHtml;

        // Event Listener
        header.onclick = () => {
            // Close others (Optional, usually better UX to allow multiple)
            // For now, simple toggle
            body.classList.toggle('open');
            header.classList.toggle('active');
        };

        item.appendChild(header);
        item.appendChild(body);
        container.appendChild(item);
    });
}

// New function to resize canvas
function resizeCanvas() {
    const canvas = document.getElementById('relation-canvas');
    const container = document.getElementById('canvas-container');
    
    if (!container || !canvas) return;

    const minSize = 800;
    canvas.width = Math.max(container.offsetWidth, minSize);
    canvas.height = Math.max(container.offsetHeight, minSize);
    
    drawRelationshipGraph(); // Redraw after resizing
}

function drawRelationshipGraph() {
    const canvas = document.getElementById('relation-canvas');
    
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const nodes = [];
    const margin = 100;
    const radius = Math.min(canvas.width, canvas.height) / 2 - margin;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const charCount = state.characters.length;

    if (charCount === 0) {
        ctx.fillStyle = "#9ca3af";
        ctx.font = "14px Noto Sans KR";
        ctx.textAlign = "center";
        ctx.textBaseline = 'middle';
        ctx.fillText("등록된 캐릭터가 없습니다.", centerX, centerY);
        return;
    }

    // 1. Calculate Node Positions
    state.characters.forEach((char, index) => {
        const angle = (index / charCount) * 2 * Math.PI - (Math.PI / 2); 
        nodes.push({
            id: char.id,
            name: char.name,
            group: char.group,
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle),
            angle: angle
        });
    });

    // 2. Draw Connections
    nodes.forEach(fromNode => {
        nodes.forEach(toNode => {
            if (fromNode.id === toNode.id) return;

            let rel = { friendship: 0, romance: 0 };
            if (state.relationships[fromNode.id] && state.relationships[fromNode.id][toNode.id]) {
                rel = state.relationships[fromNode.id][toNode.id];
            }

            // Check Filter
            let type = "";
            const absRom = Math.abs(rel.romance);
            const absFri = Math.abs(rel.friendship);
            const maxVal = Math.max(absRom, absFri);

            if (rel.isCouple) type = "couple";
            else if (rel.isBestFriend) type = "bestie";
            else if (absRom >= absFri) {
                type = rel.romance > 0 ? "high_romance" : "low_romance";
            } else {
                type = rel.friendship > 0 ? "high_friendship" : "low_friendship";
            }

            if (activeFilter && activeFilter !== type) return;
            if (maxVal < 5) return; 

            let color = "#ccc";
            if (type === "couple") color = "#ec4899"; 
            else if (type === "bestie") color = "#16a34a"; 
            else if (type === "high_romance") color = "rgba(244, 114, 182, 0.8)";
            else if (type === "low_romance") color = "rgba(96, 165, 250, 0.8)";
            else if (type === "high_friendship") color = "rgba(34, 197, 94, 0.8)";
            else if (type === "low_friendship") color = "rgba(248, 113, 113, 0.8)";

            const lineWidth = Math.max(1, (maxVal / 100) * 5);

            const midX = (fromNode.x + toNode.x) / 2;
            const midY = (fromNode.y + toNode.y) / 2;
            
            const dx = toNode.x - fromNode.x;
            const dy = toNode.y - fromNode.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist === 0) return;

            const nx = -dy / dist;
            const ny = dx / dist;

            const offset = 40; 
            const cpX = midX + nx * offset;
            const cpY = midY + ny * offset;

            ctx.beginPath();
            ctx.moveTo(fromNode.x, fromNode.y);
            ctx.quadraticCurveTo(cpX, cpY, toNode.x, toNode.y);
            ctx.strokeStyle = color;
            ctx.lineWidth = lineWidth;
            ctx.lineCap = 'round';
            ctx.stroke();

            // Draw Arrowhead
            const t = 1.0; 
            const arrowLen = 10;
            const nodeRadius = 25;
            
            const angleTo = Math.atan2(toNode.y - cpY, toNode.x - cpX);
            const tipX = toNode.x - nodeRadius * Math.cos(angleTo);
            const tipY = toNode.y - nodeRadius * Math.sin(angleTo);

            ctx.beginPath();
            ctx.moveTo(tipX, tipY);
            ctx.lineTo(tipX - arrowLen * Math.cos(angleTo - Math.PI / 6), tipY - arrowLen * Math.sin(angleTo - Math.PI / 6));
            ctx.lineTo(tipX - arrowLen * Math.cos(angleTo + Math.PI / 6), tipY - arrowLen * Math.sin(angleTo + Math.PI / 6));
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.fill();
        });
    });

    // 3. Draw Nodes
    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 25, 0, 2 * Math.PI);
        // Dynamic Color based on Group Index (0-3)
        const colors = ['#e0e7ff', '#fef3c7', '#dcfce7', '#fce7f3'];
        // Find group index in config
        const gIndex = state.config.groups.findIndex(g => g.id == node.group);
        if(gIndex >= 0) ctx.fillStyle = colors[gIndex % colors.length];
        else ctx.fillStyle = '#e0e7ff'; // Fallback

        ctx.strokeStyle = '#374151';
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

        ctx.font = 'bold 12px Noto Sans KR';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ffffff';
        ctx.strokeText(node.name, node.x, node.y);
        ctx.fillStyle = '#111827';
        ctx.fillText(node.name, node.x, node.y);
    });

    // Canvas Tooltip
    canvas.onmousemove = (e) => {
        const rect = canvas.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const tooltip = document.getElementById('canvas-tooltip');
        
        let found = false;
        nodes.forEach(node => {
            const d = Math.sqrt((mx - node.x)**2 + (my - node.y)**2);
            if (d < 25) {
                found = true;
                const char = state.characters.find(c=>c.id===node.id);
                const groupObj = state.config.groups.find(g => g.id == char.group);
                const groupName = groupObj ? groupObj.name : "알 수 없음";
                
                // Adjusted position: Closer to cursor (e.pageX + 15)
                tooltip.style.display = 'block';
                tooltip.style.left = (e.clientX + 15) + 'px';
                tooltip.style.top = (e.clientY + 15) + 'px';
                tooltip.innerHTML = `<strong>${node.name}</strong> (${groupName})<br>MBTI: ${char.mbti}`;
            }
        });
        if (!found) tooltip.style.display = 'none';
    };

}
