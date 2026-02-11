import { useState, useEffect, useCallback, use } from 'react';
import type { MascotState } from 
    import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

export interface ScheduleEntry {
    state: MascotState
    label: string
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
}

export const defaultSchedule: ScheduleEntry[] = [
    { state: "sleeping", label: "Sleeping", startHour: 0, startMinute: 0, endHour: 6, endMinute: 0 },
    { state: "waking", label: "Waking", startHour: 6, startMinute: 0, endHour: 7, endMinute: 0 },
    { state: "reminding", label: "Alarm!", startHour: 7, startMinute: 0, endHour: 7, endMinute: 30 },
    { state: "alert", label: "Alert", startHour: 7, startMinute: 30, endHour: 8, endMinute: 30 },
    { state: "celebrating", label: "On Time!" , startHour: 8, startMinute: 30, endHour: 9, endMinute: 0 },
    { state: "waving", label: "Waving", startHour: 9, startMinute: 0, endHour: 10, endMinute: 0 },
    { state: "idle", label: "Idle", startHour: 10, startMinute: 0, endHour: 24, endMinute: 0 },
]

function toMinutes(h: number, m: number) {
    return h * 60 + m;
}

function getStateForTime(schedule: ScheduleEntry[], date: Date): MascotState {
    const now = toMinutes(date.getHours(), date.getMinutes());

    for (const entry of schedule) {
        const start = toMinutes(entry.startHour, entry.startMinute);
        const end = toMinutes(entry.endHour, entry.endMinute);
        if (now >= start && now < end) {
            return entry.state;
        }
    }

    return "idle"; // Default state if no schedule entry matches
}

export function useTimeBasedState(schedule: ScheduleEntry[] = defaultSchedule) {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    const state = getStateForTime(schedule, currentTime);

    const update = useCallback(() => {
        setCurrentTime(new Date());
    }, []);

    useEffect(() => {
        const interval = setInterval(update, 10_000) // Checks every 10 seconds.
        return () => clearInterval(interval);
    }, [update]);

    return { state, currentTime };
}