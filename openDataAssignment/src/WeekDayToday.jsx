// returns weekday as string
export function WeekDayToday() {
    return (Intl.DateTimeFormat("en-US", { weekday: "long" }).format(Date.now()));
}