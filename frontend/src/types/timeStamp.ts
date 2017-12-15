interface TimeStamp {
    id: number;
    time: string;
    date: string;
    start_or_end: string;
}

interface TimeStamps {
    timeStamps: TimeStamp[];
}

export {
    TimeStamps
}