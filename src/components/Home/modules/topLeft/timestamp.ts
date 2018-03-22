enum Months {
    January, February, March, April, May, June, July, August, September, October, November, December
}

enum Weeks {
    MON, TUE, WED, THU, FRI, SAT, SUN
}

enum TimeLines {
    Morning, Noon, AfterNoooe, Evening, Night
}

class TimeStamp {
    time: number;
    constructor(timestamp: number) {
        this.time = timestamp;
    }
    getYear(): number {
        return new Date(this.time).getFullYear();
    }
    getMonth(): string {
        let month: number = new Date(this.time).getMonth();
        return Months[month];
    }
    getWeek(): string {
        let week: number = new Date(this.time).getDay() - 1;
        return Weeks[week];
    }
    getDay(): number {
        return new Date(this.time).getDate();
    }
    getTimeline(): void {
        let timeline: number = new Date(this.time).getHours();
        console.info(timeline);
    }
}

let p = new TimeStamp(new Date().getTime());
p.getYear();
p.getMonth();
p.getWeek();
p.getDay();
