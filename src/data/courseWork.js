export const LabDeadlineData = [
    { name: 'Lab 1', start: '2026-09-14 18:50:00', end: '2026-09-27 23:59:59', },
    { name: 'Lab 2', start: '2026-10-12 18:50:00', end: '2026-10-25 23:59:59', },
    { name: 'Lab 3', start: '2026-10-26 18:50:00', end: '2026-11-08 23:59:59', },
    { name: 'Lab 4', start: '2026-11-09 18:50:00', end: '2026-11-22 23:59:59', },
    { name: 'Lab 5', start: '2026-11-23 18:50:00', end: '2026-12-06 23:59:59', },
    { name: 'Lab 6', start: '2026-12-07 18:50:00', end: '2026-12-20 23:59:59', },
    { name: 'Lab 7', start: '2026-09-28 18:50:00', end: '2026-12-30 23:59:59', },
    { name: 'Lab 8', start: '2026-09-30 18:50:00', end: '2026-12-30 23:59:59', },
];

export const LabSubmissionFinalDeadline = '2026-12-30';

const courseWorkData = {
    items: [
        { key: 0, name: '课程作业', cnt: 6, ratio: '15%' },
        { key: 1, name: '课堂测验', cnt: 8, ratio: '10%' },
        { key: 2, name: '课程实验', cnt: 8, ratio: '25%' },
        { key: 3, name: '期末考试', cnt: 1, ratio: '50%' },
    ],
    detail: [
        [
            { name: 'Homework 1', start: '2026-09-14 12:00:00', end: '2026-09-27 23:59:00', },
            { name: 'Homework 2', start: '2026-09-21 12:00:00', end: '2026-10-11 23:59:00', },
            { name: 'Homework 3', start: '2026-10-12 12:00:00', end: '2026-10-25 23:59:00', },
            { name: 'Homework 4', start: '2026-10-26 12:00:00', end: '2026-11-08 23:59:00', },
            { name: 'Homework 5', start: '2026-11-09 12:00:00', end: '2026-11-22 23:59:00', },
            { name: 'Homework 6', start: '2026-11-23 12:00:00', end: '2026-12-06 23:59:00', }
        ], [
            { name: 'Quiz 1', start: '2026-12-14 19:45:00', end: '2026-12-14 20:00:00', },
            { name: 'Quiz 2', start: '2026-12-14 20:00:00', end: '2026-12-14 20:15:00', },
            { name: 'Quiz 3', start: '2026-12-14 20:15:00', end: '2026-12-14 20:30:00', },
            { name: 'Quiz 4', start: '2026-12-21 12:05:00', end: '2026-12-21 12:20:00', },
            { name: 'Quiz 5', start: '2026-12-21 19:40:00', end: '2026-12-21 20:00:00', },
            { name: 'Quiz 6', start: '2026-12-21 20:00:00', end: '2026-12-21 20:20:00', },
            { name: 'Quiz 7', start: '2026-12-28 18:55:00', end: '2026-12-28 19:20:00', },
            { name: 'Quiz 8', start: '2026-12-28 19:15:00', end: '2026-12-28 19:35:00', }
        ], LabDeadlineData, [
            { name: '期末考试', start: '2027-01-11 10:30:00', end: '2027-01-11 12:30:00', },
        ]
    ]
}
export default courseWorkData;
